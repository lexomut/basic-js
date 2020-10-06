const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt() {
    if (!message ||!key) throw new Error('')
    message=message.toUpperCase()
    key=key.toUpperCase()

    let result=''
    let j=0

    for (let i=0; i<message.length;i++){
      if(/[A-Z]/.test(message[i])) {
        if(j == key.length) j = 0;
        let numMessage=message[i].charCodeAt()-64
        let numKey=key[j].charCodeAt()-64
        // console.log(numKey,numMessage)
        let resCode = numMessage + numKey;
        if (resCode > 26) resCode -=26;
        resCode +=63
        //console.log(resCode)
        result += String.fromCharCode(resCode);
        j++
      }
      else  result += message[i];
    }
    return result

  }    
  decrypt() {
    if (!message ||!key) throw new Error('')
    message=message.toUpperCase()
    key=key.toUpperCase()

    let result=''
    let j=0

    for (let i=0; i<message.length;i++){
      if(/[A-Z]/.test(message[i])) {
        if(j == key.length) j = 0;
        let numMessage=message[i].charCodeAt()-64
        let numKey=key[j].charCodeAt()-64
        //  console.log(numKey,numMessage)
        let resCode = numMessage - numKey;
        if (resCode < 0) resCode +=26;
        resCode +=65
        //  console.log(resCode)
        result += String.fromCharCode(resCode);
        j++
      }
      else  result += message[i];
    }
    return result
  }
}

module.exports = VigenereCipheringMachine;
// return this.isReverse ? result.split('').reverse().join('') : result;