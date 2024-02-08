import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const { name, email, token } = body;

    // Create Google Doc and obtain URL
    const googleDocUrl = await createGoogleDoc(name, email, token);

    return new Response(JSON.stringify(googleDocUrl), {
      status: 202,
    });
  } catch (error) {
    return new Response('Error', {
      status: 500,
    });
  }
}

const createGoogleDoc = async (name: string, email: string, token: string) => {
  try {
    const jpt ="k xa, lorem ipsum"
    // Example API endpoint for creating a Google Doc
    const apiEndpoint = 'https://docs.googleapis.com/v1/documents';

    // Create a new Google Doc with content
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        
        title: `${name} portfolio`,
        
      })
    });
    

    if (!response.ok) {
      throw new Error('Failed to create Google Doc');
    }

    const responseData = await response.json();

    // Assuming the API returns the ID of the created Google Doc
    const googleDocId = responseData.documentId;
    const batchUpdateEndpoint = `https://docs.googleapis.com/v1/documents/${googleDocId}:batchUpdate`;

    const batchUpdateResponse = await fetch(batchUpdateEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        requests: [
          {
            insertText: {
              location: {
                index: 1, // 1 is the index of the beginning of the document
              },
              text: jpt,
            },
          },
        ],
      }),
    });

    if (!batchUpdateResponse.ok) {
      throw new Error('Failed to update Google Doc content');
    }

    // Generate the URL based on the Google Doc ID
    const googleDocUrl = `https://docs.google.com/document/d/${googleDocId}`;

    return googleDocUrl;
  } catch (error :any) {
    console.error("Error creating Google Doc:", error.message);
    throw new Error('Error creating Google Doc');
  }
};
