export interface Project {
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
}

