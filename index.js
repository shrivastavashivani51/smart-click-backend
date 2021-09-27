import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import contactRoute from './routes/contact.js';
import searchRoute from './routes/search.js';
import registerRoute from './routes/register.js';

dotenv.config();

const app = express();
app.use(express.json())
app.use(express.urlencoded({extrended: true}));
app.use(cors());

app.get('/', (req, res) => {
  res.json({Status: "Success", Message: "Server is Online"})
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ message: err.message });
});

app.use('/contact', contactRoute);
app.use('/search', searchRoute);
app.use('/register', registerRoute);

const URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => { console.log(`Server Online at port: ${PORT}`)}))
  .catch(error => console.log(error.message));
