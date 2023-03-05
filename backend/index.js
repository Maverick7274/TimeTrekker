const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const userRouter = require('./Routes/userRoute');
const countdownRouter = require('./Routes/countdownRoute');
const cookieParser = require('cookie-parser');

connectDB();

app.use(express.json());
app.use(cookieParser());


const PORT =  process.env.PORT || 4000;



app.use("/auth", userRouter);
app.use("/countdown", countdownRouter);



app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}!`);
    }
);