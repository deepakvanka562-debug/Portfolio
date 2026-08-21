const fs = require('fs');
const path = require('path');

const pdfContent = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /Resources <<
    /Font <<
      /F1 4 0 R
    >>
  >>
  /MediaBox [0 0 612 792]
  /Contents 5 0 R
>>
endobj
4 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
5 0 obj
<< /Length 540 >>
stream
BT
/F1 22 Tf
50 740 Td
(DEEPAK VANKA) Tj
/F1 11 Tf
0 -20 Td
(Computer Science and Engineering - AI & ML) Tj
0 -15 Td
(SRM Institute of Science and Technology | CGPA: 8.05 / 10 | 2024 - 2028) Tj
0 -15 Td
(Email: deepakvanka562@gmail.com | Phone: +91-9010285289) Tj
0 -15 Td
(GitHub: github.com/deepakvanka562-debug | LinkedIn: linkedin.com/in/vankadeepak) Tj

0 -30 Td
/F1 14 Tf
(EDUCATION) Tj
/F1 11 Tf
0 -18 Td
(- B.Tech CSE (AI & ML) - SRM IST (2024 - 2028) | CGPA: 8.05/10) Tj
0 -15 Td
(- Class XII MPC - Narayana Junior College (2022 - 2024) | 92.1%) Tj
0 -15 Td
(- Class X - Champion EM High School (2021 - 2022) | 83.3%) Tj

0 -30 Td
/F1 14 Tf
(FEATURED PROJECTS) Tj
/F1 11 Tf
0 -18 Td
(1. SentiGuard AI - Multilingual Mental Health & Regional Safety Platform) Tj
0 -15 Td
(   React.js, Node.js, Express, Tailwind CSS, Recharts, Speech-to-Text, NLP) Tj
0 -18 Td
(2. Academic Result Management System - Full-Stack Web Application) Tj
0 -15 Td
(   React.js, Node.js, Express, MySQL, Vite, JWT Authentication) Tj

0 -30 Td
/F1 14 Tf
(CERTIFICATIONS & ACHIEVEMENTS) Tj
/F1 11 Tf
0 -18 Td
(- NPTEL: Programming in Java (12-Week Certification)) Tj
0 -15 Td
(- Mechanical Workshop Competition: 3rd Place (Team)) Tj
0 -15 Td
(- Community Connect Program: Student Lead) Tj
0 -15 Td
(- Directorate of Student Affairs: Discipline Domain Member) Tj
ET
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000060 00000 n 
0000000117 00000 n 
0000000244 00000 n 
0000000315 00000 n 
trailer
<<
  /Size 6
  /Root 1 0 R
>>
startxref
920
%%EOF
`;

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'resume.pdf'), pdfContent);
console.log('Successfully regenerated public/resume.pdf with updated links');
