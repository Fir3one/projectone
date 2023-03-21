const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsernameSchema = new Schema({
    username: String,
    password: String
})