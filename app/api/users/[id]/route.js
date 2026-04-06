import prisma from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req, context) {
  try {
    // ✅ FIX: await params
    const params = await context.params;

    if (!params?.id) {
      return NextResponse.json(
        { success: false, message: 'User ID required' },
        { status: 400 }
      );
    }

    let userId;
    try {
      userId = BigInt(params.id);
    } catch {
      return NextResponse.json(
        { success: false, message: 'Invalid ID' },
        { status: 400 }
      );
    }

    // ✅ Call PostgreSQL function
    const result = await prisma.$queryRaw`
      SELECT * FROM get_user_by_id(${userId})
    `;

    if (!result || result.length === 0) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    const user = result[0];

    return NextResponse.json({
      success: true,
      data: {
        ...user,
        id: user.id.toString(),
      },
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}