// types/index.ts

import { ReactNode } from "react";

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

export interface KeySkill {
  id: number;
  name: string;
  svg: string;
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

export interface SectionContainerProps {
  backgroundColor?: string;
  sectionPadding?: string;
  children: React.ReactNode;
  className?: string; 
  fullWidth?: boolean
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

export interface Project {
  id: number;
  name: string;
  description: string;
  technos: string;
  imgPath: string;
  link: string;
}

export interface TooltipProps {
  text: string;
  children: ReactNode
  disabled?: boolean; 
}

export interface JobsListProps {
  parentRef: React.RefObject<HTMLDivElement>;
}

export interface Job {
  id: number;
  jobTitle: string;
  companyName: string;
  description: JobDescription;
  startDate: string;
  endDate: string;
}

export interface JobDescription {
  missions: string;
  Environnement: string;
}

export interface JobDetailsProps {
  details: {
    missions: string;
    Environnement: string;
  };
  context?: string;
  seif: boolean; 
}

export interface JobDetailProps {
  title: string;
  content: string;
  showTitle: boolean; 
}
