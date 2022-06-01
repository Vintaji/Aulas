/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
// AULA 16
function dec2Bin(decNumber) {
    var restStack = [],
        rest,
        binaryString = '';

    while (decNumber > 0) {
        rest = Math.floor(decNumber % 2);
        restStack.push(rest);
        decNumber = Math.floor(decNumber / 2);
    }

    while (restStack.length > 0) {
        binaryString += restStack.pop().toString();
    }

    return binaryString;
}

// console.log(dec2Bin(10));

// AULA 17
function baseConverter(decNumber, base) {
    var restStack = [],
        rest,
        baseString = '',
        digits = '0123456789ABCDEF';

    while(decNumber > 0) {
        rest = Math.floor(decNumber % base);
        restStack.push(rest);
        decNumber = Math.floor(decNumber / base);
    }

    while(restStack.length > 0) {
        baseString += digits[restStack.pop()];
    }

    return baseString;
}

console.log(baseConverter(123, 16));