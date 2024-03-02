require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const app = express();
const port = 4000;

const EventRoutes = require("./routes/events");

//middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
//routes
app.use("/events", EventRoutes);

//db connect
mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Example app listening on port ${port}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
