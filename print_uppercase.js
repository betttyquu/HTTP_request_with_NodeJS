var getHTML = require('../http-functions');
var https = require('https');    

requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  /* Write your code here! */
  console.log(html.toUpperCase());

}

getHTML(requestOptions, printUpperCase);