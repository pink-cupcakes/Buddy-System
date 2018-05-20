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

const create = (personInfo) => {
  const person = new Person(personInfo);
  return person.save();
};

const getByPolicyNumber = (policyNumber) => {
  return Person.find({ policyNumber: db.Types.ObjectId(policyNumber) }).exec();
};

const getAll = () => {
  return Person.find({}).exec();
};

const update = (policyNumber, newData) => {
  return Person.findOneAndUpdate({ policyNumber }, newData, { upsert: true }).exec();
};

module.exports = {
  create,
  getByPolicyNumber,
  getAll,
  update,
};

