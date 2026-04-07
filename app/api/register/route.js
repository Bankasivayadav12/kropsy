import { connectDB } from "@/lib/mongodb";
import User from "../../../models/register";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    await connectDB();

    // check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({
        success: false,
        message: "User already exists",
      });
    }

    // create user
    const user = await User.create({
      name,
      email,
      password,
    });

    return Response.json({
      success: true,
      data: user,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}