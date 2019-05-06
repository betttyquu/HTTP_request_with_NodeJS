var https = require('https');    
function getHTML (options, callback) {
  var result = ''
  https.get(options, function (response) {
    response.on('data',function(data){
      result += data   
    });
    response.on('end', function() {
      callback(result)
    console.log('Response stream complete.');
    });
  })

}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
function printHTML (html) {
  console.log(html);
}
getHTML(requestOptions, printHTML);

