const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value = '') {
    this.chain.push(`( ${value} )`)
    return this

  },
  removeLink(position) {
    if (this.chain[position - 1] && Number.isInteger(position)) {
      this.chain.splice(position - 1, 1);
      console.log(Number.isInteger(position))
    } else {
      this.chain = [];
      console.log('сброшено')
      throw new Error('fail position');
    }
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    let result = this.chain.join('~~');

    this.chain = [];
    return result;


  }
}

module.exports = chainMaker;
