var Blockchain = function(title) {

    this.blockCollection    = [];
    this.initDate           = new Date(); 
    this.title              = title;
};

Blockchain.prototype.addBlock = function(block) {
    
    // java
    // Int collection = new Int(10);
    // collection[0] = 1;
    // collection[1] = 10;
    // collection[20] = 1;

    // ArrayList<Int> collection = new ArrayList<Int>();
    // collection.add(10);
    this.blockCollection.push(block);
};


Blockchain.prototype.getInfo = function() {
    return "Blockchain : " + this.title + " created on " + this.initDate;
}


module.exports = Blockchain;