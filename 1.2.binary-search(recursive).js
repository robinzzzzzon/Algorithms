const numArray = [];

for (let index = 1; index !== 101; index++) {
  numArray.push(index++);
}

function binarySercher(
  number,
  array,
  minLength = 0,
  maxLength = array.length - 1
) {
  const middle = Math.ceil((maxLength + minLength) / 2);
  const possibleNumber = array[middle];
  console.log("middle is: ", possibleNumber);
  if (possibleNumber === number) {
    console.log("find element is: ", number);
    return;
  } else if (possibleNumber < number) {
    console.log("find element more than: ", number);
    minLength = middle + 1;
    binarySercher(number, array, minLength, maxLength);
  } else if (possibleNumber > number) {
    console.log("find element less than: ", number);
    maxLength = middle - 1;
    binarySercher(number, array, minLength, maxLength);
  }
}

binarySercher(47, numArray);
