const express = require('express');
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(express.json());  
app.use(express.static(`${__dirname}./../dist`));

app.post("/user_signup", (req, resp) => {
  console.log("/user_signup route has been hit");
  console.log("Params are:", req.body);

  const { 
    first_name, 
    last_name, 
    address, 
    mobile_phone, 
    helpability,
  } = req.body;

  const {
    food_and_water,
    shelter,
    transportation,
    physical_labor,
  } = helpability;

  resp.end()
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});