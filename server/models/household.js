const db = require('../db');

const Schema = db.Schema
const ObjectId = Schema.ObjectId;
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

const create = () => {};

const getById = () => {};

const getAll = () => {};

const update = () => {};

module.exports = {
  create,
  getById,
  getAll,
  update,
};

