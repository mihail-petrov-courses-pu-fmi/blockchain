var util = require('../lib/util');

var Block = function(reference, transaction) {

    // meta information
    this._id                = util.generateBlockId();
    this.prevBlockReference = reference;
    // this.nextBlockreference = null;

    // transaction information
    this.from       = transaction.from;
    this.to         = transaction.to;
    this.amount     = transaction.amount;
    this.hash       = util.hashBlockContent(`${this._id} ${this.from} ${this.to} ${this.amount}`);
};

// get 
Block.prototype.getId = function() {
    return this._id;
}

Block.prototype.getHash = function() {
    return this.hash;
}

Block.prototype.setPrevBlockReference = function(hash) {
    this.prevBlockReference = hash;
}

Block.prototype.getInfo = function() {

    console.log("*** BLOCK INFO ***");
    console.log(`ID: ${this._id}`);
    console.log("HASH:" + this.hash);
};

module.exports = Block;