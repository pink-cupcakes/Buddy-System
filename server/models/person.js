const db = require('../db');

const Schema = db.Schema;
const ObjectId = Schema.ObjectId;
const Person = db.model('Person', new Schema({
  policyNumber: { type: ObjectId, default: new ObjectId(),  required: true,  unique: true },
  firstName: { type: String, lowercase: true, required: true },
  lastName: { type: String, lowercase: true, required: true },
  contact: {
    phoneNumber: { type: [Number], required: true },
    email: { type: String, required: true },
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

