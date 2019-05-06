var https = require('https');  
module.exports = 
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

