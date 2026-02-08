import { neon, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';

// Enable connection pooling for serverless environments
neonConfig.fetchConnectionCache = true;

const connectionString = process.env.DATABASE_URL!;

// 1. Raw SQL Client (Ultra-fast for simple queries)
export const sql = neon(connectionString);

// 2. Prisma Client with Neon Adapter (Type-safe and optimized)
const sqlClient = neon(connectionString);
const adapter = new PrismaNeon(sqlClient);

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
