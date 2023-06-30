const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport("SMTP", {
    service: 'Gmail',
    auth: {
        user: 'testingnodetesting@gmail.com',
        pass: 'mikeisthebest'
    }
});

let mailOptions = {
    from: 'testingnodetesting@gmail.com',
    to: 'mikethemerchant@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log('Email sent!');
    }
});

// this still needs work.