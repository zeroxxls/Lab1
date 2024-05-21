function sumSalaries(salaries) {
    let total = 0;
    let values = Object.values(salaries);
  
    for (let salary of values) {
      total += salary;
    }
  
    return total;
  }
 
  let salaries = {
    "John": 1000,
    "Jane": 1500,
    "Peter": 2000
  };
  
  console.log(sumSalaries(salaries));
  
  let emptySalaries = {};
  
  console.log(sumSalaries(emptySalaries)); 
  