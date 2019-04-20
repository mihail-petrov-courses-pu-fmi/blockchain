var crypto = require('crypto-js');

var util = {

    generateBlockId : function() {

        var getTime = (new Date()).getTime();   // string in miliseconds
        return crypto.SHA256(getTime);          // hash 
    },

    hashBlockContent : function(message) {
        return crypto.SHA256(message);
    }
};


module.exports = util;