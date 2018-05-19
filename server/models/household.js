const db = require('../db');

const Schema = db.Schema
const ObjectId = Schema.Types.ObjectId;
const Household = db.model('Household', new Schema({
  address: {
    street: { type: String, lowercase: true, required: true },
    city: { type: String, lowercase: true, required: true },
    state: { type: String, lowercase: true, required: true },
    zipcode: { type: Number, required: true },
  },
  geolocation: {
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
  },
  amenities: {
    bath: { type: Boolean },
    bed: { type: Number },
    clothing: { type: Number },
    firstAid: { type: Number },
    food: { type: Number },
    water: { type: Number },
  },
  maxGuests: { type: Number, required: true },
  primaryHost: { type: ObjectId, required: true },
  guests: { type: [ObjectId], required: true },
}));

const create = (householdInfo) => {
  const household = new Household(householdInfo);
  return household.save();
};

const getById = (householdId) => {
  return Household.findById(householdId).exec();
};

const getAll = () => {
  return Household.find({}).exec();
};

const update = (householdId, newData) => {
  return Household.findByIdAndUpdate(householdId, newData, { upsert: true }).exec();
};

module.exports = {
  create,
  getById,
  getAll,
  update,
};

