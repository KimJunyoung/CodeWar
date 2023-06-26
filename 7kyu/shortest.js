function findShort(s){
    const newArray = s.split(' ')    
    return newArray.sort((a,b)=> a.length - b.length)[0].length
}

findShort("bitcoin take over the world maybe who knows perhaps")