let menu = {
    width: 200,
    height: 300,
    tittle: "Моє Меню"
}

const multiplyNumeric = (menu) =>{
    for (let key in menu){
        if(menu.hasOwnProperty(key) && typeof menu[key] === 'number'){
            menu[key] *=2
        }
    }
}