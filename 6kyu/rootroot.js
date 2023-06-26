/*
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/

function digitalRoot(n) {
    let newArray = (''+n).split('').map((a,i) => Number(a))
    
    while(newArray.length> 1){
        newArray = newArray.reduce((a,b)=> a+b).toString().split('').map(a=>Number(a))
    }

    return (parseInt(newArray.join('')))
  }


  const arrrray = [0,1,2,3,4,5]
  digitalRoot(16)
  digitalRoot(456)