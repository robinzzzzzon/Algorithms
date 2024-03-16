function getRandomArray() {
  let array = []

  for (let index = 0; index < 100000; index++) {
      array.push(index)
  }

  return array.sort(() => Math.random() - 0.5)
}

const array = getRandomArray()

function quickSort(array, baseElement = array[Math.round(array.length / 2)]) {

  let left = []
  let right = []
  let minIndex;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < baseElement) {
      left.push(array[i])
    } else if (array[i] > baseElement) {
      right.push(array[i])
    }
  }

  for (let i = 0; i < left.length; i++) {
    minIndex = i

    for (let j = 0; j < left.length; j++) {
      if (left[j] > left[minIndex]) {
        [left[minIndex], left[j]] = [left[j], left[minIndex]]
      }
    }
  }

  for (let i = 0; i < right.length; i++) {
    minIndex = i

    for (let j = 0; j < right.length; j++) {
      if (right[j] > right[minIndex]) {
        [right[minIndex], right[j]] = [right[j], right[minIndex]]
      }
    }
  }

  console.log([...left, baseElement, ...right])
}

quickSort(array);
