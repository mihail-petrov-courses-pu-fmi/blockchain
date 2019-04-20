var blockchain  = require('./src/blockchain');
var block       = require('./src/block');


var UnicoinBlockchain = new blockchain('UniCoin');
// console.log(UnicoinBlockchain.getInfo());

var sampleBlock = new block(null, {
    from    : '1235456465446f54ds6s5f4sd65fds',
    to      : 'sdkugsfstfcdgfyd445a5456676878',
    amount  : 12 
});


sampleBlock.getInfo();