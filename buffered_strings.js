function getAndPrintHTMLChunks () {
    var https = require('https');    
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
      };                           

    
    https.get(requestOptions, function (response) {
        response.on('data',function(data){
            console.log(data +=  '\n');   
        });

        response.on('end', function() {
            console.log('Response stream complete.');
        });
    })
  
  }
