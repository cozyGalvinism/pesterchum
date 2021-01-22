function isUppercase(character) {
    return character == character.toUpperCase()
}

function isLowercase(character) {
    return character == character.toLowerCase()
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

function isNumeric(str){
    return /^\d+$/.test(str);
}

export {
    isUppercase,
    isLowercase,
    rgbToHex,
    isNumeric
}