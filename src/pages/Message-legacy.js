// `*${this.capitalizeFirstLetter(
//     this.data.travelers[0].name
// )}*, ${this.$t("shalom")} 
//     \n\n${this.$t("flight desc")} \n${this.journeyTxt}\n${this.data.travelers.length >= 2
//         ? `${this.$t("together with")} ${otherTravelers}`
//         : ""
//     } \n\n${this.$t("please pay msg")} \n\n*${this.$t("itinerary")}* ${this.data.details.itinerary.itinerary.selected
//     } \n${departTxt} \n${OtherDestTxt} \n${destTxt}${this.ticketingOptionsTxt}
// *${this.$t("airline")}* (xx)\n*xxx*\n\n
// *${this.$t("class of travel")}* \n${this.data.classOfTravel} \n\n
// *${this.$t("prices")}:* \n${this.priceDetails} \n\n
// *${this.$t("airfare")}:* \n${this.airfareTxt} \n
// *${this.$t("restrictions")}:*\n${this.$t("p. p. = per person")} \n${this.$t(
//         "change"
//     )} ${this.data.prices["Change fees"][CHANGE_FEE].value
//     }${this.selectedCurrency} ${this.$t("p. p")}\n      ${this.$t(
//         "(+difference in fare)"
//     )} \n${this.$t("cancel")} ${this.data.prices["cancel fee"].cancelFee.value
//     }${this.selectedCurrency} ${this.$t("p. p")} \n${this.$t("no show")} ${this.data.prices["no show"][NO_SHOW_FEE].value
//     }${this.selectedCurrency} ${this.$t("p. p")} \n\n*${this.$t(
//         "details"
//     )}* \n${this.$t("compartment")} ${this.$t("none")} \n\n*${this.$t(
//         "baggage"
//     )}* 🧳 ${this.totalBaggage} \n\n*${this.$t(
//         "meal"
//     )}* 🍴 ${this.data.details.food.food.selected.map(
//         (meal) => `\n${this.$t(meal)}`
//     )} \n\n${this.$t("attention")} \n${this.$t(
//         "price may change"
//     )} \n\n${this.$t("please pay again msg")} \n\n${this.$t("farewell")}`