/* 
function orderWeight(strng) {
    let sum=0;
    let temp=0;
    let tempSt = '';
    const newOne = strng.split(' ')
    const newArray = newOne.map(function(a,i){
        sum = 0;
        for(e of a){
            sum += Number(e)
        }
        return sum
    },0)
   
    
    for(let i=0; i<newArray.length; i++){
        for(let j=0; j<newArray.length; j++){
            if(newArray[j]>newArray[j+1]){
            temp = newArray[j+1]
            newArray[j+1] = newArray[j]
            newArray[j]= temp

            tempSt = newOne[j+1]
            newOne[j+1] = newOne[j]
            newOne[j] = tempSt
        }
    }
}

tempSt =''

for(let i=0; i<newOne.length; i++){
    for(let j=0; j<newOne.length; j++){
       if(newArray[j]===newArray[j+1]){
            if(newOne[j]>newOne[j+1]){
                tempSt = newOne[j+1]
                newOne[j+1] = newOne[j]
                newOne[j] = tempSt
            }
       }
    }
}

    return newOne.join(' ')

}

*/


function orderWeight(strng){
    return strng.split(' ').sort(function(a,b){
        let sumA = a.split('').reduce((a,val) => a+Number(val),0)
        let sumB = a.split('').reduce((a,val) => a+Number(val),0)
        if (sumA < sumB) return -1
        if (sumA > sumB) return 1
        if (a < b) return -1
        return 1;

    })
}


orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123") // "11 11 2000 10003 22 123 1234000 44444444 9999")