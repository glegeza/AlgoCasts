// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let aggr = {};
    let max = 0;
    let maxChar = '';
    for (let c of str) {
        aggr[c] = aggr[c] + 1 || 1;
        if (aggr[c] > max) {
            max = aggr[c];
            maxChar = c;
        }
    }
    return maxChar;
}

module.exports = maxChar;
