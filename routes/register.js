import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Parking from '../models/parking.js';

const registerRoute = express.Router();

registerRoute.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const userInfo = req.body;
    // console.log(userInfo);

    try {
      const info = new Parking({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        phone: Number(userInfo.phone),
        aadhar: Number(userInfo.aadhar),
        pan: userInfo.pan,
        parkName: userInfo.parkName,
        street: userInfo.street,
        city: userInfo.city,
        pincode: Number(userInfo.pincode),
        description: userInfo.description,
        twoWheelers: Number(userInfo.twoWheelers),
        fourWheelers: Number(userInfo.fourWheelers),
        directions: userInfo.directions 
      });
      await info.save();
      res.status(200).json({status: "Success", message: "You've registered successfully!"});
    } catch (err) {
      console.log(err);
      res.status(400).json({status: "Failure", message: "Something went wrong. Please try again!"});
    }
  })
);

export default registerRoute;

/*
[INFO]: Sample Data for API testing
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "johndoe@gmail.com",
  "phone": "9854354774",
  "aadhar": "667454223698",
  "pan": "CDX654579",
  "parkName": "DX Parking",
  "street": "CP Road",
  "city": "Jabalpur",
  "pincode": "482002",
  "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quisquam minus maxime iusto repudiandae perferendis harum, vel rerum magnam.",
  "twoWheelers": "25",
  "fourWheelers": "35",
  "directions": "https://maps.app.goo.gl/sfBZNJBiRTkURZ7H7"
}
*/