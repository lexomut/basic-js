const CustomError = require("../extensions/custom-error");
let max_depth = 0;
module.exports = class DepthCalculator {
  calculateDepth(arr,depth=1) {

    for (let i=0; i<arr.length;i++ ){
      if(Array.isArray(arr[i]))  max_depth = this.calculateDepth(arr[i], depth + 1);}

    if( max_depth<depth) max_depth=depth


    let resultDept=max_depth
    // console.log(max_depth)
    max_depth=0
    return resultDept
  }

};