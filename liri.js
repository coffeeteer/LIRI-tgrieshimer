console.log(process.argv);
//At the top of the liri.js file make it so you grab the data from keys.js and store it into a variable to use
var grabbyKey = 

// var open = require('open');
// var request = require('request');
//request('http://www.website.com', function(error, reponse, body){ 
//	if(!error && response.statusCode == 200){
//		console.log(body);
//	}
//});


var request = require('./request');
request.get('keys', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var csv = body;
        // Continue with your processing here.
    }
});



// Make it so liri.js can take in one of the following arguments
// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says