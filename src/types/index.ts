// types/index.ts

// Interface pour un utilisateur
export interface User {
  name: string;
  email: string;
  message: string;
  adress: string;
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
  start_date: string;
  end_date: string;
  description: string;
}