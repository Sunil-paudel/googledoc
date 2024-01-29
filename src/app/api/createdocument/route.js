import { NextResponse } from "next/server";



export const POST = async (request) => {
  console.log("POST method started.");
        const { name, skills, clients, email } = await request.json(); // Include 'email' property
  console.log("Received JSON data:",name, skills, clients, email);

  const newDocumentDetails = new prisma.DocumentDetails({
    name, skills, clients, email // Include 'email' property
  });
  console.log(newDocumentDetails)

}


export const GET = async (request) => {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");
  console.log(email)
  try {
        // Retrieve user-specific appointments based on email
    const DocumentDetails = await Event.find(email && { email });
    return new NextResponse(JSON.stringify(events), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};


