/*

Complete the solution so that it splits the string into pairs of two characters.
 If the string contains an odd number of characters then 
 it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function solution(str){
   var newString = str.split('');
   const arrAnswer = [];
   if(str.length % 2 != 0){
    newString.push('_')
   }

   for(let i=0; i<newString.length;i++){
     if(i%2 == 0){
        arrAnswer.push(`${newString[i]}${newString[i+1]}`)
     }
   }

   return arrAnswer;
  
}

solution("abcdef")
solution("abcdefg")