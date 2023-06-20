var isSquare = function(n){
    if(n<0){
        return false;
    } else
    return Number.isInteger((n ** (1/2)));
  }
