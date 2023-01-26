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
//app.use(cors());
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    // Pass to next layer of middleware
    next();
});
app.use(morgan("common"));

//ROUTES
app.use("/api/create-card", cardRoute)
app.use("/api/cards", cardRoute)
app.use("/api/edit-card", cardRoute)
app.use("/api/delete-card", cardRoute)


app.listen(8000, () => console.log("Server is running..."))
