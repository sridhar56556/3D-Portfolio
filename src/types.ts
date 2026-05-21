export interface Project {
  title: string;
  codename?: string;
  description: string;
  tags: string[];
  codeUrl?: string;
  demoUrl?: string;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[]; // 0 to 100 level
  type: 'frontend' | 'backend' | 'tools';
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}
