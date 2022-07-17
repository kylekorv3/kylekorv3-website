const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const { emailController, rateLimiter, corsConfig } = require("./controllers");

app.use(helmet());
app.use(cors(corsConfig));
app.use(express.json());
app.post("/contact", rateLimiter(60, 2), emailController);

app.listen(4000, () => {
  console.log(`server listening on port 4000`);
});
