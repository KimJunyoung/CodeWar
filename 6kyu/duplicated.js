/*
The goal of this exercise is to convert a string to a new string 
where each character in the new string is "(" if that character appears only once in the original string, 
or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.

Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

*/

function duplicateEncode(word){
    const newArray = (''+word).toLowerCase().split('')
    let wordArraycount =0;
    const answerOne =[];
    
    for(let i=0; i<newArray.length; i++){
        for(let j=0; j<newArray.length; j++){
            if(newArray[i] == newArray[j]){
                wordArraycount++;
            }
        }
        if(wordArraycount == 1){
            answerOne.push('(');
        } else{
            answerOne.push(')')
        }

        wordArraycount = 0;
    
    }

    return answerOne.join('')
    
}

duplicateEncode("recede")