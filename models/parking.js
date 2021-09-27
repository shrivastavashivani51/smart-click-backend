import mongoose from "mongoose";

const parkingSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: Number, required: true},
  aadhar: {type: Number, required: true},
  pan: {type: String, required: true},
  parkName: {type: String, required: true},
  street: {type: String, required: true},
  city: {type: String, required: true},
  pincode: {type: Number, required: true},
  description: {type: String, required: true},
  twoWheelers: {type: Number, required: true},
  fourWheelers: {type: Number, required: true},
  directions: {type: String, required: true}
});

const ParkingInfo = mongoose.model('ParkingInfo', parkingSchema);

export default ParkingInfo;