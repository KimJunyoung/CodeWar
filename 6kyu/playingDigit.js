/*

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

*/

function digPow(n, p){
    const newArray = (''+n).split('').map(a=>Number(a))
    let countC = p
    let sumAnswer = 0;
    for(e of newArray){
       sumAnswer += (e ** countC)
        countC ++
    }

    if(sumAnswer % n == 0){
        return sumAnswer / n
    } else if(sumAnswer % n != 0){
        return -1
    }

  }

  console.log(digPow(89, 1))
  console.log(digPow(92, 1))
  console.log(digPow(46288, 3))