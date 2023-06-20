/* Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).

[true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true] 
    */

    // 내 코드

    let arrayNums = 0;

    const arrayList = [true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true ]
        
        
        
        arrayList.forEach(function(e){
            if(e == null || e == undefined){
                return ;
            } else if(e){
                arrayNums ++ ;
            } else {
                return ;
            }


           
        })

        console.log(arrayNums);