'use strict';

function RequestHeaderHandler () {
	
	this.parseRequestHeader = function (req, res) {
	    
	    // look for the originating IP address in the X-Forwarded-For HTTP header, 
	    // see https://en.wikipedia.org/wiki/X-Forwarded-For
            var IPAddress = req.header('x-forwarded-for') || req.connection.remoteAdress;
        
            var language = req.headers['accept-language'].split(';')[0].split(',')[0];
        
            var os = req.headers['user-agent'].split('(')[1].split(')')[0];
        
            res.send({ 'IP Address':  IPAddress, 'language': language, 'operating system': os });
	};
}

module.exports = RequestHeaderHandler;
