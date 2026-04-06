import prisma from '../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      user_type,
      full_name,
      mobile,
      village,
      mandal,
      district,
      state,
      pincode,
      address,
      latitude,
      longitude,
      profile_photo,
    } = body;

    // ✅ Basic validation
    if (!user_type || !full_name || !mobile || !village || !mandal || !district || !state) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // ✅ Create user
    const newUser = await prisma.users.create({
      data: {
        user_type,
        full_name,
        mobile,
        village,
        mandal,
        district,
        state,
        pincode,
        address,
        latitude,
        longitude,
        profile_photo,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'User created successfully',
        data: {
          ...newUser,
          id: newUser.id.toString(), // bigint fix
        },
      },
      { status: 201 }
    );

  } catch (error) {
    console.error(error);

    // ✅ Handle duplicate errors
    if (error.code === 'P2002') {
      return NextResponse.json(
        { success: false, message: 'Mobile or Email already exists' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}