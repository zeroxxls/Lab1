function truncate(str, maxlength){
    if(str > maxlength){
        return str.slice(0, maxlength - 1) + '…';
    }else{
        return str
    }
}