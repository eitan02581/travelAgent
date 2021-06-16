
export const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

export const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

export const TRAVELER_TYPES = [
    { label: "adult", value: "adult", color: "primary" },
    { label: "senior", value: "senior", color: "secondary" },
    { label: "student", value: "student", color: "accent" },
    { label: "youth", value: "youth", color: "yellow" },
    { label: "child", value: "child", color: "green" },
    { label: "infant", value: "infant", color: "pink" },
]
export const CLASSES_TYPE_MAP = {
    "BUSINESS Cl.": ["F", "C", "I", "D", "Z", "R", "X"],
    "PREMIUM Cl.": ["W", "Q", "B", "P", "A"],
    "ECONOMY Cl.": ["Y", "M", "K", "V", "S", "L", "H", "E", "N", "G", "O", "U",],
}
export const LANGS = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "Hebrew", value: "he" },
]

export const FORM_STRUCTURE = {
    prices: ["price", "currency", "restrictions", "Change Fees - hidden until text", "no show - hidden until text"],
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

export const FORM_ITEMS = {
    prices: {
        price: {
            adult: { label: "adult", value: 0, type: "input", hide: true },
            senior: { label: "senior", value: 0, type: "input", hide: true },
            student: { label: "student", value: 0, type: "input", hide: true },
            youth: { label: "youth", value: 0, type: "input", hide: true },
            child: { label: "child", value: 0, type: "input", hide: true },
            infant: { label: "infant", value: 0, type: "input", hide: true },
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
        restrictions: {
            changeFee: { label: "Change fee", value: 0, type: "input" },
            cancelFee: { label: "Cancel fee", value: 0, type: "input" },
            noShowFee: { label: "No show fee", value: 0, type: "input" },
        },
        "Change Fees - hidden until text": {
            "Change Fees - hidden until text": {
                options: [
                    // ! add input of fee
                    { label: "Non Changeable", value: "Non Changeable" },
                    { label: "change fee - (+difference in fare)", value: "(+difference in fare)" },
                    { label: "change fee - Only permitted upon availability on Bonus Quota!", value: "price - Only permitted upon availability on Bonus Quota!" },
                ],
                selected: "",
                type: "select",
            },
        },
        "no show - hidden until text": {
            "no show - hidden until text": {
                options: [
                    { label: "total loss", value: "total loss" },
                    // ! add input of fee
                    { label: "no show fee", value: "no show fee" },
                    // ! add 2 input of fee
                    { label: "no show fee + change fee", value: "no show fee + change fee" },
                ],
                selected: "",
                type: "select",
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
            "airfare": {
                options: [
                    { label: "One Way Fare ", value: "one Way Fare" },
                    { label: "Round Trip Fare", value: "round Trip Fare" },
                    { label: "Family fare", value: "family fare" },
                ],
                selected: "",
                type: "select",
            },
        },
        baggage: {
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