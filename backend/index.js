const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const userRouter = require('./Routes/userRoute');
const countdownRouter = require('./Routes/countdownRoute');
const cookieParser = require('cookie-parser');
const cors = require('cors');

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        credentials: true,
    }
));


const PORT =  process.env.PORT || 4000;



app.use("/auth", userRouter);
app.use("/countdown", countdownRouter);



app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}!`);
    }
);