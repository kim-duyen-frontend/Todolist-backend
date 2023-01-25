const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cardRoute = require("./routes/card");

dotenv.config();
mongoose.connect((process.env.MONGODB_URL),() => {
    console.log("Connected to MongoDB");
})
app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

//ROUTES
app.use("/api/create-card", cardRoute)
app.use("/api/cards", cardRoute)
app.use("/api/edit-card", cardRoute)
app.use("/api/delete-card", cardRoute)


app.listen(8000, () => console.log("Server is running..."))