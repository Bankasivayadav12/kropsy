import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    user_type: { type: String, required: true },
    full_name: { type: String, required: true },
    mobile: { type: String, required: true, unique: true },

    village: { type: String, required: true },
    mandal: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true },

    pincode: String,
    address: String,

    latitude: Number,
    longitude: Number,

    profile_photo: String,
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);