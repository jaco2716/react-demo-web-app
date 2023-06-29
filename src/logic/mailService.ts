
// import nodemailer from 'nodemailer';

// export default class MailService {
//   private static instance: MailService;
//   private transporter: nodemailer.Transporter;
//   private constructor() {}
//   //INSTANCE CREATE FOR MAIL
//   static getInstance() {
//       if (!MailService.instance) {
//           MailService.instance = new MailService();
//       }
//       return MailService.instance;
//   }
  
//   async createLocalConnection() {

//     this.transporter = nodemailer.createTransport({
//       host: "mailout.one.com",
//       port: 587,
//       secure: true,
//       auth: {
//         // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//         user: 'demo@wejeo.dk',
//         pass: 'pyvhor-hamrIr-2wemfi'
//       }
//     });
// }
// //SEND MAIL
// async sendMail(

// ) {
//   return await this.transporter
//       .sendMail({ 
//         from: '"Demo Web App" <demo@wejeo.dk>', // sender address
//         to: "jacob.welin@wejeo.dk", // list of receivers
//         subject: "Hello Jacob", // Subject line
//         text: "Here is your email", // plain text body
//         html: "<div><h1>Hello Jacob!</h1><b>Just to show html</b></div>", // html body
//       })
//       .then((info) => {
//         console.log("Message sent: %s", info.messageId);
//           return info;
//       });
// }

//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   //
//   // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
//   //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
//   //       <https://github.com/forwardemail/preview-email>
//   //


//   getTransporter() {
//     return this.transporter;
// }

// }