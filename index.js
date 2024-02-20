const movingShift = (s, shift) => {
    let encoded = '';
    let shiftIncrement = shift;

    for (let i = 0; i < s.length; i++) {
        encoded += encodeShifting(s[i], shiftIncrement);
        shiftIncrement++;
    }

    const partLengths = new Array(5).fill(Math.floor(encoded.length / 5));
    for (let i = 0; i < encoded.length % 5; i++) {
        partLengths[i]++;
    }

    const parts = [];
    let startIndex = 0;
    for (let i = 0; i < 5; i++) {
        const part = encoded.substring(startIndex, startIndex + partLengths[i]);
        parts.push(part);
        startIndex += partLengths[i];
    }

    return parts;
}

const encodeShifting = (char, shift) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const isUpperCase = char === char.toUpperCase();
    const lowerChar = char.toLowerCase();
    const index = (alphabet.indexOf(lowerChar) + shift) % alphabet.length;
    let encodedChar;
    if (isLetter(char)) {
        encodedChar = alphabet[index];
    } else {
        console.log(encodedChar, char)
        encodedChar = char;
    }

    return isUpperCase ? encodedChar.toUpperCase() : encodedChar;
}

const isLetter = (char) => {
    return /[a-zA-Z]/.test(char);
}


const s = "I should have known that you would have a perfect answer for me!!!";
const shift = 1;
const parts = movingShift(s, shift);
console.log(parts);
