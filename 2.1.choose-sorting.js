function getRandomArray() {
  let array = []

  for (let index = 0; index < 100000; index++) {
      array.push(index)
  }

  return array.sort(() => Math.random() - 0.5)
}

const array = getRandomArray()

function simpleSorting(array) {
  let minIndex;

  for (let i = 0; i < array.length; i++) {
    minIndex = i;

    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[minIndex]) {
        [array[minIndex], array[j]] = [array[j], array[minIndex]];
      }
    }
  }

  console.log(array);
}

simpleSorting(array);
