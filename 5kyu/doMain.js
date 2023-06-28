/*

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 
For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

function domainName(url){
    var newArray = [];
    var answerString = ''
    if(url.includes("http") && !url.includes("www")){
        newArray = url.split("//")

        for(let i=0; i<newArray[1].length;i++){
            if(newArray[1][i]=='.'){
                return answerString;
            }
            answerString += newArray[1][i];
        }
    } else if(url.includes("www")){
        newArray = url.split('.')
        return newArray[1];
    } else if(!url.includes("www") && ! url.includes("http")){
        newArray = url.split('.')
        return newArray[0];
    }

  }

  console.log(domainName('http://www.yh2bm3xtt.edu/'))