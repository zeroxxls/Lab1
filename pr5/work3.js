function getMaxSubSum(arr) {
    let maxSum = 0; 
    let currentSum = 0; 
  
    for (let item of arr) {
      currentSum += item; 
      if (currentSum > maxSum) maxSum = currentSum; 
      if (currentSum < 0) currentSum = 0; 
    }
  
    return maxSum;
  }
  
  
  let arr = [1, -2, 3, 4, -9, 6];
  console.log(getMaxSubSum(arr));
  