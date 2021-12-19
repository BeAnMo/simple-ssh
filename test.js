
var fs = require('fs');
var expect = require('expect.js');

var SSH = require('./lib/ssh.js');

var config = require('./config/ssh.json');


main = (function(){
    var ssh = new SSH(config);

    ssh.start({
        success: function(){
            console.log('success');
            console.log(arguments);
        },
        fail: function (err) {
            console.log('error', err);
        }
    });
})();