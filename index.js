
function capitalize(string) {
    if (typeof (string) == 'string') {
        const capital = /[A-Z]/
        for (const l of string.split('')) {
            if (capital.test(l)) {
                return l
            }
        }
    }
    return ""
}

function reversed(string) {
    return string.split('').toReversed().join('')
}

const calculator = {
    add: function (first, second) {
        return first + second
    },
    subtract: function (first, second) {
        return first - second
    },
    multiply: function (first, second) {
        return first * second
    },
    divide: function (first, second) {
        return second != 0 ? first / second : undefined
    }
}

function caesarCipher(word, shift = 0) {
    let code = "";
    for (const w of word.split("")) {
        code += String.fromCodePoint(shiftCode(w, shift))
    }
    return code
}
function shiftCode(word, shift) {
    let min, max;
    let wordCode = word.charCodeAt();
    let desp = wordCode + shift;
    if (64 < wordCode && wordCode < 91) {
        min = 65; max = 90;
    } else if (96 < wordCode && wordCode < 123) {
        min = 97; max = 122;
    } else {
        return wordCode;
    }
    while (desp > max) { desp = min + (desp - max - 1); }
    while (desp < min) { desp = max + (desp - min + 1); }
    return desp;
}

function analyzeArray(array) {
    return {
        average: array.reduce((p, c)=> {return p + c}, 0) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}

module.exports = {
    capitalize,
    reversed,
    calculator,
    caesarCipher,
    analyzeArray
}