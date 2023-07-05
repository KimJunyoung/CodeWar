/*

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

*/

function incrementString (strng) {
     const newArrayNu = []
     let answerNum = 0;
     const newArraySt =  strng.split('').map(function(a,i,arr){
        return (Number(a) || a == '0') ? Number(a) : a
    }).filter(function(a){
        if(typeof a == 'string'){
            return a
        } else {
            newArrayNu.push(a)
        }
    })

    answerNum = Number(newArrayNu.join(''))

    console.log(newArraySt)
    console.log(newArrayNu)
    console.log(answerNum)
   
}
  incrementString('foo91')
  incrementString('foobar000')
