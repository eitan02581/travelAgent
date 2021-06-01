<template>
  <q-page style="margin-top: 50px" class="flex justify-center">
    <q-header style="margin-top: 50px">
      <q-tabs
        v-model="tab"
        class="bg-teal text-white shadow-2 full-width"
        narrow-indicator
        dense
        align="justify"
      >
        <q-tab class="text-white" name="info" icon="info" label="info" />
        <q-tab
          class="text-black"
          name="preview"
          icon="preview"
          label="preview"
        />
      </q-tabs>
    </q-header>

    <div v-if="tab === 'info'">
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
                v-else-if="option.type === 'radio'"
                :options="option.options"
                type="radio"
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
        autogrow
        placeholder="preview"
        v-model="previewTxt"
        filled
        type="textarea"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tab: "info",
      travelerTypes: [
        { label: "adult", value: "adult", color: "blue" },
        { label: "child", value: "child" },
      ],
      langs: [
        { label: "english", value: "english" },
        { label: "french", value: "franch" },
      ],
      selectedLang: "english",
      formStructure: {
        prices: ["price", "restrictions"],
        details: ["baggage", "food"],
      },
      contact: {
        whatsappNumber: null,
        travelers: [{ name: "", type: "adult" }],
        amadeusCode: "",
        prices: {
          price: {
            priceAdult: { label: "price (adult)", value: 0, type: "input" },
            priceChild: { label: "price (child)", value: 0, type: "input" },
            feePercantage: { label: "fee percentage", value: 0, type: "input" },
          },
          restrictions: {
            changeFee: { label: "change fee", value: 0, type: "input" },
            cancelFee: { label: "cancel fee", value: 0, type: "input" },
            noShowFee: { label: "no show fee", value: 0, type: "input" },
          },
        },
        details: {
          baggage: {
            baggage: {
              options: [
                { label: "no baggage", value: "no baggage" },
                { label: "hand bag only", value: "hand bag only" },
                { label: "23 kg", value: "23 kg" },
              ],
              selected: "no baggage",
              type: "radio",
            },
          },
          food: {
            food: {
              options: [
                { label: "no meal", value: "no meal" },
                { label: "regular meal", value: "regular meal" },
                { label: "kosher meal", value: "kosher meal" },
              ],
              selected: "no meal",
              type: "radio",
            },
          },
        },
      },
      previewTxt: "",
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
