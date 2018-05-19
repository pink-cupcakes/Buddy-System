const db = require('../db');

const ObjectId = Schema.ObjectId;
const schema = new db.Schema({
  policyNumber: { type: ObjectId, required: true,  unique: true }
  firstName: { type: String, default: '', lowercase: true, required: true },
  lastName: { type: String, default: '', lowercase: true, required: true },
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
});

const Person = db.model('Person', schema);

