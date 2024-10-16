import { PrismaClient } from "@prisma/client";
import { singleton } from "~/singleton.server";

const prisma = singleton("prisma", getPrismaClient);

function getPrismaClient() {
  const { DATABASE_URL } = process.env;

  if (!DATABASE_URL) {
    throw Error("DB url does not exist!");
  }

  const databaseUrl = new URL(DATABASE_URL);

  const client = new PrismaClient({
    datasources: {
      db: {
        url: databaseUrl.toString(),
      },
    },
  });
  // connect eagerly
  client.$connect();

  return client;
}

export { prisma };
