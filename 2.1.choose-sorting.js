const array = [5, 23, 1455, 544, 3, 789, 100, 49, 0, 1, 54555, 32, 900, 2];

function simpleSorting(array) {
  let minIndex = 0;

  for (let i = 0; i < array.length; i++) {
    minIndex = i;

    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[minIndex]) {
        [array[minIndex], array[j]] = [array[j], array[minIndex]];
      }
    }
  }

  return array;
}

console.log(simpleSorting(array));
