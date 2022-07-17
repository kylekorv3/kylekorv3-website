const nodemailer = require("nodemailer");
const Redis = require("ioredis");

const emailServer = new Redis({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
});

const emailDeliver = (mailOptions) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_HOST,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const modifiedMailOptions = { ...mailOptions, from: process.env.EMAIL_HOST };
  transporter.sendMail(modifiedMailOptions);
};

emailServer.subscribe("emailService", () => {
  emailServer.on("message", (channel, message) => {
    console.log(`Received ${message} from ${channel}`);
    const mailOptions = JSON.parse(message);
    emailDeliver(mailOptions);
  });
});
