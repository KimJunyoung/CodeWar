function isIsogram(str){

    const newArray = (''+str).toLowerCase().split('')
    let countnum = 0;
    for(let i=0;i<newArray.length;i++){
        for(let j=i; j<newArray.length;j++){
            if(newArray[i]==newArray[j+1]){
                countnum ++;
            }
        }
    }
    if(countnum > 0) return false;
    else return true;
  }


  isIsogram("isogram");
  isIsogram("moOse");