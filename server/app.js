const express = require('express');
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(express.json());  
app.use(express.static(`${__dirname}./../dist`));

/*
Route Structure
(route and component names are pending finalization)
	user_signup: 
		req: {
			first_name: string,
			last_name: string,
			address: string,
			mobile_phone: string,
			helpability: {
				food_and_water: bool,
				shelter: bool,
				transportation: bool,
				physical_labor: bool
},
status: 
}

		res: {
			status: 200 || 4xx-5xx
		}

	help_me: {
		req: {
			location: taken from device’s tracker and auto-sent (if unable to obtain, location taken from originally input home address
		}

		res: {
			partners: {
				distance1: {
			first_name: string,
			last_name: string,
			address: string,
			mobile_phone: string,
			helpability: {
				food_and_water: bool,
				shelter: bool,
				transportation: bool,
				physical_labor: bool
			}
				}
				distance2: “
				distance3: “
			}
}
	}

	helping: {
		req: {
			ping for people to help
		}

		res: {
			helpees: {
				distance1: {
			first_name: string,
			last_name: string,
			address: string,
			mobile_phone: string
		}
		distance2: “
		distance3: “
			}
		}
	}

*/

// curl -H "Content-Type: application/json" --request POST --data '{"first_name": "David", "last_name": "Peterson", "address": "1539 24th avenue", "mobile_phone": "6283334444", "helpability": {"food_and_water": true, "shelter": true, "transportation": true, "physical_labor": false }}' http://localhost:3000/user_signup

// curl -H "Content-Type: application/json" --data '{"first_name": "David", "last_name": "Peterson", "address": "1539 24th avenue", "mobile_phone": "6283334444", "helpability": {"food_and_water": true, "shelter": true, "transportation": true, "physical_labor": false }}'

// first_name: string,
// last_name: string,
// address: string,
// mobile_phone: string,
// helpability: {
//   food_and_water: bool,
//   shelter: bool,
//   transportation: bool,
//   physical_labor: bool

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