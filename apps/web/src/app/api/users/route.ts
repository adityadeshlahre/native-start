import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import prisma from "@repo/database";
import { UserSchema } from "@repo/types";

export async function GET(): Promise<NextResponse> {
  const user = await prisma.user.findFirst({});
  return NextResponse.json({ username: user?.username, email: user?.email });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const parsedBody = UserSchema.parse(await req.json());

  const user = await prisma.user.create({
    data: {
      // name: parsedBody.name,
      username: parsedBody.username,
      email: parsedBody.email,
      // password: parsedBody.password,
    },
  });

  return NextResponse.json({ user });
}
