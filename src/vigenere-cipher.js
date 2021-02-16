const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
  constructor(typeOfMachine) {
    this.typeOfMachine = typeOfMachine==undefined?false:true
  }

  decrypt(message,key) {
    if (!message ||!key) throw new Error('')
    message=message.toUpperCase()
    key=key.toUpperCase()
    // message=   this.typeOfMachine ? message.split('').reverse().join(''):message
    let result=''
    let j=0

    for (let i=0; i<message.length;i++){
      if(/[A-Z]/.test(message[i])) {
        if(j == key.length) j = 0;
        let numMessage=message[i].charCodeAt()-65
        let numKey=key[j].charCodeAt()-65

        let resCode = numMessage - numKey;
        if (resCode < 0) resCode +=26;
        resCode +=65
        //console.log(resCode)
        result += String.fromCharCode(resCode);
        j++
      }
      else  result += message[i];
    }

    return this.typeOfMachine ?result.split('').reverse().join(''): result;
  }
  encrypt(message,key) {
    if (!message || !key) throw new Error('')
    message=message.toUpperCase()
    key=key.toUpperCase()

    let result=''
    let j=0

    for (let i=0; i<message.length;i++){
      if(/[A-Z]/.test(message[i])) {
        if(j == key.length) j = 0;
        let numMessage=message[i].charCodeAt()-65
        let numKey=key[j].charCodeAt()-65
        // console.log(numKey,numMessage)
        let resCode = numMessage + numKey;
        // console.log(resCode)
        if (resCode >= 26) resCode -=26;
        resCode +=65
        //  console.log(resCode)
        result += String.fromCharCode(resCode);
        j++
      }
      else  result += message[i];
    }

    return this.typeOfMachine ? result.split('').reverse().join('') : result;
  }
}


module.exports = VigenereCipheringMachine;
