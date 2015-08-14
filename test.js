var lib = require('image-to-text');
var utils = require('./utils');
var file = { name: 'iphone.png'};

//check if the API key still works fine.
lib.getKeywordsForImage(file).then(function(keywords){
    console.log('Passed :)');
    console.log(keywords);
}).fail(function(data){
    //if failure, drop a mail to vics
    console.log('Failed!!');
    console.log(data);
    utils.sendMail('Image To Text Test FAILING!!', data).then(function(){
        process.exit(1);
    }).fail(function(){
        console.log('Failed to send mail');
        process.exit(1);
    });
});