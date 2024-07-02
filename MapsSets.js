//Question 1
new Set([1,1,2,2,3,4]); //returns {1,2,3,4}

//Question 2
[...new Set("referee")].join(""); //returns 'ref'

//Question 3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); //m is {Array(3) => true, Array(3) => false}

//functions

const hasDuplicate = arr => [...new Set(arr)].join("") !== arr.join("");

const vowelCount = str => {
    vowelMap = new Map();
    const vowels = 'aeiou';
    for (let letter of str) {
        let lowLet = letter.toLowerCase();
        if (vowels.includes(lowLet) && vowelMap.has(lowLet)) {
            vowelMap.set(lowLet, vowelMap.get(lowLet) + 1)
        } else if (vowels.includes(lowLet)) {
            vowelMap.set(lowLet, 1)
        }
    }
    return vowelMap;
}