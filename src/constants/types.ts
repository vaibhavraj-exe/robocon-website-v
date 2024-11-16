

export interface Event {
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
  shortkey:string;
}

export interface Achievement {
  coverImage: string;
  name: string;
  abstract: string;
  description: string;
  gallery: string[];
  dimensions1:{
    height:number,
    width:number
  }
}
