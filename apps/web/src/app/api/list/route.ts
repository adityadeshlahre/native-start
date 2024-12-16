"use server";

import { NextResponse } from "next/server";
import prisma from "@repo/database";

export async function GET(): Promise<NextResponse> {
  try {
    const user = await prisma.user.findMany();
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
