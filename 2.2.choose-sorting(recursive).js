function getRandomArray() {
  let array = []

  for (let index = 0; index < 5000; index++) {
      array.push(index)
  }

  return array.sort(() => Math.random() - 0.5)
}

const array = getRandomArray()

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
