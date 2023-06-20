String.prototype.toJadenCase = function () {
    const newArray = this.toLowerCase().split(' ');
    return (newArray.map(e => e[0].toUpperCase() + e.slice(1)).join(' '))
  };


  var str = "How can mirrors be real if our eyes aren't real";
  str.toJadenCase();