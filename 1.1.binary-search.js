const numArray = [];

for (let index = 1; index < 101; index++) {
  numArray.push(index);
}

function binarySearcher(array, number) {
  let minLength = 0;
  let maxLength = array.length - 1;

  while (minLength <= maxLength) {
    const middle = Math.ceil((maxLength + minLength) / 2);
    const possibleNumber = array[middle];

    if (possibleNumber === number) {
      console.log("find element is: ", number);
      return;
    } else if (possibleNumber < number) {
      console.log("find element more than: ", possibleNumber);
      minLength = middle + 1;
    } else if (possibleNumber > number) {
      console.log("find element less than: ", possibleNumber);
      maxLength = middle - 1;
    }
  }
}

binarySearcher(numArray, 47);
