export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  isCurrent?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  duration: string;
  technologies: string[];
  description: string;
  highlight?: string;
  keyFeatures: string[];
}

export interface CertificationItem {
  title: string;
  provider: string;
  date: string;
}

export const PERSONAL_INFO = {
  name: "Ashwin K K",
  title: "Computer Science & Engineering Student",
  profileImage: "/src/assets/images/ashwin_portrait_1790664382702.jpg",
  phone: "+91 7411674648",
  phoneFormatted: "+91 7411674648",
  phoneLink: "tel:+917411674648",
  email: "ashwinkuriyakose2006@gmail.com",
  emailLink: "mailto:ashwinkuriyakose2006@gmail.com",
  linkedin: "linkedin.com/in/ashwin-k-k-",
  linkedinUrl: "https://linkedin.com/in/ashwin-k-k-",
  github: "ashwinkk-040",
  githubUrl: "https://github.com/ashwinkk-040",
  careerObjective:
    "Motivated Computer Science Engineering student with knowledge of programming, database management, web technologies, and data structures. Seeking an entry-level opportunity to apply technical and problem-solving skills, contribute to real-world projects, and develop professional expertise in a challenging environment.",
  heroSupportingStatement:
    "Motivated Computer Science Engineering student with knowledge of programming, database management, web technologies, and data structures.",
  coreConcepts: [
    "Programming",
    "Database Management",
    "Web Technologies",
    "Data Structures",
    "Problem Solving",
  ],
} as const;

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.E - Computer Science And Engineering",
    institution: "Alva’s Institute Of Engineering Technology",
    location: "Moodbidri, India",
    duration: "2024 - Present",
    isCurrent: true,
  },
  {
    degree: "Pre-University",
    institution: "Janatha Independent College",
    location: "Kundapura, India",
    duration: "2022 - 2024",
    isCurrent: false,
  },
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C", "Java", "Python"],
  },
  {
    title: "Database",
    skills: ["MySQL", "SQL"],
  },
  {
    title: "Core Subjects",
    skills: [
      "Data Structures and Algorithms",
      "DBMS",
      "Object-Oriented Programming",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Eclipse", "Apache Tomcat"],
  },
  {
    title: "Other",
    skills: ["JDBC", "JSP", "Basic Software Development"],
  },
];

export const SOFT_SKILLS: string[] = [
  "Communication",
  "Teamwork & Collaboration",
  "Problem Solving",
  "Quick Learning",
  "Active Listener",
  "Presentation Skills",
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "product-management-system",
    title: "Product Management System",
    duration: "Jan 2026 - May 2026",
    technologies: [
      "Java",
      "JDBC",
      "JSP",
      "Apache Tomcat",
      "MySQL",
      "HTML",
      "CSS",
    ],
    description:
      "Developed a web-based Product Management System for managing product inventory.",
    highlight: "CRUD Operations",
    keyFeatures: [
      "Implemented CRUD operations.",
      "Adding product records.",
      "Viewing product records.",
      "Updating product records.",
      "Deleting product records.",
    ],
  },
  {
    id: "smart-tourism-management-system",
    title: "Smart Tourism Management System",
    duration: "Jul 2025 - Oct 2025",
    technologies: ["MySQL", "SQL", "DBMS"],
    description:
      "Designed a database management system for organizing tourism-related information.",
    keyFeatures: [
      "Created database tables and relationships using primary keys and foreign keys.",
      "Applied SQL queries.",
      "Applied normalization.",
      "Applied relational database concepts.",
      "Designed the system to manage destinations, users, bookings, and tourism-related information.",
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: "Introduction to Cloud Computing",
    provider: "Infosys Springboard",
    date: "Sept 2025",
  },
  {
    title: "Data Structures and Algorithms",
    provider: "Coursera (Microsoft)",
    date: "Sept 2025",
  },
  {
    title: "Database Structures and Management with MySQL",
    provider: "Coursera (Meta)",
    date: "Jan 2026 - Feb 2026",
  },
];
