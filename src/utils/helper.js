'use strict';
// import $ from 'jquery';
function helper() {
    return {
        getUniqueKey: function () {
            return new Date().getTime().toString() + Math.random().toString();
        },
        computeCounter: function (str) {
            let counters = []
            if (!str || typeof (str) !== "string") {
                counters.push(0);
            }
            let strNo = "";
            for (let i in str) {
                strNo += str[i].charCodeAt().toString(16);
            }
            for (let i in strNo) {
                if (!isNaN(strNo[i])) {
                    const num = parseInt(strNo[i]), pos = counters.indexOf(num);
                    if (pos >= 0) {
                        counters[pos] += num;
                    } else {
                        counters.push(num);
                    }
                }
            }
            return counters;
        }
    };
}
function encrypt(plainText, seed, reverse, rangeStrs) {
    if (!plainText || !seed || typeof (plainText) !== "string" || typeof (seed) !== "string") {
        return "Hello, the world.";
    }
    let strLen = plainText.length,
        counters = helper().computeCounter(seed);
    let cipherText = "";
    if (reverse) {
        for (let i = strLen - 1; i >= 0; i--) {
            let strPos = rangeStrs.indexOf(plainText[i]),
                counter = cipherText.length;
            while (counters[counter] === undefined) {
                counter--;
            }
            let strPosNext = strPos + counters[counter];
            if (strPos >= 0) {
                while (strPosNext >= rangeStrs.length) {
                    strPosNext -= rangeStrs.length;
                }
                cipherText += rangeStrs.substr(strPosNext - 1, 1);
            } else {
                cipherText += plainText[i];
            }
        }
    } else {
        for (let i = 0; i <= strLen - 1; i++) {
            let strPos = rangeStrs.indexOf(plainText[i]),
                counter = cipherText.length;
            while (counters[counter] === undefined) {
                counter--;
            }
            let strPosNext = strPos - counters[counter];
            if (strPos >= 0) {
                while (strPosNext < 0) {
                    strPosNext = rangeStrs.length + strPosNext;
                }
                cipherText += rangeStrs.substr(strPosNext - 1, 1);
            } else {
                cipherText += plainText[i];
            }
        }
    }
    return cipherText;
}
function decrypt(cipherText, seed, reverse, rangeStrs) {
    if (!cipherText || !seed || typeof (cipherText) !== "string" || typeof (seed) !== "string") {
        return "Hello, the world.";
    }
    let plainText = "",
        strLen = cipherText.length,
        counters = helper().computeCounter(seed);
    if (reverse) {
        let counter = cipherText.length;
        for (let i = strLen - 1; i >= 0; i--) {
            let strPos = rangeStrs.indexOf(cipherText[i]);
            if (counter > 0) {
                counter--;
                while (counters[counter] === undefined && counter > 0) {
                    counter--;
                }
            }
            let strPosNext = strPos - counters[counter];
            if (strPos >= 0) {
                while (strPosNext < 0) {
                    strPosNext = rangeStrs.length + strPosNext;
                }
                if (strPosNext >= rangeStrs.length - 1) {
                    strPosNext = 0;
                } else {
                    strPosNext++;
                }
                plainText += rangeStrs.substr(strPosNext, 1);
            } else {
                plainText += cipherText[i];
            }
        }
    } else {
        for (let i = 0; i <= strLen - 1; i++) {
            let strPos = rangeStrs.indexOf(cipherText[i]),
                counter = plainText.length;
            while (counters[counter] === undefined) {
                counter--;
            }
            let strPosNext = strPos + counters[counter];
            if (strPos >= 0) {
                while (strPosNext >= rangeStrs.length) {
                    strPosNext -= rangeStrs.length;
                }
                if (strPosNext >= rangeStrs.length - 1) {
                    strPosNext = 0;
                } else {
                    strPosNext++;
                }
                plainText += rangeStrs.substr(strPosNext, 1);
            } else {
                plainText += cipherText[i];
            }
        }
    }
    return plainText;
}

module.exports = {
    helper,
    encrypt,
    decrypt
};