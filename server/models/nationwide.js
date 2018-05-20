const _ = require('lodash');
const db = require('../db');

const Schema = db.Schema;
const ObjectId = Schema.Types.ObjectId;

const NationwideSchema = new Schema({
  policyNumber: {type: String, default: new db.Types.ObjectId(), required: true, unique: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  houseHold: [{type: ObjectId, required: false }]
});

const NationwideModel = db.model("Nationwide", NationwideSchema);

const create = ({ firstName, lastName, houseHold }) => {
  const user = new NationwideModel({firstName, lastName, houseHold: houseHold||null});
  return user.save();
};

const findByPolicyNumber = (policyNumber) => NationwideModel.findById(policyNumber).exec();

create({firstName: "david", lastName: "david"})
  .then(({ _id }) => findByPolicyNumber(_id))
  .then((data) => {
    console.log("PERSON found by POLICY NUMBER")
    console.log(data)
  });

module.exports = {
  create,
  findByPolicyNumber
};