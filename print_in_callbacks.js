var https = require('https');    
// function getHTML (options, callback) {
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step4.html'
      };
    https.get(requestOptions, function (response) {
        response.on('data',function(data){
            console.log(data +=  '\n') + requestOptions + printHTML;   
        });

        response.on('end', function() {
            console.log('Response stream complete.');
        });
    })

  function printHTML (html) {
    console.log(html);
  }
// }
  

