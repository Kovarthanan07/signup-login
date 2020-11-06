const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },

  last_name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },

  idNo: {
    type: String,
    required: true,
    unique: true,
  },

  createdOn: {
    type: Date,
    default: Date.now,
  },
  password: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    // enum: ["male", "female"],
  },
  role: {
    type: String,
    // enum: ["admin", "manager", "employee"],
  },
});

module.exports = User = mongoose.model("user", UserSchema);
