console.log(process.argv);

console.log('this is loaded');
var liri = require('./liri.js');
// exports.twitterKeys = {
//   consumer_key: '3fmRQC5Ah0g6x41QfF4BvI4Ci',
//   consumer_secret: 'IGURwSEPxp1PPItxr5ckb74bdgab4LZtgWJa6MhWmV9td54DTv',
//   access_token_key: '751574405118066688-ctUiwDhaWGXko9Yr79orgmPn1GWJsIl',
//   access_token_secret: 'rRmVCoWzeOT6bGp7Yov2AXYDenjanxtR2C1cI9lp7iHVT',
// }

var http =  require('http');
http.createServer(function(request, response) {
  router.home(request, reponse);
  router.user(request, reponse);
});


var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: '3fmRQC5Ah0g6x41QfF4BvI4Ci',
  consumer_secret: 'IGURwSEPxp1PPItxr5ckb74bdgab4LZtgWJa6MhWmV9td54DTv',
  access_token_key: '751574405118066688-ctUiwDhaWGXko9Yr79orgmPn1GWJsIl',
  access_token_secret: 'rRmVCoWzeOT6bGp7Yov2AXYDenjanxtR2C1cI9lp7iHVT'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});