import db from "@/lib/prisma";
import bcrypt from "bcrypt";

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const user = await db.user.findUnique({
      where: {
        email: body.email ?? ""
      }
    });

    if (user) {
      return NextResponse.json(
        {
          error: "User already exists"
        },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const newUser = await db.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword
      }
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        user: newUser
      },
      {
        status: 201
      }
    );
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      {
        message: "An error occurred",
        error
      },
      {
        status: 500
      }
    );
  }
}
