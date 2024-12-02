export interface Course {
  name: string;
  slug: string;
  icon: string;
  specializations?: string[];
}

export interface Subject {
  name: string;
  code: string;
  resources: Resource[];
}

export interface Resource {
  name: string;
  type: 'notes' | 'book' | 'syllabus';
  url: string;
}