import { ReactElement } from 'react';

export interface ExperiencePosition {
  title: string;
  dates: string;
}

export interface Experience {
  company: string;
  companyUrl: string;
  positions: ExperiencePosition[];
  description: string[];
}

export interface ProjectTechology {
  icon?: FunctionComponent<IconProps> | ReactElement;
  url?: string;
  name: string;
}

export interface Project {
  url: string;
  imageUrl?: string;
  repoUrl?: string;
  name: string;
  description: string;
  screenshotUrl?: string;
  technologies?: ProjectTechology[];
}

export type Nullable<T> = T | null;
