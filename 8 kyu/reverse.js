function solution(str){
  const strArray = str.split('')
  const newArray =[];
  for(let i=0;i<str.length;i++){
    newArray.push(strArray.pop())
  }

  return newArray.join('')
}

solution('world')