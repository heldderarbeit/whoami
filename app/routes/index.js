'use strict';

var path = process.cwd();
var RequestHeaderHandler = require(path + '/app/controllers/requestHeaderHandler.server.js');

module.exports = function (app) {
    
    var requestHeaderHandler = new RequestHeaderHandler();
    
    app.route('/')
        .get(requestHeaderHandler.parseRequestHeader);
        
};