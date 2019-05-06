var https = require('https');    
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
      };                           

// function getAndPrintHTMLChunks () {

    
    https.get(requestOptions, function (response) {
        response.on('data',function(data){
          console.log(data + '\n');
        });

        response.on('end', function() {
            console.log('Response stream complete.');
        });
    })
  
//   }
