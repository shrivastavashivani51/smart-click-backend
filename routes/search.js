import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Parking from '../models/parking.js';

const searchRoute = express.Router();

searchRoute.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const key = req.query.key;
    // console.log(key);

    try {
      const data = await Parking.find({
        $or: [
          {city: { $regex: new RegExp(key), $options: 'i' }},
          {parkName: { $regex: new RegExp(key), $options: 'i' }},
          {street: { $regex: new RegExp(key), $options: 'i' }}
        ]
      });

      if(data)
        res.status(200).json({ status: "Success", message: data });
      else
        res.status(200).json({ status: "Success", message: [] });
    } catch(err) {
      console.log(err);
      res.status(400).json({ status: "Failure", message: "Something went wrong. Please try again!"});
    }
  })
);

export default searchRoute;
