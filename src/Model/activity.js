const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: [true, "Provide user"],
    },
    param: {
      type: String,
      required: [true, "Provide param"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("userActivity", dataSchema);
