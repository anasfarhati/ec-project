const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'barrak.mohamedanas@gmail.com', 
    pass: 'joyb rcuh voaw nuhx',
  },
});


const sendEmail = async (req, res) => { 
  const { email, subject, message } = req.body;
  console.log (email, subject, message);

  var mailOptions = {
    from: email,
    to: "farhatianas92@gmail.com",
    subject: subject,
    html:`<p>${message}</p>`,
  };

  const info = await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).send({message:error});
    } else {
      res.status(200).send({message:succesfully});
    }
  });
};

module.exports = { sendEmail };