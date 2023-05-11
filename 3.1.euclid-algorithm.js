function countEuklid(length, width) {
  while (length !== width) {
    length = length - width;

    if (length < width) {
      const temp = length;
      length = width;
      width = temp;
    }
  }

  return { length: length, width: width };
}

console.log(countEuklid(1680, 640));
