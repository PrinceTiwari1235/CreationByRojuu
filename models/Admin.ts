import mongoose, { Schema, models, model } from "mongoose";

const AdminSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Store hashed password
});

export default models.Admin || model("Admin", AdminSchema);
