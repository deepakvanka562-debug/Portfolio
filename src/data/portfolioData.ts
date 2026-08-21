import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Deepak Vanka',
    role: 'Software Engineer | AI/ML Developer | Full-Stack Developer',
    headline: 'Software Engineer | AI/ML Developer | Full-Stack Developer',
    bio: 'Building intelligent software systems, AI-powered applications, and real-world technology solutions.',
    email: 'deepakvanka562@gmail.com',
    phone: '+91-9010285289',
    github: 'deepakvanka562-debug',
    githubUrl: 'https://github.com/deepakvanka562-debug',
    linkedin: 'vankadeepak',
    linkedinUrl: 'https://www.linkedin.com/in/vankadeepak/',
    location: 'Kattankulathur, Tamil Nadu, India',
    degree: 'B.Tech – Computer Science and Engineering (AI & ML)',
    institution: 'SRM Institute of Science and Technology',
    duration: '2024 – 2028',
    availableForOpportunities: true,
  },

  aboutText: `Motivated Computer Science (AI & ML) student with a strong interest in software development, problem-solving, and emerging technologies. Passionate about learning new technologies and building practical projects across Software Engineering, AI/ML, Full-Stack, IoT, and Computer Vision.`,

  projects: [
    {
      id: 'ecodrive',
      title: 'EcoDrive / Echo AI Drive',
      subtitle: 'AI-Powered Vehicle Analytics System',
      category: 'AI / Machine Learning / Vehicle Analytics',
      description: 'AI-powered vehicle analytics system for mileage prediction, fuel-efficiency analysis, CO₂ emission analysis, driving behavior analysis, and time-series forecasting.',
      features: [
        'Mileage prediction visualization',
        'Vehicle performance & fuel-efficiency analytics',
        'CO₂ emission trend analysis',
        'Driving behavior pattern analysis',
        'Time-Series forecasting algorithms'
      ],
      techStack: [
        'Python',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'Matplotlib',
        'Machine Learning',
        'Time-Series Forecasting'
      ],
      githubUrl: 'https://github.com/deepakvanka562-debug',
      liveUrl: undefined,
      image: '/images/ecodrive.webp',
      problem: 'Inaccurate manual fuel consumption estimates and lack of automated carbon emission forecasting for modern automotive systems.',
      solution: 'Constructed an ML time-series prediction model integrating Pandas data processing and Scikit-learn regression algorithms to evaluate driving dynamics.',
      contribution: 'Developed feature engineering pipelines, trained regression models, and built Matplotlib/Python visualization dashboards.',
      featured: true,
    },
    {
      id: 'emergency-vehicle',
      title: 'Emergency Vehicle System Prediction',
      subtitle: 'AI Prediction System for Emergency Response',
      category: 'AI / Prediction System',
      description: 'Futuristic emergency-response prediction interface monitoring real-time vehicle data flow, route prediction, and automated alert indicators.',
      features: [
        'Emergency vehicle route prediction',
        'Real-time traffic data flow monitoring',
        'Automated alert & status indicators',
        'AI prediction dashboard panel'
      ],
      techStack: [
        'Python',
        'Machine Learning',
        'Scikit-learn',
        'REST API',
        'React.js'
      ],
      githubUrl: 'https://github.com/deepakvanka562-debug',
      liveUrl: undefined,
      image: '/images/emergency.webp',
      problem: 'High response latency for emergency vehicles traversing congested urban traffic corridors.',
      solution: 'Engineered a prediction module utilizing Machine Learning flow forecasting and live status indicator alerts.',
      contribution: 'Designed predictive algorithms, integrated RESTful APIs, and constructed live status monitoring panels.',
      featured: true,
    },
    {
      id: 'valute-ai',
      title: 'Valute AI',
      subtitle: 'Intelligent AI Application & Asset Analytics',
      category: 'AI Application',
      description: 'Premium AI application module featuring contextual AI interactions, project architecture analysis, and asset evaluation.',
      features: [
        'Contextual AI asset evaluation',
        'Interactive AI functionality panel',
        'Modular system architecture',
        'REST API data exchange'
      ],
      techStack: [
        'React.js',
        'Node.js',
        'Express.js',
        'Python',
        'REST API',
        'Tailwind CSS'
      ],
      githubUrl: 'https://github.com/deepakvanka562-debug',
      liveUrl: undefined,
      image: '/images/valute.webp',
      problem: 'Lack of accessible, real-time AI asset evaluation tools for micro-transactions and software utility metrics.',
      solution: 'Created a modular web engine combining Express REST APIs with client-side reactive state dashboards.',
      contribution: 'Architected system workflow, built Node backend routing, and engineered responsive client UI modules.',
      featured: true,
    },
    {
      id: 'smart-rfid-iot',
      title: 'Smart RFID IoT Attendance System',
      subtitle: 'Embedded IoT & Cloud Attendance Platform',
      category: 'IoT / Embedded Systems',
      description: 'End-to-end IoT attendance monitoring system connecting RFID cards with ESP8266 microcontrollers and Google Cloud backend synchronization.',
      features: [
        'Instant contactless RFID card scanning (RC522)',
        'Wi-Fi micro-controller processing (ESP8266)',
        'Google Apps Script cloud endpoint routing',
        'Automated Google Sheets database recording',
        'Real-time student identification verification'
      ],
      techStack: [
        'ESP8266',
        'RC522 / MFRC522',
        'Arduino C/C++',
        'Google Apps Script',
        'Google Sheets API',
        'Wi-Fi'
      ],
      githubUrl: 'https://github.com/deepakvanka562-debug',
      liveUrl: undefined,
      image: '/images/rfid.webp',
      problem: 'Time-consuming manual attendance calling resulting in data errors and administrative inefficiency in educational environments.',
      solution: 'Constructed an embedded hardware pipeline capturing RFID UID tags, transmitting via ESP8266 Wi-Fi to Google Apps Script endpoints.',
      contribution: 'Programmed ESP8266 microcontroller firmware in C/C++, wired RC522 RFID reader hardware, and authored Apps Script backend webhooks.',
      architectureFlow: [
        'RFID CARD',
        'RC522 READER',
        'ESP8266 WI-FI',
        'GOOGLE APPS SCRIPT',
        'GOOGLE SHEETS CLOUD'
      ],
      iotSimulation: true,
      featured: true,
    },
    {
      id: 'sentiguard-ai',
      title: 'SentiGuard AI',
      subtitle: 'AI-Powered Multilingual Mental Health & Regional Safety Platform',
      category: 'AI / Full-Stack',
      description: 'Developed a full-stack AI-powered web platform for multilingual mental wellness monitoring, sentiment analysis, voice journaling, and real-time scam detection with support for English, Telugu, and Hindi.',
      features: [
        'Text sentiment analysis',
        'Audio sentiment analysis',
        'Voice journaling',
        'AI wellness chatbot',
        'Mood analytics dashboard',
        'Cyber threat detection',
        'Emergency support',
        'Multilingual user experience (English, Telugu, Hindi)',
        'Secure authentication'
      ],
      techStack: [
        'React.js',
        'Vite',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'JavaScript',
        'REST API',
        'React Context API',
        'Recharts',
        'NLP',
        'Speech-to-Text'
      ],
      githubUrl: 'https://github.com/deepakvanka562-debug',
      liveUrl: undefined,
      image: '/images/sentiguard.webp',
      problem: 'Lack of accessible, privacy-centric multilingual mental wellness tracking combined with real-time digital threat detection tailored for regional language speakers in India.',
      solution: 'Engineered a unified Web application integrating speech-to-text NLP sentiment engines, contextual AI chatbots, Recharts mood visualization, and proactive scam detection algorithms.',
      contribution: 'Designed full-stack architecture, developed speech transcription and sentiment analysis pipelines, implemented client state management with React Context API, and built real-time analytics dashboards.',
      featured: false,
    },
    {
      id: 'academic-result-management',
      title: 'Academic Result Management System',
      subtitle: 'Full-Stack Web Application',
      category: 'Full-Stack Web',
      description: 'Developed a full-stack academic management system with a React-based dashboard connected to a MySQL database for managing students, faculty, courses, examinations, and results.',
      features: [
        'Student management',
        'Faculty management',
        'Course management',
        'Examination management',
        'Result management',
        'Dynamic CRUD operations',
        'Search functionality',
        'JWT authentication'
      ],
      techStack: [
        'React.js',
        'Node.js',
        'Express.js',
        'MySQL',
        'JavaScript',
        'Vite',
        'Axios',
        'JWT'
      ],
      githubUrl: 'https://github.com/deepakvanka562-debug',
      liveUrl: undefined,
      image: '/images/academic_result.webp',
      problem: 'Inefficient manual academic grade calculation and fragmented student-faculty records across university departments.',
      solution: 'Constructed an end-to-end management portal with normalized MySQL database structure, secure JWT session management, fast backend routing, and interactive search and reporting tables.',
      contribution: 'Architected relational database schema in MySQL, built Node/Express REST APIs for grade processing and student/faculty CRUD operations, and created responsive dashboard interfaces in React.',
      featured: false,
    }
  ],

  skills: [
    {
      category: 'Programming & CS Core',
      iconName: 'Code2',
      description: 'Core languages, data structures, algorithms, and core computer science fundamentals',
      skills: [
        { name: 'C', level: 90, categoryLabel: 'System Logic & Pointers' },
        { name: 'C++', level: 92, categoryLabel: 'STL, OOP & Algorithmic Problem Solving' },
        { name: 'Java', level: 88, categoryLabel: 'Core Java, OOP & Multithreading (NPTEL Certified)' },
        { name: 'Python', level: 94, categoryLabel: 'AI/ML Pipelines, Data Science & Scripting' },
        { name: 'DSA', level: 88, categoryLabel: 'Data Structures & Algorithms' },
        { name: 'OOP', level: 90, categoryLabel: 'Object-Oriented Software Design' },
        { name: 'DBMS', level: 86, categoryLabel: 'Database Management Systems' },
        { name: 'Operating Systems', level: 84, categoryLabel: 'Process Scheduling, Memory & Linux' },
        { name: 'Computer Networks', level: 82, categoryLabel: 'TCP/IP, HTTP Protocols & REST' },
      ],
    },
    {
      category: 'AI / ML & Computer Vision',
      iconName: 'Brain',
      description: 'Artificial intelligence paradigms, predictive modeling, and computer vision algorithms',
      skills: [
        { name: 'Machine Learning', level: 88, categoryLabel: 'Scikit-learn, Regression & Classification' },
        { name: 'Computer Vision', level: 82, categoryLabel: 'Image Processing & Pattern Detection' },
        { name: 'Data Analysis', level: 90, categoryLabel: 'Pandas, NumPy & Exploratory Analysis' },
        { name: 'Time-Series Forecasting', level: 85, categoryLabel: 'Trend Analysis & Predictive Models' },
        { name: 'NLP', level: 86, categoryLabel: 'Natural Language Processing & Speech-to-Text' },
      ],
    },
    {
      category: 'Web, Databases & IoT',
      iconName: 'Globe',
      description: 'Full-stack web technologies, relational databases, and embedded IoT hardware',
      skills: [
        { name: 'HTML / CSS', level: 94, categoryLabel: 'Semantic Markup & Tailwinds UI' },
        { name: 'JavaScript', level: 90, categoryLabel: 'ES6+ Async Logic & State Management' },
        { name: 'React.js', level: 92, categoryLabel: 'Frontend Component Architecture' },
        { name: 'Node.js', level: 86, categoryLabel: 'Backend Event-Driven Server Runtimes' },
        { name: 'MySQL / SQL', level: 88, categoryLabel: 'Relational Schemas & Query Execution' },
        { name: 'ESP8266', level: 85, categoryLabel: 'Wi-Fi Microcontroller Firmware' },
        { name: 'RFID / RC522', level: 84, categoryLabel: 'Contactless Reader Hardware' },
        { name: 'Google Apps Script', level: 88, categoryLabel: 'Cloud Endpoint Scripting & Webhooks' },
      ],
    },
  ],

  education: [
    {
      id: 'srmist',
      institution: 'SRM Institute of Science and Technology',
      degree: 'B.Tech – Computer Science and Engineering (AI & ML)',
      period: '2024 – 2028',
      location: 'Kattankulathur, Tamil Nadu, India',
      details: [
        'Specializing in Artificial Intelligence, Machine Learning, and Software Systems',
        'Active member of Directorate of Student Affairs (Discipline Domain)',
        'Participating in inter-college technical hackathons and engineering challenges'
      ],
      current: true,
    },
    {
      id: 'narayana',
      institution: 'Narayana Junior College',
      degree: 'Class XII – MPC (Mathematics, Physics, Chemistry)',
      period: '2022 – 2024',
      location: 'Nellore, Andhra Pradesh, India',
      details: [
        'Completed higher secondary education with distinction in core science subjects',
        'Strong focus on analytical problem-solving and mathematics'
      ],
    },
    {
      id: 'champion',
      institution: 'Champion EM High School',
      degree: 'Class X (Secondary School Certificate)',
      period: '2021 – 2022',
      location: 'Sullurupeta, Andhra Pradesh, India',
      details: [
        'Completed foundational schooling with strong academic performance in science and mathematics'
      ],
    },
  ],

  certifications: [
    {
      id: 'cs107-cpp',
      title: 'CS107: C++ Programming',
      issuer: 'Saylor Academy / Open Education',
      date: '8 May 2025',
      duration: '40 Hours',
      certificateId: '4606828046DV',
      description: 'Completed a comprehensive 40-hour course on C++ programming covering object-oriented design, memory management, pointers, and data structures.',
      topics: [
        'C++ Language Fundamentals & Syntax',
        'Object-Oriented Programming (Classes, Inheritance, Polymorphism)',
        'Pointers & Dynamic Memory Management',
        'Standard Template Library (STL)',
        'File I/O Streams & Exception Handling'
      ],
    },
    {
      id: 'nptel-java',
      title: 'Programming in Java',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      date: '12-Week Course',
      duration: '12-Week Intensive',
      certificateId: 'NPTEL24CS-JAVA',
      description: 'Successfully completed an intensive 12-week NPTEL certification covering foundational and advanced Java programming concepts, object-oriented software design, and multi-threaded application development.',
      topics: [
        'Java programming fundamentals',
        'Object-oriented programming (OOP)',
        'Exception handling',
        'Collections framework',
        'File handling & Multithreading',
        'Core Java application development'
      ],
    },
  ],

  achievements: [
    {
      id: 'mechanical-workshop',
      title: 'Mechanical Workshop Competition',
      roleOrResult: 'Secured 3rd Place (Team)',
      category: 'Technical Competition',
      description: 'Secured 3rd place as part of a team in a Mechanical Workshop competition, demonstrating teamwork, practical problem-solving, and technical execution under constraint.',
      highlights: [
        'Team collaboration & task allocation',
        'Hands-on engineering problem solving',
        'Competitive podium recognition'
      ]
    },
    {
      id: 'community-connect',
      title: 'Community Connect Program',
      roleOrResult: 'Student Lead & Organizer',
      category: 'Social Impact & Outreach',
      description: 'Led awareness sessions for school students and coordinated with team members and schools to execute community engagement activities.',
      highlights: [
        'Organized educational workshops for school students',
        'Cross-functional team coordination',
        'Impactful youth engagement and leadership'
      ]
    },
    {
      id: 'dsa-discipline',
      title: 'Directorate of Student Affairs',
      roleOrResult: 'Discipline Domain Active Member',
      category: 'Campus Leadership',
      description: 'Served as an active member of the Discipline Domain, supporting campus discipline, coordinating student activities, and contributing to a safe, organized, and professional campus environment.',
      highlights: [
        'Campus event management & coordination',
        'Maintaining organizational discipline during university events',
        'Fostering a safe and respectful campus culture'
      ]
    }
  ]
};
