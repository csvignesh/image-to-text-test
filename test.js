var lib = require('image-to-text');

var file = { name: 'iphone.png'};

lib.getKeywordsForImage(file).then(function(keywords){
    console.log(keywords);
}).fail(function(data){
    console.log('Failed!!');
    console.log(data);
});