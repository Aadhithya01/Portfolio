export const portfolioData = {
  name: "Aadhithya",
  role: "AI & Full-Stack Developer",
  contact: {
    email: "aadhithya@example.com",
    github: "https://github.com/aadhithya",
    linkedin: "https://linkedin.com/in/aadhithya",
  },
  resumeUrl: "/Aadhithya-Resume.pdf",
  navLinks: [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
  ],
  about: {
    experienceSnippets: [
      "Developed and deployed scalable web applications using React, Node.js, and Python, focusing on creating robust and user-friendly solutions.",
      "Led a cross-functional team of developers in an agile environment, successfully improving project delivery timelines by over 20% through optimized workflows and clear communication.",
      "Architected and implemented a resilient microservices-based system, which significantly enhanced system resilience, fault tolerance, and scalability.",
      "Integrated advanced machine learning models into production systems to provide highly personalized user experiences and drive user engagement.",
      "Engineered CI/CD pipelines for multiple projects, automating the build, test, and deployment process to ensure higher code quality and faster release cycles."
    ]
  },
  skills: {
    languages: ["JavaScript", "Python", "TypeScript", "Java", "SQL"],
    frameworks: ["React", "Next.js", "Node.js", "Express.js", "Django", "Flask"],
    tools: ["Docker", "Kubernetes", "Git", "Jenkins", "AWS", "Terraform"],
    softSkills: ["Team Leadership", "Agile Methodologies", "Problem Solving", "Strategic Planning", "Public Speaking"]
  },
  projects: [
    {
      title: "AI Portfolio Generator",
      description: "A web application that dynamically generates a professional portfolio from a user's resume data using generative AI for summaries and content structuring.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Genkit AI", "Vercel"],
      impact: "Automated the portfolio creation process, reducing the time required from hours to minutes and enabling users to create professional sites with no coding.",
      link: "https://github.com/aadhithya/ai-portfolio",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "abstract code"
    },
    {
      title: "Real-time Collaborative Whiteboard",
      description: "A web-based whiteboard application that allows multiple users to collaborate in real-time, featuring drawing tools, text, and shape support.",
      tech: ["React", "Node.js", "WebSocket", "Canvas API", "Redis"],
      impact: "Enabled seamless remote collaboration for teams, resulting in a 30% increase in productivity for brainstorming sessions during user testing.",
      link: "https://github.com/aadhithya/collaborative-whiteboard",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "team collaboration"
    },
    {
      title: "E-commerce Recommendation Engine",
      description: "A machine learning model integrated into an e-commerce platform to provide personalized product recommendations based on user behavior.",
      tech: ["Python", "scikit-learn", "Pandas", "Flask", "REST API"],
      impact: "Increased average order value by 15% and improved customer engagement by personalizing the shopping experience.",
      link: "https://github.com/aadhithya/recommendation-engine",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "online shopping"
    }
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      duration: "Jan 2021 - Present",
      responsibilities: [
        "Led the development of a new AI-driven analytics platform, serving over 10,000 daily active users.",
        "Mentored a team of 5 junior developers, fostering their growth and ensuring high-quality code through rigorous reviews.",
        "Collaborated with product managers and designers to translate complex requirements into functional, high-performance features."
      ]
    },
    {
      role: "Software Engineer",
      company: "Digital Solutions Co.",
      duration: "Jun 2018 - Dec 2020",
      responsibilities: [
        "Developed and maintained full-stack features for a large-scale enterprise SaaS application.",
        "Contributed to a 25% reduction in page load times by optimizing front-end performance and refactoring legacy code.",
        "Participated in the complete software development lifecycle, from requirements gathering to deployment and maintenance."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Code Crafters",
      duration: "May 2017 - Aug 2017",
      responsibilities: [
        "Assisted the development team in building new features for a client-facing web application.",
        "Wrote unit and integration tests to ensure code quality and reliability.",
        "Gained hands-on experience with agile development practices and version control systems."
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      duration: "2018 - 2020",
      score: "GPA: 3.9/4.0"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      duration: "2014 - 2018",
      score: "Summa Cum Laude"
    }
  ],
  certifications: [
    {
      title: "AWS Certified Solutions Architect - Associate",
      provider: "Amazon Web Services"
    },
    {
      title: "Certified Kubernetes Application Developer (CKAD)",
      provider: "The Linux Foundation"
    },
    {
      title: "Professional Scrum Master I (PSM I)",
      provider: "Scrum.org"
    }
  ]
};
