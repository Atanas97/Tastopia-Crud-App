const mongoose = require("mongoose");

const { Schema } = mongoose;

const EventSchema = new Schema(
    {
        img: {
            data: Buffer,
            contentType: String,
            // required: true,
        },
        date:{
            type: Date,
            required: true,
            default: new Date(), // Set a default date
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Event", EventSchema);
