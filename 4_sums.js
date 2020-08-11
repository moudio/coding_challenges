// function findArrayQuadruplet(arr, s) {
// // your code goes here
// arr.sort((a, b) => a - b);
// let twoSums = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     twoSums.push([arr[i] + arr[j], i, j]);
//   }
// }

// for (let i = 0; i < twoSums.length; i++) {
//   for (let j = i + 1; j < twoSums.length; j++) {
//     if (
//       twoSums[i][1] !== twoSums[j][1] &&
//       twoSums[i][1] !== twoSums[j][2] &&
//       twoSums[i][2] !== twoSums[j][1] &&
//       twoSums[i][2] !== twoSums[j][2]
//     ) {
//       if (twoSums[i][0] + twoSums[j][0] === s) {
//         return [
//           arr[twoSums[i][1]],
//           arr[twoSums[i][2]],
//           arr[twoSums[j][1]],
//           arr[twoSums[j][2]],
//         ];
//       }
//     }
//   }
// }
// return [];
// }
function findArrayQuadruplet(arr, s) {
  // your code goes here
  arr.sort((a, b) => a - b);
  console.log(arr);
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 2; j++) {
      let temp_target = s - (arr[i] + arr[j]);
      let start = j + 1;
      let finish = arr.length - 1;
      while (start < finish) {
        let temp_sum = arr[start] + arr[finish];

        if (temp_sum < temp_target) {
          start++;
        } else if (temp_sum > temp_target) {
          finish--;
        } else if (temp_sum === temp_target) {
          console.log('yes');
          return [arr[i], arr[j], arr[start], arr[finish]];
        }
      }
    }
  }
  return [];
}

let arr = [2, 7, 4, 0, 9, 5, 1, 3];
let s = 20;
console.log(findArrayQuadruplet(arr, s));
