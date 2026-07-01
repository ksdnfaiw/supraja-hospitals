import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, notes } = body;

    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In a real application, you would configure an email transport here using nodemailer, Resend, SendGrid, etc.
    // For this mock implementation, we'll log the details that would be sent.
    
    console.log("==========================================");
    console.log("Mock Email Sending Triggered:");
    console.log(`To: ${email}`);
    console.log(`Subject: Visit Confirmation - Supraja Hospitals`);
    console.log(`Body: 
      Dear ${name},
      
      Thank you for booking a visit with Supraja Hospitals. 
      We have received your request for an in-person consultation on ${date} during the ${time}.
      
      Your Contact Number: ${phone}
      Additional Notes: ${notes || 'None provided'}
      
      Our team will get in touch with you shortly to confirm the exact time of your appointment.
      
      Best Regards,
      Supraja Hospitals
    `);
    console.log("==========================================");

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return NextResponse.json(
      { success: true, message: 'Visit booked successfully and confirmation email sent.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing book visit request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
