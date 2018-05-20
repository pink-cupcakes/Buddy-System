const axios = require("axios");

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