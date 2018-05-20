const axios = require("axios");
// '{"first_name": "David", "last_name": "Peterson", "address": "1539 24th avenue", "mobile_phone": "6283334444", "helpability": {"food_and_water": true, "shelter": true, "transportation": true, "physical_labor": false }}'
// const data = JSON.parse('{"first_name": "David", "last_name": "Peterson", "address": "1539 24th avenue", "mobile_phone": "6283334444", "helpability": {"food_and_water": true, "shelter": true, "transportation": true, "physical_labor": false }}')
// console.log(data)

/*
  policyNumber: { type: ObjectId, default: new db.Types.ObjectId(),  required: true,  unique: true },
  firstName: { type: String, lowercase: true, required: true },
  lastName: { type: String, lowercase: true, required: true },
  contact: {
    phoneNumber: { type: [Number], required: true },
    email: { type: String, required: true },
  },
  dateOfBirth: {
    day: { type: Number, required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
  },
  household: { type: ObjectId, required: true },
  additionalMembers: { type: [ObjectId] },
  buddyHosts: {
    1: { type: ObjectId },
    2: { type: ObjectId },
    3: { type: ObjectId },
  },
  buddyGuests: { type: [ObjectId] },
*/

// const data = { 
//   first_name: 'David',
//   last_name: 'Peterson',
//   address: '1539 24th avenue',
//   contact: {
//     mobile_phone: '6283334444',
//     email: "DavidKumarbai@gmail.com"
//   },
//   dateOfBirth: {
//     day: 16,
//     month: 12,
//     year: 1997
//   },
//   household: ObjectId,
//   additionalMembers: [],
//   helpability:
//    { food_and_water: true,
//      shelter: true,
//      transportation: true,
//      physical_labor: false },
// };

const data = {
  address: {
    street: "1539 24th avenue",
    city: "San Francisco",
    state: "California",
    zipcode: 94122
  },
  geolocation: {
    longitude: 23.22300,
    latitude: -20.00002
  },
  amenities: {
    bath: false,
    bed: 3,
    clothing: 4,
    firstAid: 100,
    food: 200,
    water: 20
  },
  maxGuests: 3
};

axios.post("http://localhost:3000/user_signup", data)
  .catch((error) => console.error("Error while sending POST request to the /user_signup route", error));