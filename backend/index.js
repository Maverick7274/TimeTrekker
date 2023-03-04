const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./Routes/userRoute');

connectDB();

app.use(express.json());


const PORT =  process.env.PORT || 4000;



app.use("/auth", router);



app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}!`);
    }
);