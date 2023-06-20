/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

1. 옆에 숫자들이랑 비교를 해서
2. 동일한게 안나오면 그 index를 변수에 저장
3. return 을 배열[i]로  
*/

function findOdd(A) {
    let saveIndex = 0;
    const newArray =[]
    let myNum =0;

    for(let i=0; i<A.length; i++){
        for(let j=0; j<A.length; j++){
            if(A[i]==A[j]){
                saveIndex++;
            }
        }
        newArray.push(saveIndex);
        saveIndex =0;
    }

    console.log(newArray);

    for(let i=0; i<newArray.length;i++){
        if(newArray[i]%2 == 1){
            myNum = i;
        }
    }
        
    return A[myNum];


    }




  console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
  console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
