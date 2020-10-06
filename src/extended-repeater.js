const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
    function f(str='',separator='+',repeatTimes=1,addition='',additionRepeatTimes=1,additionSeparator='|') {
        repeatTimes = +repeatTimes
        separator=separator+''
        addition=addition+''
        additionRepeatTimes=+additionRepeatTimes
        additionSeparator=additionSeparator+''

        let result=''
        for (let i=0;i<repeatTimes;i++){
            result+=str;
            for (let j=1;j<=additionRepeatTimes;j++){
                result+=addition
                if(j!==additionRepeatTimes)    result+=additionSeparator
            }
            if(i<repeatTimes-1)result+=separator
        }

        return result
    }
    return f(str,options.separator,options.repeatTimes,options.addition,options.additionRepeatTimes,options.additionSeparator)
};