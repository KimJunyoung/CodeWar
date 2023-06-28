/*

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/

function generateHashtag (str) {

    if(str.split('').filter(function(a,i,arr){
        if(a !== ' '){
            return a;
        }
    }).join('') == ''){
        return false
    }

    const newArray =[];
    const answerArray = str.split(' ').filter(function(a,i,arr){
        if(a !== ' '){
            return a
        }
    }).map(function(a,i,arr){
        return a[0].toUpperCase()+a.slice(1)
    })

    for(let i=0; i<answerArray.length; i++){
        
        if(answerArray[i] !== ''){
            newArray.push(answerArray[i])
        }
    }

    

    if(newArray.join('').length >= 140 || str == ' '){
        return false
    }
    
    return '#'+ newArray.join('')

}

//console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))// "#CodeWars"
console.log(generateHashtag("a".repeat(140)))

/*
    if(str.length > 140 || str == ''){
        return false;
    }

    return '#'+str.split(' ').map(function(a,i,arr){
        return arr[i][0].toUpperCase()+a.slice(1)
    }).join('')
*/