var path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const dotenv = require("dotenv");
const { response } = require("express");

dotenv.config();
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
const key = process.env.API_KEY;

const app = express();
app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("client"));

app.get("/", function (req, res) {
  res.sendFile(path.dirname(__dirname) + "/client/views/index.html");
});

app.post("/review", async (req, res) => {
  fetch(baseUrl + key + "&lang=auto&url=" + req.body, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
      const newData = await response.json();
      res.send(newData)
  } catch (error) {
    console.log("error", error);
  }
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});
