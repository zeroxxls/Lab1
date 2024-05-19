let user = {
    name: "Kirill",
    age: 20,
    hobby: "Boxing"
}

for(let key in user){
    alert(key) //name age hobby
    alert(user[key]) //Kirill 20 Boxing
}

let users = {
    Kirill: 20,
    Sofia: 40,
    Sasha: 10,
}

for(let key in users){
    let sum = users[key];
    sum *= 2;
}