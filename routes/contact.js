import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Contact from '../models/contact.js';

const contactRoute = express.Router();

contactRoute.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const userInfo = req.body;
    // console.log(userInfo);

    const info = new Contact({
      name: userInfo.name,
      email: userInfo.email,
      subject: userInfo.subject,
      message: userInfo.message
    });

    try {
      await info.save();
      res.status(200).json({status: "Success", message: "Thank you for your feedback. Have a nice day!"});
    } catch (err) {
      console.log(err);
      res.status(400).json({status: "Failure", message: "Something went wrong. Please try again!"});
    }
  })
);

export default contactRoute;

/*
[INFO] : Sample Data for API testing

{
  "name": "Jogn Doe",
  "email": "johndoe@gmail.com",
  "subject": "feedback",
  "message": "nice work!"
}
*/