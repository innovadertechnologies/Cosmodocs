import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, concern } = body;

    // Validate empty fields
    if (!fullName || !phone || !concern) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate 10-digit phone number
    if (!/^\d{10}$/.test(phone)) {
      return NextResponse.json(
        { error: 'Valid 10-digit phone number is required' },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.error('Missing GOOGLE_SCRIPT_URL environment variable');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Forward request to Google Apps Script Web App
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName, phone, concern }),
    });

    if (!response.ok) {
      throw new Error(`Google Script returned ${response.status}`);
    }

    // Wait for the JSON response from the Google Apps Script
    const data = await response.json();
    return NextResponse.json({ success: true, data });
    
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Error submitting form. Please try again later.' },
      { status: 500 }
    );
  }
}
