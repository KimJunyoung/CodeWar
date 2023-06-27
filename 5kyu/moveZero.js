/*

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

function moveZeros(arr) {
    const newArray = [];

    for(e of arr){
        if(e !== 0){
            newArray.push(e);
        }
    }

    for(e of arr){
        if(e === 0){
            newArray.push(0)
        }
    }

    return newArray;

    

  }


  moveZeros([false,1,0,1,2,0,1,3,"a"])