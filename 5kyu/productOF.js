function productFib(prod){
   /* let newArray =[1,2];

    for(let i=0; i<100; i++){
        newArray.push(newArray[i]+newArray[i+1])
    }


    
    for(let i=0; i<newArray.length; i++){
        if(newArray[i] * newArray[i+1] < prod && newArray[i+1] * newArray[i+2]>prod){
            return [newArray[i+1], newArray[i+2], false]
        } else if(newArray[i] * newArray[i+1] == prod){
            return [newArray[i], newArray[i+1], true]
        }
    }
*/

var n = 0;
  var nPlus = 1;  
  while(n*nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
  
  }

  console.log(productFib(4895))
  console.log(productFib(5895))
