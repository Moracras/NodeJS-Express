'use strict'

const nodemailer = require("nodemailer");

module.exports = function (to, subject, message){
    

// Create Test (fake) account:
// nodemailer.createTestAccount().then((data)=> console.log(data))

// {
//     user: 'jrdsofdjwjua2fxd@ethereal.email',
//     pass: 'eUYEtv4RnpZUa3vf3e',
//     smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
//     imap: { host: 'imap.ethereal.email', port: 993, secure: true },
//     pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
//     web: 'https://ethereal.email'
//   }

//  Connect to MailServer:
// const transporter = nodemailer.createTransport({
//     //SMTP:
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'twila.parker0@ethereal.email',
//         pass: 'y8drsuRTtTrzk51kE4'
//     }
// });
// console.log(transporter);

// transporter.sendMail({

//     from:'jrdsofdjwjua2fxd@ethereal.email',
//     to:'qkadir@clarusway.com',// 'a@b.com,c@d.com'
//     subject:'Hello',
//     text: 'Hello There. How are you?',
//     html:'<b>Hello There.</b> <p>How are you?</p>',
// }, (error, success)=>{
//     success? console.log('SUCCESS', success) : console.log('ERROR', error);;
// }
// )

/* ------------------------------------------------------- */

//* GoogleMail (gmail)
//* Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tavfikkarademir@gmail.com",
    pass: "woom bpzy hewx niku",
  },
});

transporter.sendMail({
    // from: 'tavfikkarademir@gmail.com',
    to:'tavfikkarademir@gmail.com,',
    subject:'Tebrik Mesajı',
    text:'Selamın Aleyküm, Hayırlı Ramazanlar',
    html:'<b>Hello There.</b> <p>How are you?</p>',
}, (error, success) => console.log(success, error));



// //? YandexMail (yandex):
// const transporter = nodemailer.createTransport({
//     service: 'Yandex',
//     auth: {
//         user: 'username@yandex.com',
//         pass: 'password' // your emailPassword
//     }
// })
}