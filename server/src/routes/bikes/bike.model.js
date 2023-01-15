const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema(
  {
    productImages: { type: [String], required: true },
    productName: { type: String, required: true },
    brandName: { type: String, required: true },
    yearOfPurchase: { type: String, required: true },
    model: { type: String, required: true },
    physicalCondition: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    location: { type: String, required: true },
    postedOn: { type: String, required: true },
    type: { type: String, required: true}
  },
  { versionKey: false }
);

const Bike = mongoose.model("bike", bikeSchema);

module.exports = Bike;
