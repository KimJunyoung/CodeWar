function solution(number){
   let sumThree = 0;
   let sumFive =0;
   let sumfiftine = 0;
    let sumAnswer =0;

   for(let i=1; i<number; i++){
    if(i % 3 == 0){
        sumThree += i
    } else if(i % 5 == 0){
        sumFive += i
    } 




   sumAnswer = sumThree + sumFive


   }
   return sumAnswer;
}

console.log(solution(10))