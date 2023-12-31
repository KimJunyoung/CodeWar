/*

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

*/

function findUniq(arr) {
    
    let answerA = 0

    for(let i=0; i<arr.length; i++){
            if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
            answerA = arr[i];
        }}

        return answerA;
    
  }
  
  

  findUniq([ 1, 0, 0 ])
  findUniq([ 0, 1, 0 ])
  findUniq([ 0, 0, 1 ])
  findUniq([ 1, 1, 1, 2, 1, 1 ])
  findUniq([ 1, 1, 2, 1, 1 ])
  findUniq([ 3, 10, 3, 3, 3 ])