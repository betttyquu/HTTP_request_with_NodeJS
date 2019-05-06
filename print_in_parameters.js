var https = require('https');    

function getAndPrintHTML (options) {
  
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step3.html'
      };
    /* Add your code here */
  

    https.get(requestOptions, function (response) {
        response.on('data',function(data){
            console.log(data +=  '\n') + requestOptions;   
        });

        response.on('end', function() {
            console.log('Response stream complete.');
        });
    })
  }
