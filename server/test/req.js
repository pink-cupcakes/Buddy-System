const axios = require("axios");
// '{"first_name": "David", "last_name": "Peterson", "address": "1539 24th avenue", "mobile_phone": "6283334444", "helpability": {"food_and_water": true, "shelter": true, "transportation": true, "physical_labor": false }}'
// const data = JSON.parse('{"first_name": "David", "last_name": "Peterson", "address": "1539 24th avenue", "mobile_phone": "6283334444", "helpability": {"food_and_water": true, "shelter": true, "transportation": true, "physical_labor": false }}')
// console.log(data)

const data = { first_name: 'David',
  last_name: 'Peterson',
  address: '1539 24th avenue',
  mobile_phone: '6283334444',
  helpability:
   { food_and_water: true,
     shelter: true,
     transportation: true,
     physical_labor: false } };

axios.post("http://localhost:3000/user_signup", data)
  .catch((error) => console.error("Error while sending POST request to the /user_signup route", error));