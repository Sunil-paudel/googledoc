import { authOptions } from "@/app/configuration/auth";
import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
