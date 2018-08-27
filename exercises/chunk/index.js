// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let newArr = [[]];
//     for (let elm of array) {
//         if (newArr[newArr.length - 1].length === size) {
//             newArr.push([]);
//         } 
//         newArr[newArr.length - 1].push(elm);
//     }
//     return newArr;
// }

function chunk(array, size) {
    const chunked = [];
    let start = 0;
    while (start < array.length) {
        let nextChunk = Math.min(start + size, array.length);
        chunked.push(array.slice(start, nextChunk));
        start = nextChunk;
    }
    return chunked;
}

module.exports = chunk;
