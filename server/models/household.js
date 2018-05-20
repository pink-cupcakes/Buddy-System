const _ = require('lodash');
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

const HOUSEHOLD_DATA = {
  count: 4,
  0: {
    address: {
      street: '550 w el camino real',
      city: 'sunnyvale',
      state: 'ca',
      zipcode: 94087,
    },
    amenities: {
      bath: true,
      bed: 5,
      clothing: 6,
      firstAid: 8,
      food: 7,
      water: 8,
    },
    maxGuests: 2,
    primaryHost: 1,
    guests: [2, 3],
  },
  1: {
    address: {
      street: '4321 some court',
      city: 'santa clara',
      state: 'ca',
      zipcode: 95051,
    },
    amenities: {
      bath: true,
      bed: 5,
      clothing: 6,
      firstAid: 8,
      food: 7,
      water: 8,
    },
    maxGuests: 2,
    primaryHost: 2,
    guests: [1, 3],
  },
  2: {
    address: {
      street: '4200 tree lane',
      city: 'oakland',
      state: 'ca',
      zipcode: 94577,
    },
    amenities: {
      bath: true,
      bed: 5,
      clothing: 6,
      firstAid: 8,
      food: 7,
      water: 8,
    },
    maxGuests: 1,
    primaryHost: 3,
    guests: [4],
  },
  3: {
    address: {
      street: '50 faraway place',
      city: 'minden',
      state: 'nv',
      zipcode: 71055,
    },
    amenities: {
      bath: true,
      bed: 5,
      clothing: 6,
      firstAid: 8,
      food: 7,
      water: 8,
    },
    maxGuests: 2,
    primaryHost: 1,
    guests: [2, 3],
  },
};

const create = (householdInfo) => {
  // const household = new Household(householdInfo);
  // return household.save();
  const id = HOUSEHOLD_DATA.count;
  HOUSEHOLD_DATA[id] = householdInfo;
  ++HOUSEHOLD_DATA.count;
  return id;
};

const getById = (householdId) => {
  // return Household.findById(householdId).exec();
  return HOUSEHOLD_DATA[householdId];
};

const getAll = () => {
  // return Household.find({}).exec();
  const households = [];
  for (let i = 0; i < HOUSEHOLD_DATA.count; ++i) {
    const obj = Object.assign({ id: i }, HOUSEHOLD_DATA[i])
    households.push(obj);
  }
  return households;
};

const update = (householdId, newData) => {
  // return Household.findByIdAndUpdate(householdId, newData, { upsert: true }).exec();
  _.merge(HOUSEHOLD_DATA[householdId], newData);
  return HOUSEHHOLD_DATA[householdId];
};

module.exports = {
  create,
  getById,
  getAll,
  update,
};

