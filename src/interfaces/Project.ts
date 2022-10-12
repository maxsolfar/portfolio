export interface ProjectListProps {
  projects: Project[];
}

export interface ProjectDetail {
  id: string;
  titleES: string;
  titleEN: string;
  descriptionEN: string;
  descriptionES: string;
  tools: string[];
  deploy: string;
  repository: string;
  image: string;
  gallery: string[];
  category: string;
  creationDate: string;
  active: boolean;
  color: string;
}

export interface Project {
  id: string;
  titleES: string;
  titleEN: string;
  descriptionEN: string;
  descriptionES: string;
  tools: string[];
  repository: string;
  deploy: string;
  image: string;
  category: string;
  creationDate: string;
  color: string;
}


 