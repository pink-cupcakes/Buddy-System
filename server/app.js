const express = require('express');
const app = express();
const path = require("path");
const { getDistance } = require("./calc.js");
const db = require("./db.js");
const person = require("./models/person.js");
const household = require("./models/household.js");

const port = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(express.json());  
app.use(express.static(`${__dirname}./../dist`));

app.get("/catastrophie", (req, resp) => {});

app.post("/user_signup", (req, resp) => {
  db.send(req.body)
    .then(({ data }) => {
      console.log(data.id);
    })
  
  person.create()

  resp.end()
});

app.get("*", (req, resp) => {
  resp.sendFile(__dirname, "../client/static/index.html");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
