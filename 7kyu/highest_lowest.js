function highAndLow(numbers){
    let newArray = numbers.split(' ')
    let arrIndex = newArray.length -1;
 
        newArray.sort(function(a,b){
            return b-a;
        })
    console.log(newArray);
    return `${newArray[arrIndex]} ${newArray[0]}`
 
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))