const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  url: {
    type: String,
    required: [true, "Provide url"],
  },
  header: {
    type: String,
    required: [true, "Provide header"],
  },
  metadata: {
    type: String,
    required: [true, "Provide metadata"],
  },
  visible: {
    type: Boolean,
    required: [true, "Provide visible option"],
  }
});

module.exports = mongoose.model("SearchEngine", dataSchema);
