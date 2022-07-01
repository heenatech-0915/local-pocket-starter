export default function (req, res) {
    let nodemailer = require('nodemailer')
    
   try {
    const transporter = nodemailer.createTransport({
        port: 587,
        host: "smtp.gmail.com",
        auth: {
          user: "heena.tech09@gmail.com",
          pass: "bzrsskmwfxmpxapw",
        },
        tls:{
            rejectUnauthorized:false
        },
        secure: false,
      })
      const mailData = {
        from: 'demo email',
        to: req.body.email,
        subject: `Message From ${req.body.name}`,
        text: " | Sent from: " + req.body.email,
        html: `<div><p>Sent from:
        ${req.body.email}<br>Name:
        ${req.body.name}<br>Customer Type:
        ${req.body.customertype}<br> Phone Type:
        ${req.body.phonetype}</p></div>`
      }
      transporter.sendMail(mailData, function (err, info) {
        if(err){
          console.log(err)
          return res.status(405).end();
         
        }
        else {
          console.log(info);
          return res.status(200).end();
        }
          
      })
      
    } catch (error) {
      
        res.json(error);
        return res.status(500).send('Internal Server Error.');
      }
  }
  