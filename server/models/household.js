const _ = require('lodash');
const db = require('../db');

const Schema = db.Schema
const ObjectId = Schema.Types.ObjectId;

const HouseholdSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  houseHold: {type: Number, required: false},
  shelter: {type: Boolean, required: true},
  shelterCount: {type: Number, required: false},
  foodWater: {type: Boolean, required: true},
  foodWaterCount: {type: Number, required: false},
  buddies: [{type:ObjectId, required: false}],
  guests: [{type:ObjectId, required: false}]
});

const HouseholdModel = db.model("Household", HouseholdSchema);

const create = (houseHoldInfo) => {
  const user = new HouseholdModel(houseHoldInfo);
  return user.save();
};

const getById = (id) => HouseholdModel.findById(id).exec();

const getAll = () => HouseholdModel.find({}).exec();

const update = (householdId, newData) => {
  return Household.findByIdAndUpdate(householdId, newData, { upsert: true }).exec();
};

module.exports = {
  create,
  getById,
  getAll,
  update,
};

