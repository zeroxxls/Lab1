function isTrue (n){
    let sum = 0;
    if(n < 0){
        for(let i = 1; i <=n ; i++){
            sum +=i
        }
    }else{
        for(let i = 1; i >= n; i--){
            sum +=i
        }
    }
    return sum
}