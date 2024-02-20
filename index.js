const movingShift = (s, shift) => {
    let encodedString = encodeShifting(s, shift);

    const partLength = Math.floor(encodedString.length / 5);
    let remainingLength = encodedString.length;

    const parts = [];

    for (let i = 0; i < 5; i++) {
        const currentLength = Math.min(remainingLength, partLength + (5 - i - 1));

        parts.push(encodedString.slice(0, currentLength));

        encodedString = encodedString.slice(currentLength);
        remainingLength -= currentLength;
    }

    return parts;
}

const encodeShifting = (s, shift) => {
    let encoded = "";
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (isLetter(char)) {
            const newShift = shift % 26;
            const newChar = shiftChar(char, newShift);
            encoded += newChar;
            shift++;
        } else {
            encoded += char;
        }
    }
    return encoded;
}
const isLetter = (char) => {
    return /[a-zA-Z]/.test(char);
}

const shiftChar = (char, shift) => {
    const alphabetSize = 26;
    const shiftedCode = (char.charCodeAt(0) - getAlphabetBase(char) + shift) % alphabetSize;

    const newCode = getAlphabetBase(char) + (shiftedCode + alphabetSize) % alphabetSize;

    return String.fromCharCode(newCode);
}

const getAlphabetBase = (char) => {
    return char === char.toUpperCase() ? 65 : 97;
}

const s = "I should have known that you would have a perfect answer for me!!!";
const shift = 1;
const parts = movingShift(s, shift);
console.log(parts);
