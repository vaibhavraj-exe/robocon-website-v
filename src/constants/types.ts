

export interface Event {
  coverImage: string;
  name: string;
  abstract: string;
  description: string;
  gallery: string[];
}

export interface Project {
  coverImage: string;
  name: string;
  abstract: string;
  description: string;
  gallery: string[];
  dimensions: {
    height: number,
    width: number
  }
}
