/*
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

/*
function scramble(str1, str2) {
    
    var count = 0;

    var arrayNew1 = (''+str1).split('')
    var arrayNew1Count = [];
    var arrayNew2 = (''+str2).split('')
    var arrayNew2Count = [];

    
    for(let i=0; i<arrayNew1.length;i++){

        for(let l=0; l<arrayNew1.length; l++){
            if(arrayNew1[i] == arrayNew1[l]){
                count ++;
            }
        }
        arrayNew1Count.push(count);
        count = 0;
    }

    for(let i=0; i<arrayNew2.length;i++){

        for(let l=0; l<arrayNew2.length; l++){
            if(arrayNew2[i] == arrayNew2[l]){
                count ++;
            }
        }
        arrayNew2Count.push(count);
        count = 0;
    }
    console.log(arrayNew1Count, arrayNew2Count)

    var answerArray =[];

    for(let i=0; i<arrayNew2.length; i++){
        for(let l=0; l<arrayNew1.length; l++){
            if(arrayNew2[i] == arrayNew1[l] && arrayNew2Count[i] <= arrayNew1Count[l]){
                answerArray.push(true);
            }
        }
    }
    
    console.log(answerArray)
    
}
  
scramble('katas', 'steak')

 */

function scramble(str1, str2) {
    let occurences = str1.split("").reduce((arr, cur) => {
        console.log(arr)
         arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; //arr 는 객체이다. arr[cur]가 undefind 면 객체에 추가 , 있으면 그 값 ++
         }, {});

         console.log()
    return str2.split("").every((character) => --occurences[character] >= 0);
  }


scramble('cedewaraaossoqqyt', 'codewars')