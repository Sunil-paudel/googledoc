// frontend/components/ExportButton.tsx
"use client";
import React from "react";
import { useSession } from 'next-auth/react';

const ExportButton = () => {
  const { data: session } = useSession();
  console.log(session);
  const handleExport = async () => {
    try {
      
      // Trigger the backend API route to perform the export
      const response = await fetch('/api/export', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ session }),
      });

      if (response.ok) {
        console.log("Document exported successfully.");
      } else {
        console.error("Error exporting to Google Docs:", response.statusText);
      }
    } catch (error: any) {
      console.error("Error exporting to Google Docs:", error.message);
    }
  };

  return (<>
    <button onClick={handleExport}>
      Export to Google Docs

    </button>
    <h1>welcome {session?.user?.name}</h1></>
  );
};

export default ExportButton;
