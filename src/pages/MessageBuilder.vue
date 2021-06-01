<template>
  <q-page class="flex q-px-sm">
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
        <h5>contacts</h5>
        <q-input v-model="contact.whatsappNumber" label="contact WhatsApp" />
        <q-separator class="sep" color="secondary" spaced inset />

        <div
          style="
            overflow-x: auto;
            flex: nowrap;
            display: flex;
            max-width: 250px;
          "
          class="q-mt-xl items-center"
        >
          <div
            class="q-mr-md"
            v-for="(traveler, idx) in contact.travelers"
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
            <q-input v-model="contact.travelers[idx].name" label="name" />
            <q-option-group
              :options="travelerTypes"
              type="radio"
              v-model="contact.travelers[idx].type"
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
      <q-separator class="sep" color="secondary" spaced inset />
      <section class="">
        <q-input
          v-model="contact.amadeusCode"
          filled
          autogrow
          placeholder="amadeus code"
        />
      </section>
      <q-separator class="sep" color="secondary" spaced inset />

      <section class="">
        <div
          class="q-mt-xl"
          v-for="(items, boxName, indxx) in formStructure"
          :key="boxName"
        >
          <h5>{{ boxName }}</h5>
          <div
            class="q-mt-md"
            v-for="(item, index) in items"
            :key="item"
            :class="[index === 0 ? 'q-mt-md' : 'q-mt-xl']"
          >
            <h6>{{ item }}</h6>
            <div v-for="(option, idx) in contact[boxName][item]" :key="idx">
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
          <q-separator
            v-if="indxx !== Object.keys(formStructure).length - 1"
            class="sep"
            color="secondary"
            spaced
            inset
          />
        </div>
      </section>
      <q-separator class="sep" color="secondary" spaced inset />
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
  CHILD,
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
        { label: "adult", value: "adult", color: "blue" },
        { label: "child", value: "child" },
      ],
      langs: [
        { label: "english", value: "en" },
        { label: "french", value: "fr" },
      ],
      selectedLang: "en",
      formStructure: {
        prices: ["price", "restrictions"],
        details: ["baggage", "food"],
      },
      selectedBagges: [],
      contact: {
        whatsappNumber: null,
        travelers: [{ name: "", type: "adult" }],
        // ! debug
        // amadeusCode:
        //   "2  LY 007 U 31MAY 1 TLVJFK HK1  1330 1820  31MAY  E  LY/SF7DIJ \n3  LY 028 U 16JUN 3 EWRTLV HK1  1330 0655  17JUN  E  LY/SF7DIJ  ",
        amadeusCode: "",
        prices: {
          price: {
            priceAdult: { label: "Adult", value: 0, type: "input" },
            priceChild: { label: "Child", value: 0, type: "input" },
            feePercantage: { label: "Fee percentage", value: 0, type: "input" },
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
      this.contact.travelers.push({
        name: "",
        type: "adult",
      });
    },
    onRemoveTraveler(idx) {
      this.contact.travelers = this.contact.travelers.filter(
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

        return `${
          FLIGHT[this.selectedLang]
        } ${way} \n${airline}-(${flightNumber}) \n${this.departAirport}>${
          this.destAirport
        } \n${departDate} ${departTime} - ${destDate} ${destTime} \n`;
      }
    },
    onPreview() {
      let amadeusSplittedLines, departTxt, destTxt, otherTravelers;

      amadeusSplittedLines = this.contact.amadeusCode.split("\n");
      departTxt = this.getAmadeusTranslate("ALLER", amadeusSplittedLines[0]);
      destTxt = this.getAmadeusTranslate("RETOUR", amadeusSplittedLines[1]);

      otherTravelers = this.contact.travelers
        .filter((traveler, idx) => idx !== 0)
        .map((traveler) => this.capitalizeFirstLetter(traveler.name))
        .join(", ");

      this.whatsappMessage = `${this.capitalizeFirstLetter(
        this.contact.travelers[0].name
      )}, Shalom! \n\n${FLIGHT_DESC[this.selectedLang]} \n${
        this.destAirport
      }>${this.destAirport}>${this.destAirport} \n${
        this.contact.travelers.length >= 2
          ? `together with ${otherTravelers}`
          : ""
      } \n\n${
        PLEASE_PAY_MSG_EN[this.selectedLang]
      } \n\n*Itinerary:* \n${departTxt} \n${destTxt}
\n\n*${PRICES[this.selectedLang]}:* \n${
        this.contact.prices.price.priceAdult.value
      }$ x ${this.amountsOfadults} adults \n${
        this.contact.prices.price.priceChild.value
      }$ x ${this.amountsOfchilds} ${CHILD[this.selectedLang]}
 \ntotal: ${this.totalPrice}$ \n\n*${
        RESTRICTIONS[this.selectedLang]
      }:* \nChange: ${
        this.contact.prices.restrictions.changeFee.value
      }$ \nCancel: ${
        this.contact.prices.restrictions.cancelFee.value
      }$ \nNo show: ${
        this.contact.prices.restrictions.noShowFee.value
      }$ \n\n*Details:* \n-Compartment: None \n-Baggage: ${
        this.totalBaggage
      } \n-Meal: ${
        this.contact.details.food.food.selected
      } \n\n*Attention:* \n${PRICE_MAY_CHANGE[this.selectedLang]} \n\n${
        PLEASE_PAY_AGAIN_MSG_EN[this.selectedLang]
      } \n\n${FAREWELL[this.selectedLang]}      `;
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    onRedirectToWhatsapp() {
      const url = `https://api.whatsapp.com/send?phone=${this.contact.whatsappNumber}&text=%20${this.whatsappMessage}`;
      window.open(url, "_blank");
    },
  },
  computed: {
    amountsOfadults() {
      return this.contact.travelers.filter((tr) => tr.type === "adult").length;
    },
    amountsOfchilds() {
      return this.contact.travelers.filter((tr) => tr.type === "child").length;
    },
    totalPrice() {
      let total;
      total = this.contact.prices.price.priceAdult.value * this.amountsOfadults;
      total +=
        this.contact.prices.price.priceChild.value * this.amountsOfchilds;
      return total;
    },
    totalBaggage() {
      return this.contact.details.baggage.baggage.selected.join(", ");
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
