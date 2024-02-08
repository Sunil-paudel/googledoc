import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"; // Import GoogleProvider
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/dashboard/login',
    signOut: '/dashboard/login',
    error: '/dashboard/login',
    verifyRequest: '/dashboard/login',
    newUser: '/dashboard/login'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: "openid profile email https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/documents"
        }
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // async signIn({ account, profile }) {
    //   if (account.provider === "google") {
    //     return profile.email_verified && profile.email.endsWith("@gmail.com")
    //   }
    //   return true;
    // },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      try {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image;
        session.user.accessToken = token.accessToken;

        const { name, email, image } = session.user;
        await prisma.user.upsert({
          where: { email },
          update: { name, email, image },
          create: { name, email, image },
        });
      } catch (error) {
        // Handle errors appropriately, such as logging or returning a specific error response.
        console.error("Error during session creation:", error);
        throw new Error("Session creation failed.");
      }

      return session;
    },
  },
};
