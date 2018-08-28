// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function isAlpha(cc) {
    return ((cc>47 && cc<58) || (cc>64 && cc<91) || (cc>96 && cc<123));
}

function anagrams(stringA, stringB) {
    const map = {};
    let lowerA = stringA.replace(/[^\w]/g, "").toLowerCase();
    let lowerB = stringB.replace(/[^\w]/g, "").toLowerCase();
    if (lowerA.length !== lowerB.length) {
        return false;
    }

    for (let c of lowerA) {
        if (!map[c]) {
            map[c] = [0, 0];
        }
        map[c][0] += 1;
    }
    for (let c of lowerB) {
        if (!map[c]) {
            map[c] = [0, 0];
        }
        map[c][1] += 1;
    }

    console.log(map);

    for (let c in map) {
        if (map[c][0] !== map[c][1]) {
            return false;
        }
    }
    return true;
}

module.exports = anagrams;
