const initArray = [];

for (let index = 1; index < 1001; index++) {
  initArray.push(index);
}

function binarySearcher(array, number) {
  let start = 0;
  let finish = array.length - 1;
  let middle;

  while (start <= finish) {
    middle = Math.round((start + finish) / 2);

    if (middle === number) {
      console.log("find element is: ", middle);
      return;
    } else if (middle < number) {
      start = middle + 1;
    } else if (middle > number) {
      finish = middle - 1;
    }
  }
}

binarySearcher(initArray, 453);
