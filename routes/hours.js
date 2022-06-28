const { Router } = require("express");
const express = require("express");
const hours = require("../models/hour");
const router = express.Router();
const Hour = require("../models/hour");

const currentDate = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;
  return today;
};

// getting all
router.get("/", async (req, res) => {
  try {
    const hours = await Hour.find();
    res.json(hours);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//  getting one
router.get("/:id", (req, res) => {});
// creating one
router.post("/", async (req, res) => {
  const hour = new Hour({
    totalTime: req.body.totalTime,
    date: currentDate(),
  });
  try {
    const newHour = await hour.save();
    res.status(201).json(newHour);
  } catch (err) {
    res.status(400).json({ message: error.message });
  }
});
// updating one
// using patch instead of put for making specific changes that the user sends only!!!
router.patch("/:id", (req, res) => {});
// deleting one
router.delete("/:id", (req, res) => {});
module.exports = router;
