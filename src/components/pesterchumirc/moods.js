const Moods = {
    "chummy": 0,
    "rancorous": 1,
    "offline": 2,
    "pleasant": 3,
    "distraught": 4,
    "pranky": 5,
    "smooth": 6,
    "ecstatic": 7,
    "relaxed": 8,
    "discontent": 9,
    "devious": 10,
    "sleek": 11,
    "detestful": 12,
    "mirthful": 13,
    "manipulative": 14,
    "vigorous": 15,
    "perky": 16,
    "acceptant": 17,
    "protective": 18,
    "mystified": 19,
    "amazed": 20,
    "insolent": 21,
    "bemused": 22
}

function getMood(name) {
    if (name == "abscond") name = "offline"
    return Moods[name.toLowerCase()]
}

function getMoodName(index) {
    return Object.keys(Moods)[index]
}

export default {
    ...Moods,
    getMood,
    getMoodName
}