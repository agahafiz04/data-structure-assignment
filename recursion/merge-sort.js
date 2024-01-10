const mergeThisArrayOne = [3, 2, 1, 13, 8, 5, 0, 1];
const mergeThisArrayTwo = [105, 79, 100, 110];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let midIndex = Math.floor(arr.length / 2);

  const firstPart = mergeSort(arr.slice(0, midIndex));
  const secondPart = mergeSort(arr.slice(midIndex));

  return sort(firstPart, secondPart);
}

function sort(firstArr, secondArr) {
  const mergedArray = [];

  while (firstArr.length && secondArr.length) {
    // First Variant

    if (firstArr[0] < secondArr[0]) {
      mergedArray.push(firstArr.shift());
    } else {
      mergedArray.push(secondArr.shift());
    }

    /*
    // Second Variant

    const firstSorting = firstArr[0] < secondArr[0] ? firstArr : secondArr;
    const secondSorting = firstSorting.shift();
    mergedArray.push(secondSorting);
    */
  }

  return [...mergedArray, ...firstArr, ...secondArr];
}

console.log(mergeSort(mergeThisArrayOne));
console.log(mergeSort(mergeThisArrayTwo));

// Split the array into two small pieces (V)
// Split it until it cant be splitted into two (only one index) [3][2][1][13][8][5][0][1] (V)
// Sort the single index with another index based on the splitted array
// Then, Merge the smallest chunks with another smallest chunks that already splitted with another chunks
