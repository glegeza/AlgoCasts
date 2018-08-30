// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(Array(i + 1).join('#') + Array(n + 1 - i).join(' '));
//     }
// }

function steps(n, row=0) {
    if (row > n) {
        return;
    }
    console.log(Array(row + 1).join('#') + Array(n - row + 1).join(' '));
    steps(n, row + 1)
}

// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         let str = '';
//         for (let j = 1; j <= n; j++) {
//             str += j <= i ? '#' : ' ';
//         }
//         console.log(str);
//     }
// }

module.exports = steps;
