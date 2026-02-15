
import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal,
  Cpu,
  Layers,
  Globe,
  Settings,
  Star,
  GitFork,
  BookOpen
} from 'lucide-react';
import { Project, Skill, Education, Testimonial } from './types.ts';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Pulse', href: '#pulse' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/balakrishnan-2005' },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/balakrishnan-frontend' },
  { name: 'Email', icon: <Mail size={20} />, href: 'mailto:ttf.balakrishnan448@gmail.com' },
];

export const GITHUB_REPOS = [
  {
    name: 'ecommerce-backend',
    description: 'Spring Boot & JPA based e-commerce architecture.',
    stars: 12,
    forks: 4,
    lang: 'Java',
    color: '#b07219'
  },
  {
    name: 'food-order-api',
    description: 'Microservices implementation for food delivery.',
    stars: 8,
    forks: 2,
    lang: 'Java',
    color: '#b07219'
  }
];

export const TERMINAL_COMMANDS = {
  'help': 'Available commands: about, skills, contact, clear, repos',
  'about': 'BALAKRISHNAN A: Java Full Stack Developer focusing on Spring Boot & MVC.',
  'skills': 'Java, Spring Boot, MySQL, REST APIs, HTML/CSS, JavaScript.',
  'contact': 'Email: ttf.balakrishnan448@gmail.com | Phone: +91 9597962593',
  'repos': 'Currently active: ecommerce-backend, food-order-api, portfolio-v2',
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Full-Stack E-commerce Application',
    description: 'Developed RESTful backend APIs using Java and Spring Boot. Implemented MVC architecture with Controller, Service, and Repository layers. Designed and managed MySQL database schemas for products, users, and orders.',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'Spring Data JPA'],
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/balakrishnan-2005',
    category: 'Full Stack'
  },
  {
    id: '2',
    title: 'Online Food Ordering System',
    description: 'Built backend REST APIs for an online food ordering system using Spring Boot. Implemented order management, menu listing, and order status update features.',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/balakrishnan-2005',
    category: 'Backend'
  },
  {
    id: '3',
    title: 'Personal Portfolio Website',
    description: 'Designed and built a personal portfolio website to showcase projects, skills, and achievements. Created a clean and responsive layout using HTML, CSS, and media queries.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/balakrishnan-2005',
    category: 'Frontend'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Java', level: 90, icon: 'java', category: 'Backend' },
  { name: 'Spring Boot', level: 85, icon: 'spring', category: 'Backend' },
  { name: 'MySQL', level: 80, icon: 'database', category: 'Database' },
  { name: 'HTML', level: 95, icon: 'html', category: 'Frontend' },
  { name: 'CSS', level: 90, icon: 'css', category: 'Frontend' },
  { name: 'JavaScript', level: 80, icon: 'js', category: 'Frontend' },
  { name: 'Git & GitHub', level: 85, icon: 'git', category: 'Tools' },
  { name: 'VS Code', level: 90, icon: 'vscode', category: 'Tools' },
];

export const EDUCATION: Education[] = [
  {
    institution: 'J.J College of Engineering and Technology',
    degree: 'BE - Computer Science and Engineering',
    period: '2022 – 2026',
    description: 'Specializing in computer science and engineering principles. Currently pursuing.',
    grade: 'CGPA: 7.9'
  },
  {
    institution: "Government boy's higher secondary school",
    degree: 'Higher Secondary Certificate (HSC)',
    period: '2020 – 2022',
    description: 'Completed higher secondary education in Manappari.',
    grade: 'Percentage: 64%'
  },
  {
    institution: "St.antony's higher secondary school",
    degree: 'Secondary School Leaving Certificate (SSLC)',
    period: '2019 – 2020',
    description: 'Completed primary schooling.',
    grade: 'Percentage: 66%'
  }
];

export const STATS = [
  { label: 'Academic CGPA', value: '7.9', icon: <Settings className="text-blue-500" /> },
  { label: 'Live Projects', value: '3+', icon: <Layers className="text-emerald-500" /> },
  { label: 'Technical Skills', value: '8+', icon: <Cpu className="text-orange-500" /> },
  { label: 'Languages', value: '2', icon: <Globe className="text-purple-500" /> },
];

export const CODE_SNIPPET = `
@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    public ResponseEntity<Order> placeOrder(@RequestBody OrderRequest request) {
        Order savedOrder = orderService.createOrder(request);
        return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public Order getOrderDetails(@PathVariable Long id) {
        return orderService.findOrderById(id);
    }
}
`.trim();

// Fix: Export TESTIMONIALS to resolve the import error in components/TestimonialSlider.tsx
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. S. Karthik",
    role: "Professor, JJCET",
    content: "Balakrishnan has shown remarkable growth in full-stack development. His final year project on e-commerce architecture was outstanding.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karthik"
  },
  {
    name: "Rajesh Chen",
    role: "Senior Engineer, TechCorp",
    content: "A quick learner who is not afraid to dive into complex backend logic. His Spring Boot skills are very solid for a fresher.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh"
  }
];
