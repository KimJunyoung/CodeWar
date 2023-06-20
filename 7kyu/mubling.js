/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/


function accum(s) {
    var letters = s.split('');
    var result = [];
 
    for(var i=0; i< letters.length; i++){
     result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
    }
    return result.join('-');
 }
 
 


accum("abcd");


