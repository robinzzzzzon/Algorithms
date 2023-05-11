const array = [5, 23, 1455, 544, 3, 789, 100, 49, 0, 1, 54555, 32, 900, 2];

function simpleSorting(array, minIndex = 0) {
  if (minIndex === array.length) {
    console.log(array);
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[minIndex]) {
        [array[minIndex], array[i]] = [array[i], array[minIndex]];
      }
    }

    minIndex++;

    simpleSorting(array, minIndex);
  }
}

simpleSorting(array);
