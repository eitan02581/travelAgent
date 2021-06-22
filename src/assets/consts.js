
export const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

export const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

export const ORDER = ['FIRST', 'SECOND', 'THIRD', 'FORTH', 'FIFTH']

export const TRAVELER_TYPES = [
    { label: "adult", value: "adult", color: "primary" },
    { label: "senior", value: "senior", color: "secondary" },
    { label: "student", value: "student", color: "accent" },
    { label: "youth", value: "youth", color: "yellow" },
    { label: "child", value: "child", color: "green" },
    { label: "infant", value: "infant", color: "pink" },
]
export const CLASSES_TYPE_MAP = {
    "Business Cl.": ["F", "C", "I", "D", "Z", "R", "X"],
    "Premium Eco Cl.": ["W", "Q", "B", "P", "A"],
    "Economy Cl.": ["Y", "M", "T", "K", "V", "S", "L", "H", "E", "N", "G", "O", "U",],
}
export const LANGS = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "Hebrew", value: "he" },
]

export const FORM_STRUCTURE = {
    prices: ["price", "multi tickets", "currency", "cancel fee", "Change fees", "no show"],
    details: [
        "itinerary",
        "carrier Type - hidden until text",
        "airfare",
        "baggage",
        "food",
        "Not included in price - hidden until text",
        "optional Supplement - hidden until text",
        "ticket Issuance Time Limit - hidden until text",
    ],
}
// * list of words to prevent misspelling and mismatches
export const FAMILY_FARE = "Family fare"
export const NO_SHOW_FEE = "No show fee"
export const NO_SHOW_PLUS_CHANGE_FEE = "No show + change fee"
export const CHANGE_FEE = "change fee"
// 
export const FORM_ITEMS = {
    prices: {

        price: {
            templatesToBeDisplayIn: ["all"],
            adult: { label: "adult", value: 0, type: "input", hide: true },
            senior: { label: "senior", value: 0, type: "input", hide: true },
            student: { label: "student", value: 0, type: "input", hide: true },
            youth: { label: "youth", value: 0, type: "input", hide: true },
            child: { label: "child", value: 0, type: "input", hide: true },
            infant: { label: "infant", value: 0, type: "input", hide: true },
        },
        "multi tickets": {
            templatesToBeDisplayIn: ["Multi tickets"],
            numOfTicketOptions: { label: "number of ticket options", value: 0, type: "input" },
        },
        currency: {
            currency: {
                options: [
                    { label: "$", value: "$" },
                    { label: "€", value: "€" },
                    { label: "₪", value: "₪" },
                ],
                selected: "$",
                type: "select",
            },
        },
        "cancel fee": {
            templatesToBeDisplayIn: ["all", "Family fare"],
            // changeFee: { label: "Change fee", value: 0, type: "input" },
            cancelFee: { label: "Cancel fee", value: 0, type: "input" },
            // noShowFee: { label: "No show fee", value: 0, type: "input" },
        },
        "Change fees": {
            templatesToBeDisplayIn: ["Family fare"],
            "Change fees": {
                options: [
                    { label: "Non Changeable", value: "Non Changeable" },
                    { label: "change fee - (+difference in fare)", value: "(+difference in fare)" },
                    { label: "change fee - Only permitted upon availability on Bonus Quota!", value: "Only permitted upon availability on Bonus Quota!" },
                ],
                selected: "",
                type: "select",
            },
            [CHANGE_FEE]: {
                subInput: true,
                label: CHANGE_FEE,
                value: 0,
                type: "input"
            },
        },
        "no show": {
            templatesToBeDisplayIn: ["Family fare"],
            "no show": {
                options: [
                    { label: "total loss", value: "total loss" },
                    { label: NO_SHOW_FEE, value: NO_SHOW_FEE },
                    { label: NO_SHOW_PLUS_CHANGE_FEE, value: NO_SHOW_PLUS_CHANGE_FEE },
                ],
                selected: "",
                type: "select",
            },
            [NO_SHOW_FEE]: {
                subInput: true,
                label: NO_SHOW_FEE,
                value: 0,
                type: "input"
            },
            [NO_SHOW_PLUS_CHANGE_FEE]: {
                subInput: true,
                label: NO_SHOW_PLUS_CHANGE_FEE,
                value: 0,
                type: "input"
            },
        },
    },
    details: {
        itinerary: {
            itinerary: {
                options: [
                    { label: "One Way (O/W)", value: "One Way (O/W)" },
                    { label: "Round Trip (R/T)", value: "Round Trip (R/T)" },
                    { label: "Multi Destinations", value: "Multi Destinations" },
                ],
                selected: "",
                type: "select",
            },
        },
        "carrier Type - hidden until text": {
            templatesToBeDisplayIn: ["all"],
            "carrier Type - hidden until text": {
                options: [
                    { label: "Regular carrier / flight", value: "Regular carrier / flight" },
                    { label: "Low cost carrier / flight", value: "Low cost carrier / flight" },
                    { label: "Charter carrier / flight", value: "Charter carrier / flight" },
                ],
                selected: [],
                type: "selectMultiple",
            },
        },
        "airfare": {
            templatesToBeDisplayIn: ["all", "Family fare"],
            "airfare": {
                options: [
                    // { label: "One Way Fare ", value: "one Way Fare" },
                    // { label: "Round Trip Fare", value: "round Trip Fare" },
                    { label: "Normal", value: "Normal" },
                    { label: "Family fare", value: FAMILY_FARE },
                ],
                selected: "",
                type: "select",
            },
            [FAMILY_FARE]: {
                subInput: true,
                nameLabel: true,
                options: [
                    { label: "eco lite", value: "eco lite" },
                    { label: "eco classic", value: "eco classic" },
                    { label: "eco flex", value: "eco flex" },
                ],
                selected: [],
                type: "selectMultiple",
            },
        },
        baggage: {
            templatesToBeDisplayIn: ["all"],
            baggage: {
                options: [
                    { label: "No Checked bag", value: "\nNo Checked bag" },
                    { label: "Carry-on Baggage", value: "\nCarry-on Baggage" },
                    { label: "1 Checked bag 23 kg", value: "\n1 Checked bag 23 kg" },
                    { label: "2 Checked bag 23 kg", value: "\n2 Checked bag 23 kg" },
                    { label: "1 Checked bag 20 kg", value: "\n1 Checked bag 20 kg" },
                    { label: "2 Checked bag 20 kg", value: "\n2 Checked bag 20 kg" },
                ],
                selected: [],
                type: "selectMultiple",
            },
        },
        food: {
            templatesToBeDisplayIn: ["all", "Family fare"],
            food: {
                options: [
                    { label: "No meal", value: "No meal" },
                    { label: "Regular meal", value: "Regular meal" },
                    { label: "Kosher meal (KSML)", value: "Kosher meal (KSML)" },
                    { label: "Fish meal (FSML)", value: "Fish meal (FSML)" },
                    { label: "Fruit meal (FPML)", value: "Fruit meal (FPML)" },
                    { label: "Pure vegetarian (vegan) meal (VGML)", value: "Pure vegetarian (vegan) meal (VGML)" },
                    { label: "Vegetarian meal (VLML)", value: "Vegetarian meal that includes dairy products and egg products (VLML)" },
                    { label: "Low sugar meal (DBML)", value: "Low sugar meal (DBML)" },
                    { label: "Reduced gluten meal* (GFML)", value: "Reduced gluten meal* (GFML)" },
                    { label: "Low salt meal (LSML)", value: "Low salt meal (LSML)" },
                    { label: "Low lactose* meal (NLML)", value: "Low lactose* meal (NLML)" },
                    { label: "Mehadrin kosher meal (SKML)", value: "Mehadrin kosher meal (SKML)" },
                    { label: "Mehadrin kosher fish (KFML)", value: "Mehadrin kosher fish (KFML)" },
                    { label: "Mehadrin kosher children’s meal (KCML)", value: "Mehadrin kosher children’s meal (KCML)" },
                    { label: "Mehadrin Regal kosher fish meal (RFML)", value: "Mehadrin Regal kosher fish meal (RFML)" },
                    { label: "Mehadrin Regal kosher children’s meal (KCML)", value: "Mehadrin Regal kosher children’s meal (KCML" },
                    { label: "Mehadrin Regal kosher vegetarian meal (GVML)", value: "Mehadrin Regal kosher vegetarian meal (GVML)" },
                ],
                selected: [],
                type: "selectMultiple",
            },
        },
        "Not included in price - hidden until text": {
            templatesToBeDisplayIn: ["all"],
            "Not included in price - hidden until text": {
                options: [
                    { label: "No Checked bag", value: "No Checked bag" },
                    { label: "No early seat selection", value: "No early seat selection" },
                    { label: "No meals", value: "No meals" },
                ],
                selected: [],
                type: "selectMultiple",
            },
        },
        "optional Supplement - hidden until text": {
            templatesToBeDisplayIn: ["all"],
            "optional Supplement - hidden until text": {
                options: [
                    { label: "standard seat", value: "Standard Seat" },
                    { label: "Preferred Seat", value: "Preferred Seat" },
                    { label: "Checked Bag", value: "Checked Bag" },
                    { label: "Extra Checked Bag", value: "Extra Checked Bag" },
                    { label: "Meals", value: "Meals" },
                ],
                selected: [],
                type: "selectMultiple",
            },
        },
        "ticket Issuance Time Limit - hidden until text": {
            templatesToBeDisplayIn: ["all"],
            "ticket Issuance Time Limit - hidden until text": {
                options: [
                    { label: "Immediate Purchase", value: "airfare - Immediate Purchase" },
                    { label: "Today before (time) ", value: "airfare - Today before (time)" },
                    { label: "Within 24h", value: "airfare - Within 24h" },
                    { label: "Within 48h", value: "airfare - Within 48h" },
                    { label: "Within 72h", value: "airfare - Within 72h" },
                ],
                selected: "",
                type: "select",
            },
        },
    }
}

