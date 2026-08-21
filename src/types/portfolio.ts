export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  problem: string;
  solution: string;
  contribution?: string;
  architectureFlow?: string[];
  featured: boolean;
  iotSimulation?: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description?: string;
  skills: {
    name: string;
    level: number;
    categoryLabel?: string;
  }[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  score?: string;
  location: string;
  details?: string[];
  current?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  duration: string;
  certificateId: string;
  description: string;
  topics: string[];
}

export interface Achievement {
  id: string;
  title: string;
  roleOrResult: string;
  category: string;
  description: string;
  highlights?: string[];
}

export interface ContactInfo {
  name: string;
  role: string;
  headline: string;
  bio: string;
  email: string;
  phone: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
  location: string;
  degree: string;
  institution: string;
  duration: string;
  availableForOpportunities: boolean;
}

export interface PortfolioData {
  personalInfo: ContactInfo;
  aboutText: string;
  projects: Project[];
  skills: SkillCategory[];
  education: Education[];
  certifications: Certification[];
  achievements: Achievement[];
}
