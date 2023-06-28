/*
var a = 1;

function outer(){
    function inner(){
       
        var a = 3;
        console.log(a);
    }

    inner();
    console.log(a)
}

outer();
console.log(a)
*/

function a(x){
    console.log(x);
    var x;
    console.log(x);
    var x = 2;
    console.log(x)
}
a(1);