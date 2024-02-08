import React from "react";
import { useSession, signOut } from 'next-auth/react';
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const ExportButton = () => {
  const session = useSession();
  const router = useRouter();
  const email = session?.data?.user?.email;
  const name = session?.data?.user?.name;
  const token = session?.data?.user?.accessToken;

  const handleExport = async () => {
    try {
      if (!session || session.status === "unauthenticated") {
        router.push("/dashboard/login");
        return;
      }

      // Send session data to backend
      const response = await fetch("/api/createGoogleDoc", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, token }),
      });

      if (!response.ok) {
        throw new Error('Failed to create Google Doc');
      }

      const responseData = await response.json();
      console.log(responseData)

      // Open the URL in a new tab
      window.open(responseData, '_blank');
    } catch (error) {
      console.error('Error creating or opening Google Doc:', error);
    }
  };

  const logout = () => {
    signOut();
  };

  return (
    <>
      <Button variant="contained" onClick={handleExport}>
        Export to Google Docs
      </Button>
      <Button variant="contained" onClick={logout}>
        Logout
      </Button>
    </>
  );
};

export default ExportButton;
