var nodemailer = require('nodemailer');

module.exports = {
    sendMail: function(title, html) {
        console.log('sending mail - '+title);
        var transporter = nodemailer.createTransport();

        transporter.sendMail({
            from: 'Image-To-Text-Test@travis.com',
            to: 'vigneshcs.1988@gmail.com',
            subject: title,
            //text: title,
            html: html
        });
    }
}