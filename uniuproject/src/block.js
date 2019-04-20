var util = require('../lib/util');

var Block = function(reference, transaction) {

    // meta information
    this._id                = util.generateBlockId();
    this.prevBlockReference = reference;
    this.nextBlockreference = null;

    // transaction information
    this.from       = transaction.from;
    this.to         = transaction.to;
    this.amount     = transaction.amount;
    this.blockHash  = util.hashBlockContent(`${this._id} ${this.from} ${this.to} ${this.amount}`);
};

Block.prototype.getInfo = function() {

    console.log("*** BLOCK INFO ***");
    console.log(`ID: ${this._id}`);
    console.log("HASH:" + this.blockHash);
};

module.exports = Block;