const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity)return false
  sampleActivity+=""
  if (((+sampleActivity)||sampleActivity==('NaN')||sampleActivity==('Infinity')|| +sampleActivity>= 8) ) return false


    let result=Math.ceil(Math.log(MODERN_ACTIVITY/(+sampleActivity))/(0.693/HALF_LIFE_PERIOD))
  if (!result || result===Infinity) return false
  return result

};