const checkOne = ['a', 'e', 'i' ,'o', 'u'];
const whatIs = 'abracadabra'
let countNums = 0;

function getCount(str) {
   for(i=0; i<str.length; i++){
        for(j=0; j<checkOne.length; j++){
            if(str[i]==checkOne[j]){
                countNums ++;
            } else{
                return ;
            }
        }
    }
  }
getCount(whatIs);
console.log(countNums);