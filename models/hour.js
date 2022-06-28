const mongoose = require("mongoose");

const currentDate = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return today;
};

const hoursSchema = new mongoose.Schema({
  totalTime: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("Hours", hoursSchema);
