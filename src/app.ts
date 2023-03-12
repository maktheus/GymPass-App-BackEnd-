import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const app = fastify();

prisma.$on("query", (e) => {
    console.log(e);
    }
);

app.get("/", async (request, reply) => {
    return { hello: "world" };
});
