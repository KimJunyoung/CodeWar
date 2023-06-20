
function getMiddle(s)
{   
    const arrayTest = (''+s).split('');
   
    let answerString = '';
    let halfNum = parseInt(arrayTest.length/2)

  if(arrayTest.length % 2){
    answerString = arrayTest[halfNum];
    return answerString;
  }else{
    answerString = arrayTest[halfNum-1] + arrayTest[halfNum];
    return answerString;
  }

}

console.log(getMiddle("test"));
getMiddle("testing");
