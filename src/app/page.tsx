// frontend/pages/index.tsx
"use client"
import React from "react";
import { Container } from "@mui/material";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ExportDocument from "@/app/createDocument/page";

export default function Home() {
  const session = useSession();
  const router = useRouter();

  if (session.status === 'unauthenticated') {
    // Redirect to login if the user is not authenticated
    router.push("/dashboard/login");
    return null; // You can also display a loading spinner or message here
  }

  return (
    <Container>
      <ExportDocument />
    
    </Container>
  );
}
