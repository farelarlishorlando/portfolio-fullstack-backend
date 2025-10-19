import mongoose from "mongoose";
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  stack: String,
  url: String,
  image: String,
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.model("Project", schema);
