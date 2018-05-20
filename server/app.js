const express = require('express');
const app = express();
const path = require("path");
const { getDistance } = require("./calc.js");
const db = require("./db.js");
// const person = require("./models/person.js");
const household = require("./models/household.js");
const accountSid =  process.env.ACC_ID;
const authToken =  process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const port = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(express.json());  
app.use(express.static(`${__dirname}/../dist/`));

// app.get("/buddies/:id", (req, resp) => {
app.get("/buddies/jPs49", (req, resp) => {
  // Look up database for the id param
  const { id } = req.body.id;
  const data = { 
    name: "Jesus Christ", 
    phoneNumber: "777-777-7777", 
    address: "Holy Cave Bethlehem, Israel 77777",
    food: true,
    transportation: true,
    lodging: true
  };

  resp.send(JSON.stringify(data));
  resp.end();
});

app.get("/catastrophie", (req, resp) => {
  client.messages
    .create({
      body: 'http://localhost:3000/buddies/jPs49',
      from: '+19519014443',
      to: '+16287778666'
    })
    .then(message => {
      console.log(message.sid)
      resp.end()
    })
    .done();
});

app.post("/user_signup", (req, resp) => {
  const personData = req.body;

  household.create(personData)
    .then(({ _id })=>{
      return person.create()
    });

  resp.end();
});

app.get("*", (req, resp) => {
  resp.sendFile(__dirname, "../dist/index.html");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
