function checkSpam(str){
    str = str.toLowerCase();
    if(str.includes('росі') || str.includes('XXX')){
        return true
    }else{
        return false
    }
}
console.log(checkSpam('Поїхати до росіїї')) //true
console.log(checkSpam('XXX is a common term')); //true
console.log(checkSpam('No spam here')); //false