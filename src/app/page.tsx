//pages/index.tsx
// import React from "react";
import { Container } from "@mui/material";
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
import ExportDocument from "@/app/createDocument/page";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "./configuration/auth";
// const session =getServerSession(authOptions)

export default  function Home() {
  // const session = await getServerSession(authOptions)
  // console.log(session)
  // const session = useSession();
  // const router = useRouter();

  // if (session.status === 'unauthenticated') {
  //   // Redirect to login if the user is not authenticated
  //   router.push("/dashboard/login");
  //   return null; // You can also display a loading spinner or message here
  // }

  return (
    <Container>
      <ExportDocument />
    </Container>
  );
}
