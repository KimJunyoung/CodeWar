/*

Write a function, which takes a non-negative integer (seconds) as input 
and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

function humanReadable (seconds) {
    let numberSS = 0;
    let numberMM = 0;
    let numberHH = 0;

    if(seconds < 360000){
    
    numberHH = Math.floor(seconds/3600).toString();
    numberMM = Math.floor((seconds-(numberHH*3600))/60).toString();
    numberSS = Math.floor((seconds-(numberHH*3600)-(numberMM*60))).toString();    

    }

    if(numberHH.length == 1){
        numberHH = '0' + numberHH;
    }
    if(numberMM.length == 1){
        numberMM = '0' + numberMM;
    }
    if(numberSS.length == 1){
        numberSS = '0' + numberSS;
    }

    return  `${numberHH}:${numberMM}:${numberSS}`
  
  }

humanReadable(0) // '00:00:00', 'humanReadable(0)');
humanReadable(59) // '00:00:59', 'humanReadable(59)');
humanReadable(60) //'00:01:00', 'humanReadable(60)');
humanReadable(90) // '00:01:30', 'humanReadable(90)');
humanReadable(3599) // '00:59:59', 'humanReadable(3599)');
humanReadable(3600) // '01:00:00', 'humanReadable(3600)');
humanReadable(45296) // '12:34:56', 'humanReadable(45296)');
humanReadable(86399) // '23:59:59', 'humanReadable(86399)');
humanReadable(86400) // '24:00:00', 'humanReadable(86400)');