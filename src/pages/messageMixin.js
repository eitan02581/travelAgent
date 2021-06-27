import {
    DAYS,
    MONTHS,
    CLASSES_TYPE_MAP,
} from "src/assets/consts.js";
import { airlines } from "src/assets/airlines_big.js";
import index from "airportsjs";

const messageMixin = {
    methods: {
        init() {
            if (
                "contacts" in navigator &&
                "select" in navigator.contacts &&
                "getProperties" in navigator.contacts
            ) {
                this.contactListApiSupported = true;
            }

            if (!String.prototype.splice) {
                /**
                 * {JSDoc}
                 *
                 * The splice() method changes the content of a string by removing a range of
                 * characters and/or adding new characters.
                 *
                 * @this {String}
                 * @param {number} start Index at which to start changing the string.
                 * @param {number} delCount An integer indicating the number of old chars to remove.
                 * @param {string} newSubStr The String that is spliced in.
                 * @return {string} A new string with the spliced substring.
                 */
                String.prototype.splice = function (start, delCount, newSubStr) {
                    return (
                        this.slice(0, start) +
                        newSubStr +
                        this.slice(start + Math.abs(delCount))
                    );
                };
            }
        },
        async selectFromPhoneContactList() {
            if (this.contactListApiSupported) {
                try {
                    const availableProperties = await navigator.contacts.getProperties();

                    if (availableProperties.includes("address")) {
                        const contactProperties = ["name", "tel", "address"];

                        const contacts = await navigator.contacts.select(
                            contactProperties,
                            { multiple: false }
                        );

                        this.data.whatsappNumber = contacts[0].tel;
                        this.data.travelers[0].name = `${contacts[0].name}`;
                    } else {
                        console.log(
                            "Contact Picker API on your device doesn't support address property"
                        );
                    }
                } catch {
                    console.log("Unexpected error happened in Contact Picker API");
                }
            } else {
                console.log("Your browser doesn't support Contact Picker API");
            }
        },
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        onRedirectToWhatsapp() {
            const url = `https://api.whatsapp.com/send?phone=${this.data.whatsappNumber
                }&text=%20${encodeURIComponent(this.whatsappMessage)}`;
            window.open(url, "_blank");
        },
        getAmadeusTranslate(direction, linesString) {
            if (linesString.length) {
                let lines,
                    splited,
                    way,
                    airline,
                    flightNumber,
                    latterOfclassOfTravel,
                    flightClass,
                    departDate,
                    departAirportCode,
                    destAirportCode,
                    departAirport,
                    destAirport,
                    departDay,
                    destDay,
                    departTime,
                    destTime,
                    destDate,
                    dayNumber,
                    txt = "";

                way =
                    direction === "ALLER"
                        ? this.$t("outbound flight")
                        : direction === "OTHER_DEST"
                            ? this.$t("other destination flight")
                            : this.$t("inbound flight");
                lines = linesString.split("\n");
                lines.forEach((line, idx) => {
                    splited = this.getSplittedLine(line)
                    latterOfclassOfTravel = splited[3];
                    flightClass = this.setClassOfTravel(latterOfclassOfTravel)

                    airline = airlines.filter((item) => {
                        return item.IATA === splited[1];
                    })[0].name;
                    
                    flightNumber = `${splited[1]}${splited[2]}`;
                    dayNumber = splited[5];
                    departAirportCode = splited[6].slice(0, 3);
                    destAirportCode = splited[6].slice(3, 6);
                    this.data.journey.push(
                        index.lookupByIataCode(departAirportCode).city
                    );
                    this.data.journey.push(index.lookupByIataCode(destAirportCode).city);
                    departAirport = `${index.lookupByIataCode(departAirportCode).city}`;
                    destAirport = `${index.lookupByIataCode(destAirportCode).city}`;
                    departTime = `${splited[8].slice(0, 2)}:${splited[8].slice(2, 4)}`;
                    destTime = `${splited[9].slice(0, 2)}:${splited[9].slice(2, 4)}`;
                    departDate = `${splited[4]}`;
                    destDate = `${splited[10]}`;
                    departDay = DAYS[dayNumber - 1];

                    // * day logic
                    let departDateNumberOnly = +departDate.substr(0, 2),
                        destDateNumberOnly = +destDate.substr(0, 2),
                        departMonth = departDate.substr(2, 5),
                        destMonth = destDate.substr(2, 5);
                    if (departMonth === destMonth) {
                        destDay =
                            departDateNumberOnly !== destDateNumberOnly
                                ? departDateNumberOnly < destDateNumberOnly
                                    ? DAYS[+dayNumber === 7 ? 0 : +dayNumber]
                                    : // * in case dayNumber is mon (1) in js [0] and the previos day is sun (7) in js [6]
                                    +dayNumber === 1
                                        ? DAYS[6]
                                        : DAYS[dayNumber - 2]
                                : departDay;
                    } else if (MONTHS.indexOf(departMonth) > MONTHS.indexOf(destMonth)) {
                        // * in case dayNumber is mon (1) in js [0] and the previos day is sun (7) in js [6]
                        destDay = +dayNumber === 1 ? DAYS[6] : DAYS[dayNumber - 2];
                    } else {
                        destDay = DAYS[+dayNumber === 7 ? 6 : +dayNumber];
                    }
                    //

                    txt += `\n${airline} - *${flightNumber}* \n${departAirport} ${departAirport === "Tel Aviv" ? "➡️ " : `(${departAirportCode}) ➡️ `
                        }${destAirport} ${destAirport === "Tel Aviv" ? "" : `(${destAirportCode})`
                        } \n${this.$t(`${flightClass}`)} \n ${this.$t("dpt.")} ${this.$t(
                            `${departDay}`
                        )}${this.getRightSpaceAlignment(
                            departDay
                        )} ${departDate}${this.getRightSpaceAlignment(
                            departMonth
                        )} ${departTime}  \n ${this.$t("arr.")}  ${this.$t(
                            `${destDay}`
                        )}${this.getRightSpaceAlignment(
                            destDay
                        )} ${destDate}${this.getRightSpaceAlignment(
                            destMonth
                        )} ${destTime}\n   ${this.$t("seat number")} \n`;
                });
                return `*${way}* ${txt}`;
            } else return "";
        },
        getSplittedLine(line) {
            if (!line) return;
            let charsToFirstNumber
            charsToFirstNumber = line.search(/\d/);
            line = line.slice(charsToFirstNumber, line.length - 1);
            // * handles 4 numbers - ly1996
            line = line.splice(5, 0, " ");
            // * handle * - 4*
            line = line.splice(20, 1, " ");

            return line.split(/(\s+)/).filter((e) => e.trim().length > 0);
        },
        setClassOfTravel(latterOfclassOfTravel) {
            let isInClass = false, flightClass;
            for (const key in CLASSES_TYPE_MAP) {
                isInClass = CLASSES_TYPE_MAP[key].some(
                    (latter) => latter === latterOfclassOfTravel
                );
                if (isInClass) {
                    flightClass = key;
                    if (this.data.classOfTravel && this.data.classOfTravel !== key) {
                        this.data.classOfTravel = "combined compartment";
                    } else this.data.classOfTravel = key;
                }
            }
            return flightClass
        },
        getRightSpaceAlignment(str) {
            str = this.$t(str).toLowerCase();
            console.log(str);
            switch (str) {
                // * en
                case "sun":
                    return " ";
                case "tue":
                    return " ";
                case "thu":
                    return " ";
                case "fri":
                    return "   ";
                case "sat":
                    return "  ";
                // * fr
                case "dim":
                    return " ";
                case "lun":
                    return " ";
                case "mer":
                    return " ";
                case "jeu":
                    return " ";
                case "ven":
                    return " ";
                case "sam":
                    return "";
                // * months
                case "jan":
                    return "";
                case "feb":
                    return " ";
                case "mar":
                    return "";
                case "apr":
                    return " ";
                case "may":
                    return "";
                case "jun":
                    return " ";
                case "jul":
                    return " ";
                case "aug":
                    return "";
                case "sep":
                    return " ";
                case "oct":
                    return "";
                case "nov":
                    return " ";
                case "dec":
                    return "";

                default:
                    return "";
            }
        },
    }
}
export default messageMixin;