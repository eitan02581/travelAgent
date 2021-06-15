
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
    prices: ["price", "currancy", "restrictions"],
    details: [
        "itinerary",
        "carrier Type - hidden until text",
        "airfare - hidden until text",
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
        currancy: {
            currancy: {
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
                    { label: "Regular carrier", value: "Regular carrier" },
                    { label: "Low cost Carrier", value: "Low cost Carrier" },
                    { label: "Charter carrier", value: "Charter carrier" },
                ],
                selected: [],
                type: "selectMultiple",
            },
        },
        "airfare - hidden until text": {
            "airfare - hidden until text": {
                options: [
                    { label: "Round Trip Fare", value: "airfare - Round Trip Fare" },
                    { label: "One Way Fare ", value: "airfare - One Way Fare" },
                    { label: "Your specific Itinerary requires the purchase of (1, 2, 3)", value: "airfare - Your specific Itinerary requires the purchase of (1, 2, 3)" },
                ],
                selected: "",
                type: "select",
            },
        },
        baggage: {
            baggage: {
                options: [
                    { label: "No Checked bag", value: "No Checked bag" },
                    { label: "Carry-on Baggage", value: "Carry-on Baggage" },
                    { label: "1 Checked bag 23 kg", value: "1 Checked bag 23 kg" },
                    { label: "2 Checked bag 23 kg", value: "2 Checked bag 23 kg" },
                    { label: "1 Checked bag 20 kg", value: "1 Checked bag 20 kg" },
                    { label: "2 Checked bag 20 kg", value: "2 Checked bag 20 kg" },
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
                    { label: "Kosher meal", value: "Kosher meal" },
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