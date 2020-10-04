const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if(!Array.isArray(arr)) return false

  return arr.map(item=> ((!item)||'number'==typeof(item)||'boolean'==typeof(item)||'object'==typeof(item))?'':item.trim().toUpperCase()[0]) .sort().join('')
  console.log(arrName)

};
