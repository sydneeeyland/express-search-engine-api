const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    studentId: {
      type: String,
      required: [true, "Provide studentId"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Provide password"],
    },
    studentName: {
      type: String,
      required: [true, "Provide studentName"],
    },
    role: {
      type: String,
      require: [true, "Provide role"]
    },
    restricted: {
      type: Boolean,
      require: [true, "Provide restriction"],
    }
  },
  {
    timestamps: true,
  }
);

userSchema.pre("validate", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("User", userSchema);
