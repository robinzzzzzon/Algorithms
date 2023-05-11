function countEuklid(length, width) {
  length = length - width;

  if (length === width) {
    console.log({ length: length, width: width });
  } else {
    if (length < width) {
      const temp = length;
      length = width;
      width = temp;
    }

    countEuklid(length, width);
  }
}

countEuklid(1680, 640);
