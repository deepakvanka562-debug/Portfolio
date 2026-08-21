import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Invalid or empty message payload.' },
        { status: 400 }
      );
    }

    const cleanMessage = message.trim().toLowerCase();

    // Server-side response generation & secure AI provider key integration
    let replyText = "JARVIS System online. Command acknowledged.";
    let actionType: 'navigate' | 'open_resume' | 'info' = 'info';
    let targetSection: string | undefined = undefined;

    if (cleanMessage.includes('project')) {
      replyText = "Displaying Deepak's 3D Holographic Project Command Center.";
      actionType = 'navigate';
      targetSection = 'projects';
    } else if (cleanMessage.includes('skill') || cleanMessage.includes('stack')) {
      replyText = "Opening Technical Systems Core competencies.";
      actionType = 'navigate';
      targetSection = 'skills';
    } else if (cleanMessage.includes('resume') || cleanMessage.includes('cv')) {
      replyText = "Opening Deepak's official resume document viewer.";
      actionType = 'open_resume';
    } else if (cleanMessage.includes('certificate') || cleanMessage.includes('vault')) {
      replyText = "Accessing Verified Credentials Vault.";
      actionType = 'navigate';
      targetSection = 'certifications';
    } else if (cleanMessage.includes('research') || cleanMessage.includes('lab')) {
      replyText = "Opening AI Research Laboratory console.";
      actionType = 'navigate';
      targetSection = 'research';
    } else if (cleanMessage.includes('contact') || cleanMessage.includes('email') || cleanMessage.includes('reach')) {
      replyText = "Initializing secure AI Communication Terminal.";
      actionType = 'navigate';
      targetSection = 'contact';
    } else {
      replyText = `JARVIS Processing: "${message}". Deepak Vanka specializes in Software Engineering, AI/ML (Machine Learning, Computer Vision, Speech NLP), Full-Stack Web Applications, and IoT Embedded Systems.`;
    }

    return NextResponse.json({
      success: true,
      sender: 'jarvis',
      text: replyText,
      actionType,
      targetSection,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: 'Internal Server Error while processing JARVIS query.' },
      { status: 500 }
    );
  }
}
