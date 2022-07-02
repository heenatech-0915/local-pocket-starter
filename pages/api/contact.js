
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

const apiKey = `${process.env.SENDGRID_API_KEY}`;
console.log("SendGrid key ", apiKey);

export default async (req, res) => {
  // const body = JSON.parse(req.body);

  const message = `
    Name: ${req.body.name}\r\n
    Email: ${req.body.email}\r\n
    PhoneType: ${req.body.email}\r\n
    CustomerType: ${req.body.phonetype}
  `;

  const data = {
    to: req.body.email,
    from: 'heena.jain87@gmail.com',
    subject: `New message from ${req.body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };

  await mail.send(data);

  console.log(res);

  res.status(200).json({ status: 'OK' });
  return  res.status(200);
};

// export default function (req, res) {
//     let nodemailer = require('nodemailer')
    
//    try {
//     const transporter = nodemailer.createTransport({
//         port: 587,
//         host: "smtp.gmail.com",
//         auth: {
//           user: "heena.tech09@gmail.com",
//           pass: "bzrsskmwfxmpxapw",
//         },
//         tls:{
//             rejectUnauthorized:false
//         },
//         secure: false,
//       })
//       const mailData = {
//         from: 'demo email',
//         to: req.body.email,
//         subject: `Message From ${req.body.name}`,
//         text: " | Sent from: " + req.body.email,
//         html: `<div><p>Sent from:
//         ${req.body.email}<br>Name:
//         ${req.body.name}<br>Customer Type:
//         ${req.body.customertype}<br> Phone Type:
//         ${req.body.phonetype}</p></div>`
//       }
//       transporter.sendMail(mailData, function (err, info) {
//         if(err){
//           console.log(err)
//           return res.status(405).end();
         
//         }
//         else {
//           console.log(info);
//           return res.status(200).end();
//         }
          
//       })
      
//     } catch (error) {
      
//         res.json(error);
//         return res.status(500).send('Internal Server Error.');
//       }
//   }
  