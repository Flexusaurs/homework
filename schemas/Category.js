import { Mongoose } from "mongoose";

const categorySchema = Mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
