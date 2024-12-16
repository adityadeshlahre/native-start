/* eslint-disable */
import type { User } from "@prisma/client";

import prisma from "./client";

const DEFAULT_USERS: Partial<User>[] = [
  {
    username: "Tim Apple",
    email: "tim@apple.com",
    // username: "timapple",
    // password: "password",
  },
] as Array<Partial<User>>;

(async () => {
  try {
    await Promise.all(
      DEFAULT_USERS.map((user) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        prisma.user.upsert({
          where: {
            email: user.email!,
          },
          update: {
            ...user,
          },
          create: {
            ...user,
          },
        });
      })
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
