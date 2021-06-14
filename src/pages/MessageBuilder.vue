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
        <q-input
          class="q-mb-xl q-px-sm"
          v-model="data.whatsappNumber"
          label="contact WhatsApp"
        />
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
              <h6>Traveler {{ idx + 1 }}</h6>
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
        <h6 class="q-mb-sm">Inbound flights</h6>
        <q-input
          v-model="data.inboundAmadeusCode"
          filled
          autogrow
          placeholder="Inbound amadeus code"
        />
      </div>

      <section class="">
        <div
          class="q-mt-xl"
          v-for="(items, boxName) in formStructure"
          :key="boxName"
        >
          <h5
            class="bg-secondary text-white text-center q-py-sm q-mb-lg"
            style="opacity: 0.73; margin-top: 48px"
          >
            {{ boxName }}
          </h5>
          <div
            class="q-mt-md q-px-sm"
            v-for="(item, index) in items"
            :key="item"
            :class="[index === 0 ? 'q-mt-md' : 'q-mt-xl']"
          >
            <h6>{{ item }}</h6>
            <div v-for="(option, idx) in data[boxName][item]" :key="idx">
              <q-input
                v-if="option.type === 'input'"
                class="q-mt-sm"
                v-model.number="option.value"
                type="number"
                filled
                :label="option.label"
                style="max-width: 200px"
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
  FORM_ITEMS,
} from "src/assets/consts.js";

import { airlines } from "src/assets/airlines_big.js";
import index from "airportsjs";
export default {
  data() {
    return {
      tab: "info",
      TRAVELER_TYPES: TRAVELER_TYPES,
      CLASSES_TYPE_MAP: CLASSES_TYPE_MAP,
      LANGS: LANGS,
      selectedLang: "en",
      formStructure: {
        prices: ["price", "currancy", "restrictions"],
        details: ["itinerary","carrier Type - hidden until text","airfare - hidden until text", "baggage", "food"],
      },
      selectedBagges: [],
      data: {
        whatsappNumber: null,
        travelers: [{ name: "", type: "adult" }],
        // ! debug
        // amadeusCode:
        // "2  LY 007 U 31MAY 1 TLVJFK HK1  1330 1820  31MAY  E  LY/SF7DIJ \n3  LY 028 U 16JUN 3 EWRTLV HK1  1330 0655  17JUN  E  LY/SF7DIJ  ",
        outboundAmadeusCode:
           "",
          // "2  LY 007 U 31MAY 1 TLVJFK HK1  1330 1820  31MAY  E  LY/SF7DIJ \n3  LY 028 U 16JUN 3 EWRTLV HK1  1330 0655  17JUN  E  LY/SF7DIJ",
        inboundAmadeusCode: "",
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
    getAmadeusTranslate(direction, linesString) {
      if (linesString.length) {
        let lines,
          splited,
          way,
          airline,
          flightNumber,
          latterOfclassOfTravel,
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
            : this.$t("inbound flight");
        lines = linesString.split("\n");
        lines.forEach((line, idx) => {
          if (!line) return;
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
            if (isInClass) this.data.classOfTravel = key;
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

          txt += `\n${airline}-(${flightNumber}) \n${departAirport} (${departAirportCode}) - ${destAirport} (${destAirportCode}) \nDpt. ${departDate} ${this.$t(
            `${departDay}`
          )} ${departTime}  \nArr. ${destDate} ${this.$t(
            `${destDay}`
          )} ${destTime} \n`;
        });
        return `${way} ${txt}`;
      } else return "";
    },
    onPreview() {
      let departTxt, destTxt, otherTravelers;
      this.data.journey = [];

      departTxt = this.getAmadeusTranslate(
        "ALLER",
        this.data.outboundAmadeusCode
      );
      destTxt = this.getAmadeusTranslate(
        "RETOUR",
        this.data.inboundAmadeusCode
      );

      otherTravelers = this.data.travelers
        .filter((traveler, idx) => idx !== 0)
        .map((traveler) => this.capitalizeFirstLetter(traveler.name))
        .join(", ");

      this.whatsappMessage = `${this.capitalizeFirstLetter(
        this.data.travelers[0].name
      )}, ${this.$t("shalom")} 
        \n\n${this.$t("flight desc")} \n${this.journeyTxt}\n${
        this.data.travelers.length >= 2
          ? `${this.$t("together with")} ${otherTravelers}`
          : ""
      } \n\n${this.$t("please pay msg")} \n\n*${this.$t("itinerary")}* ${
        this.data.details.itinerary.itinerary.selected
      } \n${departTxt} \n${destTxt}
*${this.$t("airline")}* \n\n
*${this.$t("class of travel")}* \n${this.data.classOfTravel} \n\n
*${this.$t("prices")}:* \n${this.priceDetails} \n\n*${this.$t(
        "restrictions"
      )}:* \n${this.$t("change")} ${
        this.data.prices.restrictions.changeFee.value
      }${this.selectedCurrancy} \n${this.$t("cancel")} ${
        this.data.prices.restrictions.cancelFee.value
      }${this.selectedCurrancy} \n${this.$t("no show")} ${
        this.data.prices.restrictions.noShowFee.value
      }${this.selectedCurrancy} \n\n*${this.$t("details")}* \n${this.$t(
        "compartment"
      )} ${this.$t("none")} \n${this.$t("baggage")} ${
        this.totalBaggage
      } \n${this.$t("meal")} ${
        this.data.details.food.food.selected
      } \n\n${this.$t("attention")} \n${this.$t(
        "price may change"
      )} \n\n${this.$t("please pay again msg")} \n\n${this.$t("farewell")}`;
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    onRedirectToWhatsapp() {
      const url = `https://api.whatsapp.com/send?phone=${
        this.data.whatsappNumber
      }&text=%20${encodeURI(this.whatsappMessage)}`;
      window.open(url, "_blank");
    },
    getAmountOfSpecificTraveler(travelerType) {
      return this.data.travelers.filter((tr) => tr.type === travelerType)
        .length;
    },
  },
  computed: {
    selectedCurrancy() {
      return this.data.prices.currancy.currancy.selected;
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
    totalBaggage() {
      return this.data.details.baggage.baggage.selected.join(", ");
    },
    priceDetails() {
      let priceTxt = ``,
        passanger;
      for (const key in this.travelersTypeAmountMap) {
        priceTxt += `${this.data.prices.price[key].value}${
          this.selectedCurrancy
        } x ${this.travelersTypeAmountMap[key]} ${this.$t(key)} \n`;
      }
      priceTxt += `\n${this.$t("total")} ${this.totalPrice}${
        this.selectedCurrancy
      }`;
      return priceTxt;
    },
    journeyTxt() {
      let txt = "";
      this.data.journey.forEach(
        (place, idx) =>
          (txt += `${place} ${idx < this.data.journey.length - 1 ? "> " : ""}`)
      );
      return txt;
    },
  },
  watch: {
    selectedLang(lang) {
      this.$i18n.locale = lang;
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
