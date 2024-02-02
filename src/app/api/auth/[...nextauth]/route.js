import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      scope: "openid profile email https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/documents ",
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
  secret: process.env.NEXTAUTH_SECRET,

  // callbacks: {
  //   async jwt(token, user) {
  //     if (user) {
  //       // If user is signing in, add the Google token to the JWT token
  //       token.accessToken = user.accessToken;

  //     }
  //     return token;
  //   },
  //   async session(session, token) {
  //     // Store the Google token in the session
  //     session.accessToken = token.accessToken;
      
  //     return session;
  //   },
  // },
});

export { handler as GET, handler as POST };
