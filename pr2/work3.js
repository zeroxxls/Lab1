let salaries = {
    Jarik: 1000,
    Anna: 1600,
    Miko: 1300
}

const sumValues = (salaries) =>{
    let sum = 0;
    for(let key in salaries){
        if(salaries.hasOwnProperty(key) && typeof salaries[key] === 'number'){
            sum += salaries[key];
        }else if(salaries === '' || salaries === null){
            return 0
        }
    }
    return sum
}

