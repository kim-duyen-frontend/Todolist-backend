const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    createdAt: { type: Date, default: Date.now }
})
let Card = mongoose.model("Card", cardSchema);
module.exports = { Card };
