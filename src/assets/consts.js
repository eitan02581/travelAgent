
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
]

export const FORM_ITEMS = {
    prices: {
        price: {
            adult: { label: "adult", value: 0, type: "input" },
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
        itinerary: {
            itinerary: {
                options: [
                    { label: "One Way (O/W)", value: "One Way (O/W)" },
                    { label: "Round Trip (R/T)", value: "Round Trip (R/T)" },
                    { label: "Multi Destinations", value: "Multi Destinations" },
                ],
                selected: [],
                type: "checkbox",
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
                type: "checkbox",
            },
        },
        "airfare - hidden until text": {
            "airfare - hidden until text": {
                options: [
                    { label: "Round Trip Fare", value: "airfare - Round Trip Fare" },
                    { label: "One Way Fare ", value: "airfare - One Way Fare" },
                    { label: "Your specific Itinerary requires the purchase of (1, 2, 3)", value: "airfare - Your specific Itinerary requires the purchase of (1, 2, 3)" },
                ],
                selected: [],
                type: "checkbox",
            },
        },
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
    }
}