function areAllElementsUnique(arr) {
    let elementSet = new Set();
  
    for (let item of arr) {
      if (elementSet.has(item)) {
        return false;
      }
      elementSet.add(item);
    }
  
    return true;
  }

  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [1, 2, 3, 4, 5, 3];
  
  console.log(areAllElementsUnique(arr1)); 
  console.log(areAllElementsUnique(arr2));
  