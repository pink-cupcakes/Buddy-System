const _ = require('lodash');
const db = require('../db');

const Schema = db.Schema;
const ObjectId = Schema.Types.ObjectId;
const Person = db.model('Person', new Schema({
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
}));

const PERSON_DATA = {
  count: 3,
  1: {
    firstName: 'jesus',
    lastName: 'christ',
    contact: {
      phoneNumber: [911, 123, 4567],
      email: 'jc@heav.en'
    },
    dateOfBirth: {
      day: 25,
      month: 12,
      year: 1,
    },
    household: 4,
    additionalMembers: [],
    buddyHosts: {
      1: 3,
      2: 2,
      3: 1,
    },
    buddyGuests: [2, 3],
  },
  2: {
    firstName: 'alan',
    lastName: 'c',
    contact: {
      phoneNumber: [911, 123, 4567],
      email: 'ac@email.me'
    },
    dateOfBirth: {
      day: 9,
      month: 9,
      year: 1994,
    },
    household: 4,
    additionalMembers: [],
    buddyHosts: {
      1: 3,
      2: 2,
      3: 1,
    },
    buddyGuests: [2, 3],
  },
  3: {
    firstName: 'david',
    lastName: 'k',
    contact: {
      phoneNumber: [911, 123, 4567],
      email: 'dk@email.me'
    },
    dateOfBirth: {
      day: 4,
      month: 20,
      year: 1990,
    },
    household: 4,
    additionalMembers: [],
    buddyHosts: {
      1: 3,
      2: 2,
      3: 1,
    },
    buddyGuests: [2, 3],
  },
};

const create = (personInfo) => {
  // const person = new Person(personInfo);
  // return person.save();
  const id = PERSON_DATA.count;
  PERSON_DATA[id] = personInfo;
  ++PERSON_DATA.count;
  return id;
};

const getByPolicyNumber = (policyNumber) => {
  // return Person.find({ policyNumber: db.Types.ObjectId(policyNumber) }).exec();
  return PERSON_DATA[policyNumber];
};

const getAll = () => {
  // return Person.find({}).exec();
  const persons = [];
  for (let i = 0; i < PERSON_DATA.count; ++i) {
    const obj = Object.assign({ policyNumber: i }, PERSON_DATA[i]);
    persons.push(obj);
  }
  return persons;
};

const update = (policyNumber, newData) => {
  // return Person.findOneAndUpdate({ policyNumber }, newData, { upsert: true }).exec();
  _.merge(PERSON_DATA[policyNumber], newData);
  return PERSON_DATA[policyNumber];
};

module.exports = {
  create,
  getByPolicyNumber,
  getAll,
  update,
};

