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
        <h5
          class="bg-secondary text-white text-center q-mt-xl q-py-sm q-mb-lg"
          style="opacity: 0.73"
        >
          contacts
        </h5>
        <q-input
          class="q-mb-xl q-px-sm"
          v-model="data.whatsappNumber"
          label="contact WhatsApp"
        />

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
              :options="travelerTypes"
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
      <section class="">
        <q-input
          v-model="data.amadeusCode"
          filled
          autogrow
          placeholder="amadeus code"
        />
      </section>

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

      <q-option-group :options="langs" type="radio" v-model="selectedLang" />
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
  FLIGHT_DESC,
  PLEASE_PAY_MSG_EN,
  FLIGHT,
  ALLER,
  RETOUR,
  PRICE_MAY_CHANGE,
  PLEASE_PAY_AGAIN_MSG_EN,
  FAREWELL,
  ADULT,
  CHILD,
  YOUTH,
  STUDENT,
  SENIOR,
  INFANT,
  PRICES,
  RESTRICTIONS,
} from "src/assets/consts.js";

import { airlines } from "src/assets/airlines.js";
import { airports } from "src/assets/airport_filtered.js";
export default {
  data() {
    return {
      tab: "info",
      travelerTypes: [
        { label: "adlut", value: "adlut", color: "primary" },
        { label: "senior", value: "senior", color: "secondary" },
        { label: "student", value: "student", color: "accent" },
        { label: "youth", value: "youth", color: "yellow" },
        { label: "child", value: "child", color: "green" },
        { label: "infant", value: "infant", color: "pink" },
      ],
      langs: [
        { label: "English", value: "en" },
        { label: "French", value: "fr" },
      ],
      selectedLang: "en",
      formStructure: {
        prices: ["price", "currancy", "restrictions"],
        details: ["baggage", "food"],
      },
      selectedBagges: [],
      data: {
        whatsappNumber: null,
        travelers: [{ name: "", type: "adlut" }],
        // ! debug
        // amadeusCode:
          // "2  LY 007 U 31MAY 1 TLVJFK HK1  1330 1820  31MAY  E  LY/SF7DIJ \n3  LY 028 U 16JUN 3 EWRTLV HK1  1330 0655  17JUN  E  LY/SF7DIJ  ",
        amadeusCode: "",
        prices: {
          price: {
            adlut: { label: "adlut", value: 0, type: "input" },
            senior: { label: "senior", value: 0, type: "input" },
            student: { label: "student", value: 0, type: "input" },
            youth: { label: "youth", value: 0, type: "input" },
            child: { label: "child", value: 0, type: "input" },
            infant: { label: "infant", value: 0, type: "input" },
          },
          currancy: {
            currancy: {
              options: [
                { label: "$", value: "$" },
                { label: "€", value: "€" },
                { label: "₪", value: "₪" },
              ],
              selected: "$",
              type: "radio",
            },
          },
          restrictions: {
            changeFee: { label: "Change fee", value: 0, type: "input" },
            cancelFee: { label: "Cancel fee", value: 0, type: "input" },
            noShowFee: { label: "No show fee", value: 0, type: "input" },
          },
        },
        details: {
          baggage: {
            baggage: {
              options: [
                { label: "No baggage", value: "no baggage" },
                { label: "Hand bag only", value: "hand bag only" },
                { label: "23 kg", value: "23 kg" },
              ],
              selected: [],
              type: "checkbox",
            },
          },
          food: {
            food: {
              options: [
                { label: "No meal", value: "No meal" },
                { label: "Regular meal", value: "Regular meal" },
                { label: "Kosher meal", value: "Kosher meal" },
              ],
              selected: "No meal",
              type: "radio",
            },
          },
        },
      },
      previewTxt: "",
      whatsappMessage: "",
      departAirport: null,
      destAirport: null,
    };
  },
  methods: {
    onAddTraveler() {
      this.data.travelers.push({
        name: "",
        type: "adlut",
      });
    },
    onRemoveTraveler(idx) {
      this.data.travelers = this.data.travelers.filter(
        (traveler, index) => index !== idx
      );
    },
    getAmadeusTranslate(direction, line) {
      let splited,
        way,
        airline,
        flightNumber,
        departDate,
        departAirportCode,
        destAirportCode,
        departTime,
        destTime,
        destDate;

      if (line) {
        splited = line.split(/(\s+)/).filter((e) => e.trim().length > 0);

        way =
          direction === "ALLER"
            ? ALLER[this.selectedLang]
            : RETOUR[this.selectedLang];

        airline = airlines.filter((item) => item.iata === splited[1])[0].name;
        flightNumber = `${splited[1]}${splited[2]}`;
        departDate = `${splited[4]}`;
        departAirportCode = splited[6].slice(0, 3);
        this.departAirport = `${
          airports.filter((air) => air.iata_code === departAirportCode)[0]
            .municipality
        }`;
        destAirportCode = splited[6].slice(3, 6);
        this.destAirport = `${
          airports.filter((air) => air.iata_code === destAirportCode)[0]
            .municipality
        }`;
        departTime = `${splited[8].slice(0, 2)}:${splited[8].slice(2, 4)}`;
        destTime = `${splited[9].slice(0, 2)}:${splited[9].slice(2, 4)}`;
        destDate = `${splited[10]}`;

        return `${way} \n${airline}-(${flightNumber}) \n${this.departAirport} - ${this.destAirport} \nDpt. ${departDate} ${departTime}  \nArr. ${destDate} ${destTime} \n`;
      }
    },
    onPreview() {
      let amadeusSplittedLines, departTxt, destTxt, otherTravelers;

      amadeusSplittedLines = this.data.amadeusCode.split("\n");
      departTxt = this.getAmadeusTranslate("ALLER", amadeusSplittedLines[0]);
      destTxt = this.getAmadeusTranslate("RETOUR", amadeusSplittedLines[1]);

      otherTravelers = this.data.travelers
        .filter((traveler, idx) => idx !== 0)
        .map((traveler) => this.capitalizeFirstLetter(traveler.name))
        .join(", ");

      this.whatsappMessage = `${this.capitalizeFirstLetter(
        this.data.travelers[0].name
      )}, Shalom! \n\n${FLIGHT_DESC[this.selectedLang]} \n${this.destAirport}>${
        this.destAirport
      }>${this.destAirport} \n${
        this.data.travelers.length >= 2 ? `together with ${otherTravelers}` : ""
      } \n\n${
        PLEASE_PAY_MSG_EN[this.selectedLang]
      } \n\n*Itinerary:* \n${departTxt} \n${destTxt}
\n\n*${PRICES[this.selectedLang]}:* \n${this.priceDetails} \n\n*${
        RESTRICTIONS[this.selectedLang]
      }:* \nChange: ${this.data.prices.restrictions.changeFee.value}${
        this.selectedCurrancy
      } \nCancel: ${this.data.prices.restrictions.cancelFee.value}${
        this.selectedCurrancy
      } \nNo show: ${this.data.prices.restrictions.noShowFee.value}${
        this.selectedCurrancy
      } \n\n*Details:* \n-Compartment: None \n-Baggage: ${
        this.totalBaggage
      } \n-Meal: ${this.data.details.food.food.selected} \n\n*Attention:* \n${
        PRICE_MAY_CHANGE[this.selectedLang]
      } \n\n${PLEASE_PAY_AGAIN_MSG_EN[this.selectedLang]} \n\n${
        FAREWELL[this.selectedLang]
      }      `;
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
        console.log(traveler.type);
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
        switch (key) {
          case "adult":
            passanger = ADULT[this.selectedLang];
            break;
          case "child":
            passanger = CHILD[this.selectedLang];
            break;
          case "youth":
            passanger = YOUTH[this.selectedLang];
            break;
          case "student":
            passanger = STUDENT[this.selectedLang];
            break;
          case "senior":
            passanger = SENIOR[this.selectedLang];
            break;
          case "infant":
            passanger = INFANT[this.selectedLang];
            break;
        }
        priceTxt += `${this.data.prices.price[key].value}${this.selectedCurrancy} x ${this.travelersTypeAmountMap[key]} ${passanger} \n`;
      }
      priceTxt += `\ntotal: ${this.totalPrice}${this.selectedCurrancy}`;
      return priceTxt;
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
