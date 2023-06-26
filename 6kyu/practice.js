

 const array1 = ['a','b','c','d','e','f','g']

 array1.filter(function(val,i,arr){
    console.log(val,i)
    return i == 5;
 })

    

 console.log(array1)