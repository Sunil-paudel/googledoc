import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getServerSession({  });

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Extract relevant information from the session, e.g., session.accessToken
    const accessToken = session.user?.token;

    // Use the obtained access token to interact with Google APIs and create a document
    const documentId = await createGoogleDocument(accessToken);

    // Return a success response with the documentId
    res.status(200).json({ message: "Google Doc created successfully!", documentId });
  } catch (error: any) {
    console.error("Error creating Google Doc:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Function to create a Google Document
const createGoogleDocument = async (accessToken: string) => {
  // Define the Google Docs API endpoint for creating documents
  const apiUrl = "https://docs.googleapis.com/v1/documents";

  // Content of the document (you can customize this based on your needs)
  const documentContent = {
    title: "My Next.js Document",
    body: {
      content: [
        { paragraph: { elements: [{ textRun: { content: "Hello, this is my Next.js component!" } }] } },
      ],
    },
  };

  // Make a request to the Google Docs API to create the document
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(documentContent),
  });

  if (!response.ok) {
    throw new Error(`Failed to create Google Doc: ${response.statusText}`);
  }

  const responseData = await response.json();

  // Extract the documentId from the response
  const documentId = responseData.documentId;

  return documentId;
};

export default handler;
