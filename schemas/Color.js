import { Mongoose } from "mongoose";

const colorSchema = Mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Color = mongoose.model("Color", colorSchema);
module.exports = Color;
