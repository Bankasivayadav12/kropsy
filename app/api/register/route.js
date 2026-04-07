import { connectDB } from "@/lib/mongodb";
import User from "../../../models/register";

export async function POST(req) {
  try {
    const body = await req.json();

    await connectDB();

    const user = await User.create(body);

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