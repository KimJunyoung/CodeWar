/*
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(s){
    let newArray = [];
    let answerString = []

    newArray = s.split(' ')
   
    for(let i=0; i<newArray.length;i++){
        if(newArray[i].length >=5){
         answerString.push(newArray[i].split('').reverse().join(''));       
        }else{
         answerString.push(newArray[i]);    
        }

    }
   
    return answerString.join(' ')
    
  } 




spinWords("Welcome")// "emocleW");
spinWords("Hey fellow warriors")// "Hey wollef sroirraw");
spinWords("This is a test")// "This is a test");
spinWords("This is another test")// "This is rehtona test");
spinWords("You are almost to the last test")// "You are tsomla to the last test");
spinWords("Just kidding there is still one more")// "Just gniddik ereht is llits one more");
spinWords("Seriously this is the last one")// "ylsuoireS this is the last one");