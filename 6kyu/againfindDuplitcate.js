/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that 
occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/


function duplicateCount(text){
    const newString = (''+text).toLowerCase().split('');
    let answerString = newString.filter(function(val,i,arr){
        return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i
    })

    return answerString.length;

  }

  duplicateCount("")
  duplicateCount("abcde")
  duplicateCount("aabbcde")
  duplicateCount("aabBcde")
  duplicateCount("Indivisibility")
  duplicateCount("Indivisibilities")
  duplicateCount("iiidddssii")