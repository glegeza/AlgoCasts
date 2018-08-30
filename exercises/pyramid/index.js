// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row=0) {
    if (row === n) {
        return;
    }
    const numSpaces = n - 1 - row;
    const numBlocks = n * 2 - 1 - numSpaces * 2;
    const spaces = Array(numSpaces + 1).join(' ');
    const blocks = Array(numBlocks + 1).join('#');
    console.log(spaces + blocks + spaces);
    pyramid(n, row + 1);
}

module.exports = pyramid;
