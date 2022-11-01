function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let idx = 0; idx < arr.length; idx++) {
    for (let subIdx = 0; subIdx < arr[idx].length; subIdx++) {
      product *= arr[idx][subIdx];
      
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);