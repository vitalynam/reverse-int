module.exports = function reverse (n) {
    
    let str = n.toString();
    let arr = [];
    let result = '';
    
    for(let i = 0; i < str.length; i++){
        if(str[i] === '-'){
            continue;
        }else{
            arr.push(str[i]);
        }
    }

    result = arr.reverse().join('');
    return +result;
}
