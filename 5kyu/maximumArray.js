

var maxSequence = function(arr){
    let checkNeg = true;

    if(arr.length == 0){
        return 0
    } 

    
    


    const newArray = [];
    let newNumber = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > 0){
            checkNeg = false;
        }
        for(let j=i; j<arr.length; j++){
            newNumber += arr[j]
            newArray.push(newNumber);
        }
            newNumber = 0;
    }
    
    
    if(checkNeg == true){
        return 0;
    } else return (newArray.sort((a,b) => b-a)[0])
  }



console.log(maxSequence([-2,-1,-3,-4,-1,-2,-1,-5,-4]))
// should be 6: [4, -1, 2, 1]