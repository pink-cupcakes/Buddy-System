const express = require('express');
const app = express();
const path = require("path");
const { getDistance } = require("./distanceFormula.js");
const db = require("./db.js");
const household = require("./models/household.js");
const accountSid =  process.env.ACC_ID;
const authToken =  process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const nationwide = require("./models/nationwide");
// const NationwideAPI = require("nationwide")(process.env.SECRET_ID, process.env.SECRET_TOKEN) // this has to be nationwide's internal api

const port = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(express.json());  
app.use(express.static(`${__dirname}/../dist/`));

// app.get("/buddies/:id", (req, resp) => {
app.get("/buddies/jPs49", (req, resp) => {
  const { id } = req.body.id;
  //const data = houseld.find(id)

  //fake data ----------|
  const data = {// <----|
    name: "Elon Musk", 
    phoneNumber: "777-777-7777", 
    address: "Olympus Mons, Mars",
    food: true,
    transportation: true,
    lodging: true
  };

  resp.send(JSON.stringify(data));
  resp.end();
});

app.get("/catastrophie", (req, resp) => {
  // NationwideAPI.GetPeopleWithinDisasterDistance()
  //   .then((people) => {
  //     for (let i = 0; i < people.length; i++) {
  //       const person = people[i];
  //       client.messages
  //         .create({
  //           body: 'The world is ending :( ',
  //           from: '+19519014443',
  //           to: person.phoneNumber
  //         })
  //         .done();
  //     }
  //   })
  //   .then(() => resp.end())
  client.messages
    .create({
      body: "The world is ending :(",
      from: "+19519014443",
      to: "+14082429232"
    })
    .done();
});

app.post("/user_signup", (req, resp) => {
  // const policyNumber = req.body.policyNumber;
  // let personDataFromDB;
  console.log(req.body)

  nationwide.get(policyNumber)
    .then((personData) => {
      return household.create(personData)
    })
    .then((resp) => {
      personDataFromDB = resp;
      return household.findAll()
    })
    .then(({ data }) => {
      const personPosition = personDataFromDB.coordinates;

      let closestWithinThreeMiles;
      let closestWithinTwelveMiles;
      let closestWithinFourtyEightMiles;

      for (let i = 0; i < data.length; i++) {
        const buddy = data[i];
        const buddyPosition = buddy.coordinates;
        const distance = getDistance(personPosition, buddyPosition);

        const threeMiles = distance-3;
        const twelveMiles = distance-12;
        const fourtyEightMiles = distance-48;
        
        if (threeMiles >= 3 && threeMiles < 12) {
          if (!closestWithinThreeMiles || closestWithinThreeMiles.distance > distance) {
            closestWithinThreeMiles = { buddy, distance };
          }
        }
        
        if (twelveMiles >= 12 && twelveMiles < 48) {
          if (!closestWithinTwelveMiles || closestWithinTwelveMiles.distance > distance) {
            closestWithinTwelveMiles = { buddy, distance };
          }
        }

        if (fourtyEightMiles >= 48 && fourtyEightMiles < 100) {
          if (!closestWithinFourtyEightMiles || closestWithinFourtyEightMiles.distance > distance) {
            closestWithinFourtyEightMiles = { buddy, distance };
          }
        }
      }
      return household.addBuddies(
        personDataFromDB._id,
        { 
          closestWithinThreeMiles, 
          closestWithinTwelveMiles, 
          closestWithinFourtyEightMiles
        });
    })
    .then(() => {
      resp.end();
    })
    .catch((error) => console.error(error));
  resp.end();
});

app.get("*", (req, resp) => {
  resp.sendFile(__dirname, "../dist/index.html");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
