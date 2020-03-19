const chainMaker = {
  chain: [],
  values: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.values.push(value);
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (!isFinite(position) || isNaN(position) || position >= this.chain.length || position <= 0) {
      this.chain = [];
      throw new Error;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
