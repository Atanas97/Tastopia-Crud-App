const express = require("express");
const {
    createEvent,
    getAllEvents,
    getSingleEvent,
    deleteEvent,
    updateEvent,
} = require("../controllers/eventController");
const Event = require("../models/Events");

const router = express.Router();

//get all events
router.get("/", getAllEvents);

//get single event
router.get("/:id", getSingleEvent);

//create a new one
router.post("/", createEvent);

//Update an event
router.patch("/:id", deleteEvent);

//Delete event
router.delete("/:id", updateEvent);

module.exports = router;
