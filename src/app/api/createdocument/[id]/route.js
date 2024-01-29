
import { NextResponse } from "next/server";
export const GET = async (request, { params }) => {
    const { id } = params;
  
    try {  
      const docDetails = await DocumentDetails.findById(id);
      console.log(docDetails)
  
      return new NextResponse(JSON.stringify(docDetails), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };
  export const PUT = async (request, { params, body }) => {
    const { id } = params;
    const updateddocdetails = JSON.parse(body);
  
    try {
    
      // Find the event by ID and update it with the new data
      const updatedEvent = await Event.findByIdAndUpdate(id, updateddocdetails, {
        new: true, // Return the updated event
      });
  
      return new NextResponse(JSON.stringify(updateddocdetails), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };