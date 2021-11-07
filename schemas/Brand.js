import { Mongoose } from "mongoose";

const brandSchema = Mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String
  }
});

const Brand = mongoose.model("Brand", brandSchema);
module.exports = Brand;
