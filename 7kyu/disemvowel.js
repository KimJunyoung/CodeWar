function getCount(str) {
    var newOne =[];
    var vowels = ["a","e","i","o","u"];
    var newArray = str.split('');
    
    for(let i = 0 ; i< newArray.length; i ++){
        if(newArray[i].toLowerCase() == 'a' ||
        newArray[i].toLowerCase() == 'e' ||
        newArray[i].toLowerCase() == 'i' ||
        newArray[i].toLowerCase() == 'o' ||
        newArray[i].toLowerCase() == 'u'){
        }else {
            newOne.push(newArray[i]);

    }
}
    return newOne.join('');

}





getCount("This website is for losers LOL!");