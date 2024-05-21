function countOccurrences(arr) {
    let occurrenceMap = new Map();
  
    for (let num of arr) {
      if (occurrenceMap.has(num)) {
        occurrenceMap.set(num, occurrenceMap.get(num) + 1);
      } else {
        occurrenceMap.set(num, 1);
      }
    }
  
    return occurrenceMap;
  }
  
 
  let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  let result = countOccurrences(arr);

  for (let [key, value] of result) {
    console.log(key + ' = ' + value);
  }
