

function dirReduc(arr){
    let newArray = arr;
    var opposite = {
        'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
        for(let i=0; i<arr.length; i++){

            if(arr[i+1] == opposite[arr[i]]){

                newArray.splice(i,2)
                i=-1;

            }
        }
    
        return newArray
  }


  dirReduc(["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","WEST"])
