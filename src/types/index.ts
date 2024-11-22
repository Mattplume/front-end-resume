// types/index.ts

// Interface pour un utilisateur
export interface User {
  name: string;
  email: string;
  message: string;
}

// Interface pour une compétence
export interface Skill {
  id: number;
  name: string;
}

// Interface pour une expérience professionnelle
export interface WorkExperience {
  id: number;
  position: string;
  company: string;
  dates: string;
  description: string;
}