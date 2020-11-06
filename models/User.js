const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    firstName : {
      type: String,
      required: true,
    },
    lastName:{
      type: String,
      required: true,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  Address: {
    city: {
      type: String,
    },
    Street: {
      type: String,
    },
    houseNumber: {
      type: String,
    },
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  employeeId: {
    type: String,
    required: true,
    unique: true,
  },
  birthday: {
    type: Date,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  role: {
    type: String,
    enum: ["admin", "manager", "employee"],
  },
});

module.exports = User = mongoose.model("user", UserSchema);
