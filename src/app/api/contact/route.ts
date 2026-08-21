import { NextRequest, NextResponse } from 'next/server';

// In-memory rate limiting map for contact transmissions
const rateLimitMap = new Map<string, number>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'anonymous';
    const now = Date.now();
    const lastRequest = rateLimitMap.get(ip);

    // Rate limiting: 1 submission per 20 seconds
    if (lastRequest && now - lastRequest < 20000) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please wait 20 seconds before transmitting again.' },
        { status: 429 }
      );
    }
    rateLimitMap.set(ip, now);

    const body = await req.json();
    const { name, email, message } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email address is required.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ error: 'Message must be at least 10 characters long.' }, { status: 400 });
    }

    // Input sanitization (strip dangerous HTML characters)
    const sanitizedName = name.trim().replace(/[<>]/g, '');
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedMessage = message.trim().replace(/[<>]/g, '');

    // Server log (In production, dispatches to Resend/SendGrid using CONTACT_EMAIL_API_KEY)
    console.log(`[CONTACT API TRANSMISSION] From: ${sanitizedName} <${sanitizedEmail}> | Message: ${sanitizedMessage}`);

    return NextResponse.json({
      success: true,
      message: 'Transmission successfully received and logged in system.',
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error while transmitting contact message.' },
      { status: 500 }
    );
  }
}
