import fastify from "fastify";
import { prisma } from "./lib/prisma";
import { z } from "zod";
export const app = fastify();

app.post("/users", async (req, res) => {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { name, email, password } = registerBodySchema.parse(req.body);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password_hash: password,
    },
  });

  return res.status(201).send(user);
});

