import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const port = process.env.API_PORT;

app.use(cors());
app.use(bodyParser.json());

import prisma from "@repo/database";

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

app.post("/user", async (req: Request, res: Response) => {
  const { username, email } = req.body;
  
  const user = await prisma.user.create({
    data: {
      username,
      email,
    },
  });

  res.json({ user });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
