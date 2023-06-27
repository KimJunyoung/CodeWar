/*

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

*/

/*
var newArray =[]

function zero(e) {
    if(e == undefined){
        return 0
    } else {
        if(e[1] == '*'){
            return 0 * e[0] 
        } else if(e[1] == '/'){
           return  parseInt(0 / e[0]) 
        } else if(e[1] == '+'){
            return 0 + e[0]
        } else if(e[1] == '-'){
            return 0 - e[0]
        }
    }
}
function one(e) {
    if(e == undefined){
        return 1
    } else {
        if(e[1] == '*'){
            return 1 * e[0] 
        } else if(e[1] == '/'){
           return  parseInt(1 / e[0]) 
        } else if(e[1] == '+'){
            return 1 + e[0]
        } else if(e[1] == '-'){
            return 1 - e[0]
        }
    }
}
function two(e) {
    if(e == undefined){
        return 2
    } else {
        if(e[1] == '*'){
            return 2 * e[0] 
        } else if(e[1] == '/'){
           return  parseInt(2 / e[0]) 
        } else if(e[1] == '+'){
            return 2 + e[0]
        } else if(e[1] == '-'){
            return 2 - e[0]
        }
    }
}
function three(e) {
    if(e == undefined){
        return 3
    } else {
        if(e[1] == '*'){
            return 3 * e[0] 
        } else if(e[1] == '/'){
           return  parseInt(3 / e[0]) 
        } else if(e[1] == '+'){
            return 3 + e[0]
        } else if(e[1] == '-'){
            return 3 - e[0]
        }
    }
}
function four(e) {
    if(e == undefined){
        return 4
    } else {
        if(e[1] == '*'){
            return 4 * e[0] 
        } else if(e[1] == '/'){
           return  parseInt(4 / e[0]) 
        } else if(e[1] == '+'){
            return 4 + e[0]
        } else if(e[1] == '-'){
            return 4 - e[0]
        }
    }
}
function five(e) {
    if(e == undefined){
        return 5
    } else {
        if(e[1] == '*'){
            return 5 * e[0] 
        } else if(e[1] == '/'){
           return  parseInt(5 / e[0])
        } else if(e[1] == '+'){
            return 5 + e[0]
        } else if(e[1] == '-'){
            return 5 - e[0]
        }
    }
    
}
function six(e) {
    if(e == undefined){
        return 6
    } else {
        if(e[1] == '*'){
            return 6 * e[0] 
        } else if(e[1] == '/'){
           return  parseInt(6 / e[0]) 
        } else if(e[1] == '+'){
            return 6 + e[0]
        } else if(e[1] == '-'){
            return 6 - e[0]
        }
    }
}
function seven(e) {
    if(e == undefined){
        return 7
    } else {
        if(e[1] == '*'){
            return 7 * e[0] 
        } else if(e[1] == '/'){
           return  parseInt(7 / e[0]) 
        } else if(e[1] == '+'){
            return 7 + e[0]
        } else if(e[1] == '-'){
            return 7 - e[0]
        }
    }
}
function eight(e) {
    if(e == undefined){
        return 8
    } else {
        if(e[1] == '*'){
            return 8 * e[0] 
        } else if(e[1] == '/'){
           return  parseInt(8 / e[0]) 
        } else if(e[1] == '+'){
            return 8 + e[0]
        } else if(e[1] == '-'){
            return 8 - e[0]
        }
    }
}
function nine(e) {
    if(e == undefined){
        return 9
    } else {
        if(e[1] == '*'){
            return 9 * e[0] 
        } else if(e[1] == '/'){
           return  parseInt(9 / e[0]) 
        } else if(e[1] == '+'){
            return 9 + e[0]
        } else if(e[1] == '-'){
            return 9 - e[0]
        }
    }
}

function plus(e) {
    resetArray()
    newArray.push(e)
    newArray.push('+')
    return newArray;
}
function minus(e) {
    resetArray()
    newArray.push(e)
    newArray.push('-')
    return newArray;
}
function times(e) {
    resetArray()
    newArray.push(e)
    newArray.push('*')
    return newArray;
}
function dividedBy(e) {
    resetArray()
    newArray.push(e)
    newArray.push('/')
    return newArray;
}

function resetArray(){
    newArray =[]
}

console.log(seven(times(five())))
console.log(plus(nine())); // must return 13

eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

*/

function zero(fn) {
    console.log(fn) // undefined 니깐 fn(0)이 아닌 0으로 반환
    return fn ? fn(0) : 0
}
function one(fn) {return fn ? fn(1) : 1}
function two(fn) {return fn ? fn(2) : 2}
function three(fn) {return fn ? fn(3) : 3}
function four(fn) {return fn ? fn(4) : 4}
function five(fn) {return fn ? fn(5) : 5}
function six(fn) {return fn ? fn(6) : 6}
function seven(fn) {return fn ? fn(7) : 7}
function eight(fn) {return fn ? fn(8) : 8}
function nine(fn) {return fn ? fn(9) : 9}

function plus(n) {return function(v) {return v + n}}
function minus(n) {return function(v) {return v - n}}
function times(n) {return function(v) {return v * n}}
function dividedBy(n) {return function(v) {return v / n}}

console.log(zero(plus(seven())))