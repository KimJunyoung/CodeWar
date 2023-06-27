/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

function pigIt(str){
    const answerArray =[]
    const newArray = str.split(' ').map(function(a,i,arr){
        if(a !== '!' && a !== '?'){
            return a + arr[i][0] + 'ay'
        } else{
            return a + arr[i][0];
        }
    })

    for(let i=0; i<newArray.length;i++){
          answerArray.push(newArray[i].slice(1))  
    }
    

    return answerArray.join(' ')
    
    
  }


  pigIt('Pig latin is cool');
  pigIt('Hello world !');