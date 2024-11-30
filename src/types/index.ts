// types/index.ts

export interface User {
  name: string;
  email: string;
  message: string;
  adress: string;
}

export interface Skill {
  id: number;
  name: string;
}

export interface WorkExperience {
  id: number;
  position: string;
  company: string;
  start_date: string;
  end_date: string;
  description: string;
}

export interface IntroSkillsProps {
  imageSrc: string;
  altText: string;
  className?: string;
}

export interface PageContainerProps {
  backgroundColor?: string;
  children: React.ReactNode;
  className?: string; 
}

export interface Picture {
  src: string;
  alt: string;
}

export interface ImageComponentProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}
