import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    full_name: String,
    mobile: String,
    user_type: String,
    village: String,
    district: String,
    mandal: String,
    state: String,
    address: String,
    latitude: Number,
    longitude: Number,
  },
  { timestamps: true }
);

// prevent overwrite in dev
export default mongoose.models.User || mongoose.model("User", UserSchema);