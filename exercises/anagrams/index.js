// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function getMap(map, str, idx) {
    let lower = str.replace(/[^\w]/g, "").toLowerCase();
    for (let c of lower) {
        if (!map[c]) {
            map[c] = [0, 0];
        }
        map[c][idx] += 1;
    }
    return map;
}

function anagrams(stringA, stringB) {
    const map = {};
    let lowerA = getMap(map, stringA, 0);
    let lowerB = getMap(map, stringB, 1);
    if (lowerA.length !== lowerB.length) {
        return false;
    }

    for (let c in map) {
        if (map[c][0] !== map[c][1]) {
            return false;
        }
    }
    return true;
}

module.exports = anagrams;
