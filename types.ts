
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  category: 'Full Stack' | 'Backend' | 'Frontend' | 'Mobile';
}

export interface Skill {
  name: string;
  level: number; // 1-100
  icon: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
  grade?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

// Fix: Added Testimonial interface to support the TestimonialSlider component
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
