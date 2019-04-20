var Block = require('./block');

var Blockchain = function(title) {

    this.blockCollection    = [];
    this.initDate           = new Date(); 
    this.title              = title;

    // create genesis blockl
    this.initGenesisBlock();
};

Blockchain.prototype.getLastBlock = function() {
    
    var lastBlockIndex = this.blockCollection.length - 1;
    return this.blockCollection[lastBlockIndex];
};

Blockchain.prototype.initGenesisBlock = function() {
    this.addBlock(new Block({ from: '', to: '', ammount: ''}))
};

Blockchain.prototype.addBlock = function(block) {
    this.blockCollection.push(block);
};


Blockchain.prototype.mainNewBlock = function(transactionObject) {
    
    var newBlock      = new Block(transactionObject);
    var lastBlockchainBlock = this.getLastBlock();

    // gte the hash from last block
    var lastBlockchainHash  = lastBlockchainBlock.getHash();
    newBlock.setPrevBlockReference(lastBlockchainHash);
    

    // create new block
    // atacje new block to block chain
    // mine new block 
};


Blockchain.prototype.getInfo = function() {
    return "Blockchain : " + this.title + " created on " + this.initDate;
}


module.exports = Blockchain;