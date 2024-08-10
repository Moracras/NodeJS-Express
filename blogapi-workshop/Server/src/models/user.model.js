"use strict";

const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email must be required."],
      validate: [
        (email) => email.includes("@") && email.includes("."),
        "Email type is correct",
      ],
    },
    password:{
        type:String,
        trim:true,
        required:true,
    },
    firstName:String,
    lastName:String
  },
  {
    collection:'user',
    timestamps:true
  }
);

module.exports = mongoose.model('User',UserSchema)