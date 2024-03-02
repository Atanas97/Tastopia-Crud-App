const Event = require("../models/Events");
const mongoose = require("mongoose");


//get all events
const getAllEvents = async (req, res) => {
    const events = await Event.find({}).sort({ createdAt: -1 });
    res.status(200).json(events);
};

//get single event
const getSingleEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such event!" });
    }

    const event = await Event.findById(id);

    if (!event) {
        return res.status(404).json({ error: "Event not found!" });
    }

    res.status(200).json(event);
};

//create new event
const createEvent = async (req, res) => {
    const { img, title, description, date } = req.body;
    
    //add doc to db
    try {
        const event = await Event.create({ img, title, description,date });
        res.status(200).json(event);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

//delete event
const deleteEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such event!" });
    }

    const event = await Event.findByIdAndDelete({ _id: id });

    if (!event) {
        return res.status(404).json({ error: "Event not found!" });
    }

    res.status(200).json(event);
};
//update event
const updateEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such event!" });
    }

    const event = await Event.findOneAndUpdate(
        { _id: id },
        {
            ...req.body,
        }
    );

    if (!event) {
        return res.status(404).json({ error: "Event not found!" });
    }

    res.status(200).json(event);
};

module.exports = {
    createEvent,
    getAllEvents,
    getSingleEvent,
    deleteEvent,
    updateEvent,
};
