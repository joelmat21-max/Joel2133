
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location: string;
  specialization: string;
  courses: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
