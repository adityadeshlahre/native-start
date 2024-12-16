"use server";

import prisma from "@repo/database";

const signup =
  (name: string, username: string, password: string, email: string) =>
  async () => {
    const user = await prisma.user.create({
      data: {
        // name: name,
        username: username,
        email: email,
        // password: password,
      },
    });

    return user;
  };

export default signup;
