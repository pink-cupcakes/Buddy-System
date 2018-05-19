const db = require('../db');

const Schema = db.Schema;
const ObjectId = Schema.ObjectId;

const Person = new Schema({
  firstName: { type: String, default: '', lowercase: true, required: true },
  lastName: { type: String, default: '', lowercase: true, required: true },
  contact: {
    phoneNumber: { type: [Number], required: true },
    email: { type: String, required: true },
  },
  household: { type: ObjectId, required: true },
  buddyHosts: {
    1: { type: ObjectId },
    2: { type: ObjectId },
    3: { type: ObjectId },
  },
  buddyGuests: { type: [ObjectId] },
});

