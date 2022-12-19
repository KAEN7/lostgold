const express = require("express");
const cors = require("cors");
const webhook = require("./webhook");
const app = express();
const port = 8080;

app.use(cors());
app.use("/webhook", webhook());
app.listen(port, () => console.log(`Listening on port ${port}`));

export {};
