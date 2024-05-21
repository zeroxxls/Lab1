function count(obj) {
    return Object.keys(obj).length;
  }
  let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  console.log(count(user)); //3
  
  let emptyObject = {};
  
  console.log(count(emptyObject)); //0
  