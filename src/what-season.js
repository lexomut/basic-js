const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date)return 'Unable to determine the time of year!'
// date+=''
   // if( "object"!==typeof(date)) return 'Error'
//
 if (!date.valueOf())return 'Error'
//
//   let date1 = new Date(Date.parse(date))
  let month=date.getMonth()
  if (month<5&&month>1) return 'spring'
     else if (month<8&&month>4) return 'summer'
      else if (month<11&&month>7) return 'autumn'
      else return 'winter'







};
