export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  location: string;
  degree: string;
  phone: string;
  cvPath: string;
  linkedinUrl: string;
  githubUrl: string;
  gitlabUrl: string;
  portfolioUrl: string;
  summary: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ToolItem {
  name: string;
  imgPath: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}
