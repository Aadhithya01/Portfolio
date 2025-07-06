
export const portfolioData = {
  name: "Aadhithya R",
  role: "AI Engineer",
  contact: {
    email: "aadhithyaraja180@gmail.com",
    github: "https://github.com/Aadhithya01",
    linkedin: "https://linkedin.com/in/aadhithyar",
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
      "Proactive AI Engineer building smart, scalable, and cloud-native AI systems using modern open-source tools.",
      "Experienced in developing LLM-powered solutions, machine learning workflows, and automated data extraction pipelines.",
      "Passionate about driving business impact through intelligent automation while staying current with the latest in generative AI and open-source innovation.",
      "Designed a production-grade chatbot using Flowise to handle 1,000+ daily user queries related to tax filing, reducing customer support load by 65%.",
      "Developed a pipeline with Tesseract OCR to extract structured data from tax forms, reducing manual data entry workload by up to 80%.",
      "Built and deployed 10+ RESTful APIs to automate tasks like validation, formatting, and data generation."
    ]
  },
  skills: {
    languages: ["Python", "JavaScript", "SQL"],
    frameworks: ["Next.js", "Streamlit", "Flowise"],
    tools: ["Docker", "Tesseract OCR", "Langfuse", "FAISS", "Google AI", "OpenAI", "Git"],
    softSkills: ["Proactive Communication", "Scalable System Design", "Intelligent Automation", "Agile Methodologies"]
  },
  projects: [
    {
      title: "Chat with PDFs",
      description: "Engineered an interactive web app using Python and Streamlit that allows users to query PDF documents in natural language. Integrated open-source Google's Generative AI and FAISS for similarity-based search, delivering 90% accuracy.",
      tech: ["Python", "Streamlit", "Google Generative AI", "FAISS"],
      link: "https://github.com/Aadhithya01",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "document chat"
    },
    {
      title: "Voiceover GPT Bot",
      description: "Built a voice-activated assistant powered by OpenAI's GPT-3.5-turbo for hands-free use cases. Combined Google Speech Recognition with pyttsx3 for real-time speech-to-text and natural-sounding voice replies.",
      tech: ["Python", "OpenAI GPT-3.5", "Google Speech Recognition", "pyttsx3"],
      link: "https://github.com/Aadhithya01",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "voice assistant"
    }
  ],
  experience: [
    {
      role: "AI Engineer",
      company: "Span Technology",
      duration: "Jan 2024 - Present",
      responsibilities: [
        "Designed a production-grade chatbot using Flowise to handle 1,000+ daily user queries related to tax filing, reducing customer support load by 65%.",
        "Integrated a live agent fallback system using open-source tools, improving overall response flow by 30%.",
        "Developed a pipeline with Tesseract OCR to extract structured data from W9, W8, and 1095-C forms, reducing manual data entry by up to 80%.",
        "Dockerized and hosted open-source tools such as Langfuse, Flowise, and Zammad for internal and production systems.",
        "Built and deployed 10+ RESTful APIs for automation tasks including data validation, formatting, and sentiment analysis."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Science & Engineering",
      institution: "Easwari Engineering College",
      duration: "2020 - 2024",
      score: "CGPA: 9.5 / 10.0"
    },
    {
      degree: "Higher Secondary Education",
      institution: "SRV Matriculation Hr. Sec. School",
      duration: "2019 - 2020",
      score: "Percentage: 84%"
    }
  ],
  certifications: [
  ]
};
