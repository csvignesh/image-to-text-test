var lib = require('image-to-text');
var utils = require('./utils');
var file = { name: 'iphone.png'};

lib.getKeywordsForImage(file).then(function(keywords){
    console.log('Passed :)');
    console.log(keywords);
}).fail(function(data){
    console.log('Failed!!');
    console.log(data);
    utils.sendMail('Image To Text Test FAILING!!', data);
});