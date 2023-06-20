function filter_list(l) {
    
    const newArray =[];
    for(let i=0; i<l.length;i++){
        if(typeof l[i] == "number"){
            newArray.push(l[i]);
        }
    }
    return newArray;


    }

    console.log(filter_list([1,"a","b",0,15]))
