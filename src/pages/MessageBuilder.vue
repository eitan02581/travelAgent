<template>
  <q-page class="flex">
    <q-header>
      <q-toolbar>
        <q-toolbar-title> Travel Agent </q-toolbar-title>
      </q-toolbar>
      <q-tabs
        v-model="tab"
        class="bg-teal text-white shadow-2 full-width"
        narrow-indicator
        dense
        align="justify"
      >
        <q-tab class="text-white" name="info" icon="info" label="info" />
        <q-tab
          @click="onPreview"
          class="text-black"
          name="preview"
          icon="preview"
          label="preview"
        />
      </q-tabs>
    </q-header>

    <div v-if="tab === 'info'" class="full-width">
      <section class="q-mt-xl">
        <div class="flex q-px-sm">
          <q-input
            :style="{ 'margin-right': contactListApiSupported ? '20px' : '' }"
            style="flex: 1"
            class="q-mb-md"
            v-model="data.whatsappNumber"
            label="contact WhatsApp"
          />
          <q-btn
            v-if="contactListApiSupported"
            style="height: 50px"
            color="primary"
            icon="contacts"
            @click="selectFromPhoneContactList()"
          />
        </div>
        <h5
          class="bg-secondary text-white text-center q-mt-xl q-py-sm q-mb-lg"
          style="opacity: 0.73"
        >
          travelers
        </h5>
        <div
          style="overflow-x: auto; flex: nowrap; display: flex; max-width: 100%"
          class="items-center q-px-sm"
        >
          <div
            class="q-mr-md"
            v-for="(traveler, idx) in data.travelers"
            :key="idx"
          >
            <div
              style="min-width: 160px; position: relative"
              class="flex space-between"
            >
              <h6 class="q-mb-none">Traveler {{ idx + 1 }}</h6>
              <q-btn
                style="font-size: 9px; right: 13px; position: absolute"
                round
                v-if="idx !== 0"
                color="primary"
                icon="cancel"
                @click="onRemoveTraveler(idx)"
              />
            </div>
            <q-input
              class="q-mb-md"
              v-model="data.travelers[idx].name"
              label="name"
            />
            <q-select
              class="q-mb-md"
              filled
              v-model="data.travelers[idx].type"
              emit-value
              :options="TRAVELER_TYPES"
              label="Filled"
            />
          </div>
          <q-btn
            style="height: 35px; width: 35px"
            color="primary"
            icon="add"
            @click="onAddTraveler"
          />
        </div>
      </section>
      <h5
        class="bg-secondary text-white text-center q-py-sm q-mb-lg"
        style="opacity: 0.73; margin-top: 48px"
      >
        amadeus code
      </h5>
      <div class="q-px-sm">
        <h6 class="q-mb-sm">Outbound flights</h6>
        <q-input
          class="q-mb-lg"
          v-model="data.outboundAmadeusCode"
          filled
          autogrow
          placeholder="Outbound amadeus code"
        />
        <div v-for="(destination, idxx) in data.otherDestinations" :key="idxx">
          <div class="flex items-center q-mb-sm">
            <h6 class="q-mb-sm q-mr-md">Other destination {{ idxx + 1 }}</h6>
            <q-btn
              v-if="data.otherDestinations.length === idxx + 1"
              style="height: 20px; width: 35px; font-size: 8px"
              color="primary"
              icon="add"
              @click="onAddDestination"
            />
            <q-btn
              style="
                font-size: 7px;
                right: 13px;
                position: absolute;
                height: 15x;
                width: 22px;
                height: 22px;
              "
              round
              v-if="idxx !== 0"
              color="primary"
              icon="cancel"
              @click="onRemoveDestination(idxx)"
            />
          </div>
          <q-input
            class="q-mb-lg"
            v-model="data.otherDestinations[idxx]"
            filled
            autogrow
            :placeholder="`Other destination ${idxx + 1}`"
          />
        </div>
        <h6 class="q-mb-sm">Inbound flights</h6>
        <q-input
          v-model="data.inboundAmadeusCode"
          filled
          autogrow
          placeholder="Inbound amadeus code"
        />
      </div>
      <q-tabs
        v-model="selectedTemplateTab"
        inline-label
        class="q-mt-xl bg-purple text-white shadow-2"
      >
        <q-tab name="All" label="All" />
        <q-tab name="Multi tickets" label="Multi tickets" />
        <q-tab name="Family fare" label="Family fare" />
      </q-tabs>
      <section class="">
        <div
          class=""
          v-for="(items, boxName, idx) in formStructure"
          :key="boxName"
        >
          <h5
            class="bg-secondary text-white text-center q-py-sm q-mb-lg"
            style="opacity: 0.73"
            :style="{ 'margin-top': idx === 0 ? '' : '48px' }"
          >
            {{ boxName }}
          </h5>
          <div
            v-if="checkIfDisplay(boxName, item)"
            class="q-mt-md q-px-sm"
            v-for="(item, index) in items"
            :key="item"
            :class="[index === 0 ? 'q-mt-md' : 'q-mt-xl']"
          >
            <h6>{{ item }}</h6>
            <div
              v-for="(option, optionName) in data[boxName][item]"
              :key="optionName"
            >
              <q-input
                v-if="
                  option.type === 'input' &&
                  !option.hide &&
                  checkIfDisplaySubInput(optionName)
                "
                class="q-mt-sm"
                v-model.number="option.value"
                type="number"
                filled
                :label="option.label"
                style="max-width: 200px"
                :class="[option.subInput ? 'q-ml-md q-mt-sm' : '']"
              />

              <q-select
                v-else-if="
                  option.type === 'selectMultiple' &&
                  checkIfDisplaySubInput(optionName)
                "
                filled
                :type="option.type"
                v-model="option.selected"
                multiple
                :options="option.options"
                :label="
                  option.nameLabel
                    ? `${optionName} Multiple selection`
                    : 'Multiple selection'
                "
                style="max-width: 400px"
                :class="[option.subInput ? 'q-ml-md q-mt-sm' : '']"
                emit-value
              />
              <q-select
                v-else-if="
                  option.type === 'select' && checkIfDisplaySubInput(optionName)
                "
                filled
                :type="option.type"
                v-model="option.selected"
                :options="option.options"
                label="Select"
                style="max-width: 400px"
                :class="[option.subInput ? 'q-ml-md q-mt-sm' : '']"
                emit-value
              />
              <q-option-group
                v-else-if="
                  option.type === 'radio' || option.type === 'checkbox'
                "
                :options="option.options"
                :type="option.type"
                v-model="option.selected"
              />
            </div>
          </div>
        </div>
      </section>
      <h5
        class="bg-secondary text-white text-center q-py-sm q-mb-lg"
        style="opacity: 0.73; margin-top: 48px"
      >
        Language
      </h5>

      <q-option-group :options="LANGS" type="radio" v-model="selectedLang" />
    </div>
    <div class="full-width q-mt-xl q-px-sm" v-else>
      <q-input
        :style="{ direction: selectedLang === 'he' ? 'rtl' : 'ltr' }"
        rows="20"
        placeholder="preview"
        v-model="whatsappMessage"
        filled
        type="textarea"
      />
      <q-btn
        @click="onRedirectToWhatsapp"
        class="full-width q-mt-sm"
        color="accent"
        icon-right="send"
        label="send"
      />
    </div>
  </q-page>
</template>

<script>
import {
  DAYS,
  MONTHS,
  TRAVELER_TYPES,
  CLASSES_TYPE_MAP,
  LANGS,
  FORM_STRUCTURE,
  FORM_ITEMS,
  FAMILY_FARE,
  NO_SHOW_FEE,
  NO_SHOW_PLUS_CHANGE_FEE,
  CHANGE_FEE,
  ORDER,
} from "src/assets/consts.js";

import { airlines } from "src/assets/airlines_big.js";
import index from "airportsjs";
export default {
  data() {
    return {
      tab: "info",
      selectedTemplateTab: "All",
      contactListApiSupported: false,
      TRAVELER_TYPES: TRAVELER_TYPES,
      CLASSES_TYPE_MAP: CLASSES_TYPE_MAP,
      LANGS: LANGS,
      selectedLang: "en",
      formStructure: FORM_STRUCTURE,
      selectedBagges: [],
      data: {
        whatsappNumber: null,
        travelers: [{ name: "", type: "adult" }],
        outboundAmadeusCode:
           "",
  //         `2  LY 011 U 27JUN 7 TLVJFK HK1  1915 2355  27JUN  E  LY/VM99AX
  // 3  LY 008 O 04JUL 7 JFKTLV HK1  2350 1720  05JUL  E  LY/VM99AX`,
        //   `3  LY 333 D 04JUL 7 TLVBRU HK2  1415 1815  04JUL  E  LY/SFU3FR
        // 4  A3 623 D 07JUL 3*BRUATH HK2  1925 2330  07JUL  E  A3/SFU3FR
        // 5  A37104 D 08JUL 4*ATHSKG HK2  0655 0745  08JUL  E  A3/SFU3FR
        // 6  LY 548 J 08JUL 4 SKGTLV HK2  2235 0055  09JUL  E  LY/SFU3FR`,
        inboundAmadeusCode: "",
        otherDestinations: [""],
        // "2  LY 007 U 31MAY 1 TLVJFK HK1  1330 1820  31MAY  E  LY/SF7DIJ \n3  LY 028 U 16JUN 3 EWRTLV HK1  1330 0655  17JUN  E  LY/SF7DIJ",
        journey: [],
        classOfTravel: "",
        ...FORM_ITEMS,
      },
      previewTxt: "",
      whatsappMessage: "",
    };
  },
  created() {
    this.init();
  },
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
    onAddTraveler() {
      this.data.travelers.push({
        name: "",
        type: "adult",
      });
    },
    onRemoveTraveler(idx) {
      this.data.travelers = this.data.travelers.filter(
        (traveler, index) => index !== idx
      );
    },
    onAddDestination() {
      this.data.otherDestinations.push("");
    },
    onRemoveDestination(idxx) {
      this.data.otherDestinations = this.data.otherDestinations.filter(
        (item, idx) => idx !== idxx
      );
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
        let charsToFirstNumber;
        lines.forEach((line, idx) => {
          if (!line) return;
          charsToFirstNumber = line.search(/\d/);
          line = line.slice(charsToFirstNumber, line.length - 1);
          // * handles 4 numbers - ly1996
          line = line.splice(5, 0, " ");
          // * handle * - 4*
          line = line.splice(20, 1, " ");

          splited = line.split(/(\s+)/).filter((e) => e.trim().length > 0);
          latterOfclassOfTravel = splited[3];
          let isInClass = false;
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
                  ? DAYS[+dayNumber === 7 ? 6 : +dayNumber]
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

          txt += `\n${airline} - *${flightNumber}* \n${departAirport} ${
            departAirport === "Tel Aviv" ? "" : `(${departAirportCode})`
          } ➡️ ${destAirport} ${
            destAirport === "Tel Aviv" ? "" : `(${destAirportCode})`
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
    getSmartAmadeusTranslate(direction, linesString) {
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
          // * next line vars
          nextLineExists;
        nextLine;
        splitedNextLine;
        nextLineDepartDay,
          nextLineDestDay,
          nextLineDepartTime,
          nextLineDestTime,
          nextLineDestDate;
        txt = "";

        way =
          direction === "ALLER"
            ? this.$t("outbound flight")
            : direction === "OTHER_DEST"
            ? this.$t("other destination flight")
            : this.$t("inbound flight");
        lines = linesString.split("\n");
        let charsToFirstNumber;
        lines.forEach((line, idx) => {
          if (idx < lines.length - 1) nextLineExists = true;
          if (!line) return;

          charsToFirstNumber = line.search(/\d/);
          line = line.slice(charsToFirstNumber, line.length - 1);
          // * handles 4 numbers - ly1996
          line = line.splice(5, 0, " ");
          // * handle * - 4*
          line = line.splice(20, 1, " ");

          splited = line.split(/(\s+)/).filter((e) => e.trim().length > 0);
          latterOfclassOfTravel = splited[3];
          let isInClass = false;
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
            destMonth = destDate.substr(2, 5),
            departHour = departTime.substr(0, 2),
            destHour = destTime.substr(0, 2),
            departMinute = departTime.substr(3, 5),
            destMinute = destTime.substr(3, 5);
          if (departMonth === destMonth) {
            destDay =
              departDateNumberOnly !== destDateNumberOnly
                ? departDateNumberOnly < destDateNumberOnly
                  ? DAYS[dayNumber]
                  : // * in case dayNumber is mon (1) in js [0] and the previos day is sun (7) in js [6]
                  +dayNumber === 1
                  ? DAYS[6]
                  : DAYS[dayNumber - 2]
                : departDay;
          } else if (MONTHS.indexOf(departMonth) > MONTHS.indexOf(destMonth)) {
            // * in case dayNumber is mon (1) in js [0] and the previos day is sun (7) in js [6]
            destDay = +dayNumber === 1 ? DAYS[6] : DAYS[dayNumber - 2];
          } else destDay = DAYS[dayNumber];
          //
          let outboundFligths = [],
            otherDestinationFligths = [],
            inboundFlights = [];
          if (line)
            txt += `\n${airline} - *${flightNumber}* \n${departAirport} ${
              departAirport === "Tel Aviv" ? "" : `(${departAirportCode})`
            } ➡️ ${destAirport} ${
              destAirport === "Tel Aviv" ? "" : `(${destAirportCode})`
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
    onPreview() {
      let departTxt,
        OtherDestTxt = "",
        destTxt,
        otherTravelers;
      this.data.journey = [];
      this.data.classOfTravel = "";

      departTxt = this.getAmadeusTranslate(
        "ALLER",
        this.data.outboundAmadeusCode
      );

      this.data.otherDestinations.forEach((input, idx) => {
        if (!input) return;

        OtherDestTxt +=
          this.getAmadeusTranslate("OTHER_DEST", input) +
          (idx < this.data.otherDestinations.length - 1 ? "\n" : "");
      });
      destTxt = this.getAmadeusTranslate(
        "RETOUR",
        this.data.inboundAmadeusCode
      );

      otherTravelers = this.data.travelers
        .filter((traveler, idx) => idx !== 0)
        .map((traveler) => this.capitalizeFirstLetter(traveler.name))
        .join(", ");

      // *${this.$t("prices")}:* \n${this.priceDetails} \n\n

      switch (this.selectedTemplateTab) {
        case "All":
          this.whatsappMessage = `*${this.capitalizeFirstLetter(
            this.data.travelers[0].name
          )}*, ${this.$t("shalom")} 
    \n\n${this.$t("flight desc")} \n${this.journeyTxt}\n${
            this.data.travelers.length >= 2
              ? `${this.$t("together with")} ${otherTravelers}`
              : ""
          } \n\n${this.$t("please pay msg")} \n\n*${this.$t("itinerary")}* ${
            this.data.details.itinerary.itinerary.selected
          } \n${departTxt} \n${OtherDestTxt} \n${destTxt}${
            this.ticketingOptionsTxt
          }
*${this.$t("airline")}* (xx)\n  *xxx*\n\n
*${this.$t("class of travel")}* \n${this.data.classOfTravel} \n\n
*${this.$t("airfare")}:* \n${this.airfareTxt} \n
*${this.$t("restrictions")}:*\n${this.$t("p. p. = per person")} \n${this.$t(
            "change"
          )} ${this.changeFeeValue} ${this.$t("p. p")}\n${this.$t("cancel")} ${
            this.data.prices["cancel fee"].cancelFee.value
          }${this.selectedCurrency} ${this.$t("p. p")} \n${this.$t(
            "no show"
          )} ${this.noShowValue} ${this.$t("p. p")} \n*${this.$t(
            "ticket issuance"
          )}: ${this.$t(
            this.data.prices["​ticket issuance"]["​ticket issuance"].selected
          )}* \n\n*${this.$t("details")}* \n\n*${this.$t("baggage")}* 🧳 ${
            this.totalBaggage
          } \n\n*${this.$t(
            "meal"
          )}* 🍴 ${this.data.details.food.food.selected.map(
            (meal) => `\n${this.$t(meal)}`
          )} \n\n${this.$t("attention")} \n${this.$t(
            "price may change"
          )} \n\n${this.$t("please pay again msg")} \n\n${this.$t("farewell")}`;
          break;

        case "Multi tickets":
          this.whatsappMessage = `*${this.capitalizeFirstLetter(
            this.data.travelers[0].name
          )}*, ${this.$t("shalom")} 
        \n\n${this.$t("flight desc")} ${this.allNamesTxt} \n*${
            this.journeyTxt
          }*\n\n${this.$t("please pay msg")} \n\n*${this.$t("itinerary")}* ${
            this.data.details.itinerary.itinerary.selected
          } \n${departTxt} \n${OtherDestTxt} \n${destTxt} \n${
            this.ticketingOptionsTxt
          }${this.$t("please pay again msg")} \n\n${this.$t("farewell")}`;
          break;

        case "Family fare":
          this.whatsappMessage = `*${this.capitalizeFirstLetter(
            this.data.travelers[0].name
          )}*, ${this.$t("shalom")} 
        \n\n${this.$t("flight desc")} ${this.allNamesTxt} \n*${
            this.journeyTxt
          }*\n\n${this.$t("please pay msg")} \n\n*${this.$t("itinerary")}* ${
            this.data.details.itinerary.itinerary.selected
          } \n${departTxt} \n${OtherDestTxt} \n${destTxt}${
            this.ticketingOptionsTxt
          }*${this.$t("airline")}* (xx)\n  *xxx*\n
*${this.$t("class of travel")}* \n${this.data.classOfTravel} \n\n*${this.$t(
            "airfare"
          )}:* \n${this.airfareTxt} \n\n*${this.$t(
            "restrictions"
          )}:*\n${this.$t("p. p. = per person")} \n${this.$t("change")} ${
            this.changeFeeValue
          } ${this.$t("p. p")} \n${this.$t("cancel")} ${
            this.data.prices["cancel fee"].cancelFee.value
          }${this.selectedCurrency} ${this.$t("p. p")} \n${this.$t(
            "no show"
          )} ${this.noShowValue} ${this.$t("p. p")} \n*${this.$t(
            "ticket issuance"
          )}: ${this.$t(
            this.data.prices["​ticket issuance"]["​ticket issuance"].selected
          )}* \n\n${this.$t("attention")} \n${this.$t(
            "price may change"
          )} \n\n${this.$t("please pay again msg")} \n\n${this.$t("farewell")}`;
          break;

        default:
          break;
      }
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    onRedirectToWhatsapp() {
      const url = `https://api.whatsapp.com/send?phone=${
        this.data.whatsappNumber
      }&text=%20${encodeURIComponent(this.whatsappMessage)}`;
      window.open(url, "_blank");
    },
    getAmountOfSpecificTraveler(travelerType) {
      return this.data.travelers.filter((tr) => tr.type === travelerType)
        .length;
    },
    checkIfDisplay(boxName, item) {
      const tempalteToShow = this.data[boxName][item].templatesToBeDisplayIn;
      if (this.selectedTemplateTab === "All") return true;
      if (!tempalteToShow) return true;
      return tempalteToShow.includes(this.selectedTemplateTab);
    },
    checkIfDisplaySubInput(optionName) {
      switch (optionName) {
        case FAMILY_FARE:
          return this.data.details.airfare.airfare.selected === FAMILY_FARE;
        // * no show
        case NO_SHOW_FEE:
          return (
            this.data.prices["no show"]["no show"].selected === NO_SHOW_FEE ||
            this.data.prices["no show"]["no show"].selected ===
              NO_SHOW_PLUS_CHANGE_FEE
          );
          break;
        case NO_SHOW_PLUS_CHANGE_FEE:
          return (
            this.data.prices["no show"]["no show"].selected ===
            NO_SHOW_PLUS_CHANGE_FEE
          );
          break;
        // * change fee
        case CHANGE_FEE:
          return (
            this.data.prices["Change fees"]["Change fees"].selected ===
              "(+difference in fare)" ||
            this.data.prices["Change fees"]["Change fees"].selected ===
              "Only permitted upon availability on Bonus Quota!"
          );
          break;

        default:
          return true;
      }
    },
    getRightSpaceAlignment(str) {
      // ! fix bug of undifined and remove this
      if (!str) return str;
      //
      str = str.toLowerCase();
      switch (str) {
        case "sun":
          return "  ";
        case "tue":
          return " ";
        case "thu":
          return " ";
        case "fri":
          return "   ";
        case "sat":
          return "  ";
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
  },
  computed: {
    selectedCurrency() {
      return this.data.prices.currency.currency.selected;
    },
    travelersTypeAmountMap() {
      let travelersTypeAmountMap = {};
      this.data.travelers.forEach((traveler) => {
        if (travelersTypeAmountMap[traveler.type])
          ++travelersTypeAmountMap[traveler.type];
        else travelersTypeAmountMap[traveler.type] = 1;
      });
      return travelersTypeAmountMap;
    },
    totalPrice() {
      let total = 0;
      for (const key in this.travelersTypeAmountMap) {
        total +=
          this.travelersTypeAmountMap[key] * this.data.prices.price[key].value;
      }
      return total;
    },
    noShowValue() {
      const noShowSelection = this.data.prices["no show"]["no show"].selected;
      switch (noShowSelection) {
        case "total loss":
          return this.$t("total loss");
        case NO_SHOW_FEE:
          return this.data.prices["no show"][NO_SHOW_FEE].value;
        case NO_SHOW_PLUS_CHANGE_FEE:
          const noShowFee = this.data.prices["no show"][NO_SHOW_FEE].value;
          const changeFee =
            this.data.prices["no show"][NO_SHOW_PLUS_CHANGE_FEE].value;
          return `${noShowFee}${this.selectedCurrency} + ${this.$t(
            "change fee"
          )}: ${changeFee}${this.selectedCurrency}`;

        default:
          return `0${this.selectedCurrency}`;
          break;
      }
    },
    changeFeeValue() {
      const changeFeeSelection =
        this.data.prices["Change fees"]["Change fees"].selected;
      const changeFeeValue = this.data.prices["Change fees"][CHANGE_FEE].value;
      switch (changeFeeSelection) {
        case "Non Changeable":
          return this.$t("Non Changeable");
        case "(+difference in fare)":
          return `${changeFeeValue}${this.selectedCurrency}\n       ${this.$t(
            "(+difference in fare)"
          )}`;
        case "Only permitted upon availability on Bonus Quota!":
          return `${changeFeeValue}${this.selectedCurrency}\n       ${this.$t(
            "Only permitted upon availability on Bonus Quota!"
          )}`;

        default:
          return `0${this.selectedCurrency}`;
          break;
      }
    },
    totalBaggage() {
      return this.data.details.baggage.baggage.selected.join(", ");
    },
    // priceDetails() {
    //   let priceTxt = ``,
    //     passanger;
    //   for (const key in this.travelersTypeAmountMap) {
    //     priceTxt += `${this.data.prices.price[key].value}${
    //       this.selectedCurrency
    //     } x ${this.travelersTypeAmountMap[key]} ${this.$t(key)} \n`;
    //   }
    //   priceTxt += `\n${this.$t("total")} ${this.totalPrice}${
    //     this.selectedCurrency
    //   }`;
    //   return priceTxt;
    // },
    allNamesTxt() {
      // your upcoming flight
      let txt = `${this.$t("your")}`;
      if (this.data.travelers.length === 1) txt += "s ";
      else {
        this.data.travelers.forEach((traveler, idx) => {
          if (idx === 0) return;
          // * first traveler is the the "your" above
          txt += " & " + this.capitalizeFirstLetter(traveler.name);
        });
        txt = `*${txt}\'s* `;
      }

      return txt + this.$t("upcoming trip to");
    },
    journeyTxt() {
      let txt = "";
      let uniqeDestinations;
      uniqeDestinations = this.data.journey.filter(
        (item, idx, array) => array.indexOf(item) === idx
      );

      uniqeDestinations.forEach(
        (place, idx) =>
          (txt += `${place}${idx < uniqeDestinations.length - 1 ? ", " : ""}`)
      );
      return txt;
    },
    airfareTxt() {
      let introFamilyFareTxt = `${this.$t(FAMILY_FARE)}`,
        optionsFamilyFareTxt = ``,
        fareDetailsTxt = ``;
      this.data.details.airfare[FAMILY_FARE].selected.forEach((option, idx) => {
        optionsFamilyFareTxt += `${idx + 1}. ${this.$t(`option-${option}`)}`;
        fareDetailsTxt += `\n${this.$t(option)}\n`;
      });
      return introFamilyFareTxt + optionsFamilyFareTxt + fareDetailsTxt;
    },
    ticketingOptionsTxt() {
      let txt = "";
      const numOfTicketingOptions =
        this.data.prices["multi tickets"].numOfTicketOptions.value;
      for (let num = 0; num < numOfTicketingOptions; num++) {
        txt += `*${ORDER[num]} ${this.$t("ticket option details")} \n`;
      }
      return txt;
    },
  },
  watch: {
    selectedLang(lang) {
      this.$i18n.locale = lang;
    },
    "data.travelers": {
      handler(travelers) {
        for (const key in this.data.prices.price) {
          if (travelers.filter((traveler) => traveler.type === key).length) {
            this.data.prices.price[key].hide = false;
          } else this.data.prices.price[key].hide = true;
        }
      },
      deep: true,
      immediate: true,
    },
    selectedTemplateTab(tab) {
      if (tab === "Family fare") {
        this.data.details.airfare.airfare.selected = "Family fare";
      } else this.data.details.airfare.airfare.selected = "";
      if (tab === "Multi tickets") {
        this.data.prices["multi tickets"].numOfTicketOptions.value = 1;
      } else this.data.prices["multi tickets"].numOfTicketOptions.value = 0;
    },
  },
};
</script>
<style lang="scss" scoped>
.sep {
  height: 10px;
  border-radius: 2px;
  margin: 36px 0 !important;
}
</style>
