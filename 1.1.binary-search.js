const array = [];

for (let index = 1; index < 1001; index++) {
  array.push(index);
}

function binarySearcher(array, number) {
  let minLength = 0;
  let maxLength = array.length - 1;

  while (minLength <= maxLength) {
    const middle = Math.ceil((maxLength + minLength) / 2);
    const possibleNumber = array[middle];

    console.log("possibleNumber is: ", possibleNumber);

    if (possibleNumber === number) {
      console.log("find element is: ", number);
      return;
    } else if (possibleNumber < number) {
      minLength = middle + 1;
    } else if (possibleNumber > number) {
      maxLength = middle - 1;
    }
  }
}

binarySearcher(array, 47);
