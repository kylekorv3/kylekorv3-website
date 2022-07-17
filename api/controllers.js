const Redis = require("ioredis");

const redisClient = new Redis({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
});

const corsConfig = (req, callback) => {
  if (process.env.NODE_ENV === "development") {
    callback(null, { origin: true });
  } else if (
    new RegExp("^https://.*hacknight.site(/.*)*$").test(req.headers["referer"])
  ) {
    callback(null, { origin: true });
  } else {
    callback(new Error("Cors Not Allowed !"), { origin: false });
  }
};

const rateLimiter = (secondsLimit, amountLimit) => async (req, res, next) => {
  const ip = req.headers["x-forward-for"] || req.connection.remoteAddress;
  const [visitAmount] = await redisClient
    .multi()
    .incr(ip)
    .expire(ip, secondsLimit)
    .exec();
  if (visitAmount[1] > amountLimit) {
    res.json({
      errorMsg: "Too many attemps ! Please slow down !",
    });
  } else {
    next();
  }
};

const emailController = (req, res) => {
  const { subject, body } = req.body;
  try {
    redisClient.publish(
      "emailService",
      JSON.stringify({
        to: process.env.EMAIL_RECIEVER,
        subject,
        text: body,
      })
    );
    res.json({
      msg: "Send email successfully !"
    })
  } catch (e) {
    res.json({
      errorMsg: "Failed to send email ! Please try again later !",
    });
  }
};

module.exports = { rateLimiter, emailController, corsConfig };
