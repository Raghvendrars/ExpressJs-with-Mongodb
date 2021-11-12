const mongoose = require('mongoose');
const express = require('express');
const app = express();
const DB = 'mongodb+srv://Raghvendrars:Raghav%4026897@cluster0.pqafw.mongodb.net/test';

mongoose.connect(DB).then(() => {
    console.log("Connected");
}).catch((err) => console.log("no connection"));

require('./Student.model');