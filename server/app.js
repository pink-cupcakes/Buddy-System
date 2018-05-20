const express = require('express');
const app = express();
const path = require("path");
const { getDistance } = require("./distanceFormula.js");
const db = require("./db.js");
const household = require("./models/household.js");
const nationwide = require("./models/nationwide.js");
const accountSid = process.env.ACC_ID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
// const nationwide = require("./models/nationwide"); // Fake nationwide database
// const NationwideAPI = require("nationwide")(process.env.SECRET_ID, process.env.SECRET_TOKEN) // this has to be nationwide's internal api

const port = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(`${__dirname}/../dist/`));

// app.get("/buddies/:id", (req, resp) => {
//   let catastrophieCoordinates;
//   const { id } = req.body.id;
//   NationwideAPI.getCatastrophieCoordinate()
//     .then(({ coordinates }) => {
//       catastrophieCoordinates = coordinates;
//       return household.find(id);
//     })
//     .then((person) => {
//       const closestBuddy = getClosestBuddy(person.buddies);
//       resp.send(JSON.stringify(closestBuddy));
//       resp.end();
//     });
// });

app.get("/catastrophie", (req, resp) => {
  // WHEN WE HAVE NATIONWIDE DATABASE THIS SHOULD WORK
  // NationwideAPI.GetPeopleWithinDisasterRadius()
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
      body: "Our system has detected a brushfire impacting Sonoma County. Your Nationwide Buddy, Karen, is ready to help you and your family when you have reached safety. She can provide you with food and water, shelter for 5 days, and transportation as needed. Please reach out to her at (415)638-1251 and let her know how she can help.",
      from: "+19519014443",
      to: "+14082429232"
    })
    .then(() => {
      return client.messages.create({
        body: "For more information, visit: nationwide.com/buddies/K4Tfa8yD",
        from: "+19519014443",
        to: "+14082429232"
      })
    })
    .done();

  client.messages
    .create({
      body: "There is a brushfire spreading in Sonoma County. Your Nationwide Buddy, Able, lives in the impacted area and might be in need of your help. Please reach out to her at (415)284-8675.",
      from: "+19519014443",
      to: "+16287778666"
    })
    .then(() => {
      return client.messages.create({
        body: "For more information, visit: nationwide.com/buddies/w2xF31oY",
        from: "+19519014443",
        to: "+16287778666"
      })
    })
    .done();
});

app.post("/user_signup", (req, resp) => {
  // WHEN WE HAVE NATIONWIDE DATABASE THIS SHOULD WORK
  // const requestBody = req.body;
  // const policyNumber = req.body.policyNumber;
  // let personDataFromDB;

  // THIS WILL WORK WHEN THERE IS DATA IN NATIONWIDE DB
  /* nationwide.findByPolicyNumber(policyNumber)
    .then((resp) => {
      const {
        firstName,
        lastName,
        household,
      } = resp;
      const id = resp.policyNumber;

      const personData = {
        firstName,
        lastName,
        household,
        id,
        shelter: requestBody.shelter,
        shelterCount: requestBody.shelterCount,
        foodWater: requestBody.foodWater,
        foodWaterCount: requestBody.foodWaterCount,
      };

      return household.create(personData)
    })
    .then((resp) => household.findAll())
    .then(({ data }) => {
      const personPosition = personDataFromDB.coordinates;

      let closestWithinThreeMiles;
      let closestWithinTwelveMiles;
      let closestWithinFourtyEightMiles;

      for (let i = 0; i < data.length; i++) {
        const buddy = data[i];
        const buddyPosition = buddy.coordinates;
        const distance = getDistance(personPosition, buddyPosition);

        const threeMiles = distance - 3;
        const twelveMiles = distance - 12;
        const fourtyEightMiles = distance - 48;

        if (threeMiles >= 3 && threeMiles < 12) {
          if (!closestWithinThreeMiles || closestWithinThreeMiles.distance > distance) {
            if (buddy.guests < 3) {
              closestWithinThreeMiles = { buddy, distance };
            }
          }
        }

        if (twelveMiles >= 12 && twelveMiles < 48) {
          if (!closestWithinTwelveMiles || closestWithinTwelveMiles.distance > distance) {
            if (buddy.guests < 3) {
              closestWithinTwelveMiles = { buddy, distance };
            }
          }
        }

        if (fourtyEightMiles >= 48 && fourtyEightMiles < 100) {
          if (!closestWithinFourtyEightMiles || closestWithinFourtyEightMiles.distance > distance) {
            if (buddy.guests < 3) {
              closestWithinFourtyEightMiles = { buddy, distance };
            }
          }
        }
      }

      return household.update(
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
    .catch((error) => console.error(error)); */
  resp.end();
});

app.get("*", (req, resp) => {
  resp.sendFile(__dirname, "../dist/index.html");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
