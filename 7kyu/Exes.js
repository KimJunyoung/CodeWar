function XO(str) {
    const checkOX = ['x', 'o'];
    const newArray = str.toLowerCase().split('');

    let countX = 0;
    let countO = 0;

    for(let i=0;i<newArray.length;i++){
        if(newArray[i]==checkOX[0]){
            countX ++;
        } else if(newArray[i]==checkOX[1]){
            countO ++;
        }
    }
   
    if(countX == countO){
        return true;
    }else if(countO == 0 && countX == 0){
        return true;
    } else {
        return false;
    }

}

console.log(XO("ooxx"));
XO("ooxXm");
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"))

/*
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
*/