const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function buildExactResumePDF() {
  // Create A4 PDF with 36pt (0.5 in) margins
  const doc = new PDFDocument({
    size: 'A4',
    margin: 36,
    info: {
      Title: 'Deepak Vanka - Resume',
      Author: 'Deepak Vanka',
      Subject: 'Resume',
    },
  });

  const outputPath = path.join(__dirname, 'public', 'resume.pdf');
  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  // Pure black text and lines
  const COLOR_BLACK = '#000000';

  let currentY = doc.page.margins.top;
  const leftMargin = doc.page.margins.left;
  const rightMargin = doc.page.width - doc.page.margins.right;
  const contentWidth = rightMargin - leftMargin;

  // Helper: Section Heading with Underline
  function drawSectionHeader(title) {
    currentY += 6;
    doc
      .fontSize(11)
      .font('Times-Bold')
      .fillColor(COLOR_BLACK)
      .text(title.toUpperCase(), leftMargin, currentY, { characterSpacing: 0.5 });
    
    currentY += 14;
    doc
      .moveTo(leftMargin, currentY)
      .lineTo(rightMargin, currentY)
      .strokeColor(COLOR_BLACK)
      .lineWidth(0.75)
      .stroke();
    
    currentY += 6;
  }

  // --- HEADER (Two Columns) ---
  // Left Column
  doc
    .fontSize(18)
    .font('Times-Bold')
    .fillColor(COLOR_BLACK)
    .text('DEEPAK VANKA', leftMargin, currentY);

  const leftY = currentY + 22;
  doc
    .fontSize(9.5)
    .font('Times-Roman')
    .text('LinkedIn: vankadeepak', leftMargin, leftY)
    .text('GitHub:  deepakvanka562-debug', leftMargin, leftY + 12);

  // Right Column
  const rightX = rightMargin - 180;
  doc
    .fontSize(9.5)
    .font('Times-Roman')
    .text('Email: deepakvanka562@gmail.com', rightX, currentY + 4, { align: 'right', width: 180 })
    .text('Mobile: +91-9010285289', rightX, currentY + 18, { align: 'right', width: 180 });

  currentY = leftY + 28;

  // --- PROFESSIONAL SUMMARY ---
  drawSectionHeader('PROFESSIONAL SUMMARY');

  const summaryText =
    'Motivated Computer Science (AI & ML) student with a strong interest in software development, problem-solving, and emerging technologies. Passionate about learning new technologies and building practical projects to strengthen technical skills. A quick learner with effective communication, teamwork, and analytical abilities, eager to contribute to innovative projects while continuously growing both technically and professionally.';

  doc
    .fontSize(9.5)
    .font('Times-Roman')
    .fillColor(COLOR_BLACK)
    .text(summaryText, leftMargin, currentY, { width: contentWidth, align: 'justify', lineGap: 1.5 });

  currentY += doc.heightOfString(summaryText, { width: contentWidth, lineGap: 1.5 }) + 4;

  // --- EDUCATION ---
  drawSectionHeader('EDUCATION');

  // Edu Item 1
  doc
    .fontSize(9.5)
    .font('Times-Bold')
    .text('•  SRM Institute of Science and Technology (SRM IST)', leftMargin, currentY, { continued: true });
  
  doc
    .font('Times-Roman')
    .text('Kattankulathur, India', rightMargin - 150, currentY, { align: 'right', width: 150 });

  currentY += 12;

  doc
    .fontSize(9.5)
    .font('Times-Italic')
    .text('   B.Tech - Computer Science and Engineering (AI & ML); CGPA: 8.05/10', leftMargin + 10, currentY, { continued: true });

  doc
    .text('2024 – 2028', rightMargin - 150, currentY, { align: 'right', width: 150 });

  currentY += 14;

  // Edu Item 2
  doc
    .fontSize(9.5)
    .font('Times-Bold')
    .text('•  Narayana Junior College', leftMargin, currentY, { continued: true });

  doc
    .font('Times-Roman')
    .text('Nellore, Andhra Pradesh', rightMargin - 150, currentY, { align: 'right', width: 150 });

  currentY += 12;

  doc
    .fontSize(9.5)
    .font('Times-Italic')
    .text('   Class XII - Board of Intermediate Education, Andhra Pradesh; MPC; Percentage: 92.1%', leftMargin + 10, currentY, { continued: true });

  doc
    .text('2022 – 2024', rightMargin - 150, currentY, { align: 'right', width: 150 });

  currentY += 14;

  // Edu Item 3
  doc
    .fontSize(9.5)
    .font('Times-Bold')
    .text('•  Champion EM High School', leftMargin, currentY, { continued: true });

  doc
    .font('Times-Roman')
    .text('Sullurupeta, Andhra Pradesh', rightMargin - 150, currentY, { align: 'right', width: 150 });

  currentY += 12;

  doc
    .fontSize(9.5)
    .font('Times-Italic')
    .text('   Class X - Board of Secondary Education, Andhra Pradesh; Percentage: 83.3%', leftMargin + 10, currentY, { continued: true });

  doc
    .text('2021 – 2022', rightMargin - 150, currentY, { align: 'right', width: 150 });

  currentY += 16;

  // --- SKILLS SUMMARY ---
  drawSectionHeader('SKILLS SUMMARY');

  const skillsData = [
    { cat: 'Languages:', val: 'C, C++, Java, Python, SQL' },
    { cat: 'Web Technologies:', val: 'HTML, CSS, JavaScript, React.js, Node.js, Flask' },
    { cat: 'Databases:', val: 'MySQL, SQLite, MongoDB' },
    { cat: 'Tools:', val: 'Git, GitHub, Visual Studio Code, Postman, Figma' },
    { cat: 'Platforms:', val: 'Linux, Web, Windows' },
  ];

  skillsData.forEach((s) => {
    doc
      .fontSize(9.5)
      .font('Times-Bold')
      .text('•  ', leftMargin, currentY, { continued: true })
      .text(s.cat.padEnd(20, ' '), { continued: true })
      .font('Times-Roman')
      .text(s.val);

    currentY += 12;
  });

  currentY += 4;

  // --- PROJECTS / ACADEMIC EXPERIENCE ---
  drawSectionHeader('PROJECTS / ACADEMIC EXPERIENCE');

  // Project 1: Academic Result Management System
  doc
    .fontSize(9.5)
    .font('Times-Bold')
    .text('•  Academic Result Management System ', leftMargin, currentY, { continued: true });
  
  doc
    .font('Times-Italic')
    .text('(Full Stack Web Application):');

  currentY += 12;

  const resultSubBullets = [
    'Developed a full-stack academic management system with a React-based dashboard connected to a MySQL database for managing students, faculty, courses, examinations, and results.',
    'Implemented dynamic CRUD operations for multiple database tables using reusable components and automated backend routing, enabling efficient data management.',
    'Designed a responsive dashboard with secure JWT authentication, search functionality, and analytics to simplify academic record management.'
  ];

  resultSubBullets.forEach((bullet) => {
    doc
      .fontSize(9)
      .font('Times-Roman')
      .text('o  ', leftMargin + 20, currentY, { continued: true })
      .text(bullet, leftMargin + 32, currentY, { width: contentWidth - 32, align: 'justify', lineGap: 1 });
    
    currentY += doc.heightOfString(bullet, { width: contentWidth - 32, lineGap: 1 }) + 2;
  });

  doc
    .fontSize(9.5)
    .font('Times-Bold')
    .text('   Tech Stack: ', leftMargin + 10, currentY, { continued: true })
    .font('Times-Roman')
    .text('React.js, Node.js, Express.js, MySQL, JavaScript, Vite, React Router, Axios, JWT');

  currentY += 14;

  // Project 2: SentiGuard AI
  doc
    .fontSize(9.5)
    .font('Times-Bold')
    .text('•  SentiGuard AI ', leftMargin, currentY, { continued: true });

  doc
    .font('Times-Italic')
    .text('(AI-Powered Multilingual Mental Health & Regional Safety Platform):');

  currentY += 12;

  const sentiguardSubBullets = [
    'Developed a full-stack AI-powered web platform for multilingual mental wellness monitoring, sentiment analysis, voice journaling, and real-time scam detection with support for English, Telugu, and Hindi.',
    'Built intelligent modules for text and audio sentiment analysis, AI wellness chatbot, mood analytics dashboard, cyber threat detection, emergency support, and multilingual user experience using reusable React components and RESTful APIs.',
    'Designed a responsive and scalable application with secure authentication, theme customization, contextual state management, and interactive data visualization to deliver an intuitive and privacy-focused user experience.'
  ];

  sentiguardSubBullets.forEach((bullet) => {
    doc
      .fontSize(9)
      .font('Times-Roman')
      .text('o  ', leftMargin + 20, currentY, { continued: true })
      .text(bullet, leftMargin + 32, currentY, { width: contentWidth - 32, align: 'justify', lineGap: 1 });
    
    currentY += doc.heightOfString(bullet, { width: contentWidth - 32, lineGap: 1 }) + 2;
  });

  doc
    .fontSize(9.5)
    .font('Times-Bold')
    .text('   Tech Stack: ', leftMargin + 10, currentY, { continued: true })
    .font('Times-Roman')
    .text('React.js, Vite, Tailwind CSS, Node.js, Express.js, JavaScript, REST API, React Context API, Recharts, NLP, Speech-to-Text, AI Sentiment Analysis');

  currentY += 16;

  // --- CERTIFICATIONS ---
  drawSectionHeader('CERTIFICATIONS');

  doc
    .fontSize(9.5)
    .font('Times-Bold')
    .text('•  Programming in Java – NPTEL: ', leftMargin, currentY, { continued: true })
    .font('Times-Roman')
    .text(
      'Successfully completed a 12-week NPTEL certification covering Java programming fundamentals, object-oriented programming (OOP), exception handling, collections, file handling, multithreading, and core Java application development.',
      leftMargin + 14,
      currentY,
      { width: contentWidth - 14, align: 'justify', lineGap: 1 }
    );

  currentY += doc.heightOfString('Successfully completed a 12-week...', { width: contentWidth - 14 }) + 14;

  // --- ACHIEVEMENTS & LEADERSHIP ---
  drawSectionHeader('ACHIEVEMENTS & LEADERSHIP');

  const achList = [
    { title: 'Mechanical Workshop Competition:', text: 'Secured 3rd place as part of a team in a Mechanical Workshop competition, demonstrating teamwork, practical problem-solving, and technical skills.' },
    { title: 'Community Connect Program:', text: 'Led awareness sessions for school students and coordinated with team members and schools to execute community engagement activities.' },
    { title: 'Directorate of Student Affairs (DSA) – Discipline Domain:', text: 'Served as an active member of the Discipline Domain, supporting campus discipline, coordinating student activities, and contributing to a safe, organized, and professional campus environment.' },
  ];

  achList.forEach((ach) => {
    doc
      .fontSize(9.5)
      .font('Times-Bold')
      .text('•  ', leftMargin, currentY, { continued: true })
      .text(ach.title + ' ', { continued: true })
      .font('Times-Roman')
      .text(ach.text, leftMargin + 14, currentY, { width: contentWidth - 14, align: 'justify', lineGap: 1 });

    currentY += doc.heightOfString(ach.title + ' ' + ach.text, { width: contentWidth - 14 }) + 3;
  });

  doc.end();

  writeStream.on('finish', () => {
    console.log('Successfully generated exact matching PDF at public/resume.pdf');
  });
}

buildExactResumePDF();
