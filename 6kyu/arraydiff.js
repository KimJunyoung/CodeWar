/*

    assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
    assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
    assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
    assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")

*/

function arrayDiff(a, b) {
    var arr = new Array();

    for(let i=0; i<a.length; i++){
        if(b.indexOf(a[i]) < 0){
            arr.push(a[i]);
        }
    }

    return arr;
}

arrayDiff([1,2], [1]);
arrayDiff([1,2,2], [1])
arrayDiff([1,2,3], [1,2])