const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/data');
const app = express();
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('DB is connected')
}).catch((err) => {
    console.log('DB is not connected')
});
app.use('/',userRoute)
const port = 5000;
app.listen(port, () => {
    console.log(`app is running on ${port}`)
})