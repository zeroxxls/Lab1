function unique(arr){
    let elementCount = {};
    for (let item of arr) {
      if (elementCount[item]) {
        elementCount[item]++;
      } else {
        elementCount[item] = 1;
      }
    }
    for (let item of arr) {
      if (elementCount[item] === 1) {
        return item;
      }
    }
  
    return null;
}

let values = ["Hare","Kirishna","Hare","Kirishna","Hare","Kirishna",
"Hare","Kirishna",":-o"
]
alert(unique(values))