
export const portfolioData = {
  name: "Aadhithya R",
  role: "AI Engineer",
  avatarUrl: "https://placehold.co/128x128.png",
  avatarHint: "man portrait",
  contact: {
    email: "aadhithyaraja180@gmail.com",
    github: "https://github.com/Aadhithya01",
    linkedin: "https://linkedin.com/in/aadhithyar",
  },
  resumeUrl: "/Aadhithya-Resume.pdf",
  navLinks: [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ],
  about: {
    summary: "Proactive AI Engineer building smart, scalable, and cloud-native AI systems using modern open-source tools. Experienced in developing LLM-powered solutions, machine learning workflows, and automated data extraction pipelines. Passionate about driving business impact through intelligent automation while staying current with the latest in generative AI and open-source innovation"
  },
  skills: {
    languages: ["Python", "R", "SQL"],
    frameworks: ["Langchain", "FastAPI", "TensorFlow", "Keras", "Scikit Learn", "Seaborn", "ggplot2", "Streamlit"],
    tools: ["GitHub", "AWS", "MySQL", "Docker", "Postman", "Matplot", "Pandas", "NumPy", "Sheets", "Lucidchart"],
    softSkills: ["Leadership", "Teamwork"]
  },
  projects: [
    {
      title: "Chat with PDFs",
      description: "Engineered a web application using Python and Streamlit, enabling users to interactively ask questions about uploaded PDF files, reducing document analysis time by 50%. Implemented Google’s Generative AI for natural language understanding and FAISS for efficient similarity search, facilitating intelligent question-answering based on PDF content with 90% accuracy. Optimized user experience by ensuring quick and accurate responses, improving user satisfaction ratings by 40%.",
      tech: ["Python", "Streamlit", "Google Generative AI", "FAISS"],
      link: "https://github.com/Aadhithya01",
    },
    {
      title: "Voiceover GPT Bot",
      description: "Created an interactive voice-activated assistant leveraging OpenAI’s GPT-3.5-turbo model to provide intelligent and context-aware responses, increasing response relevance by 60%. Utilized Google Speech Recognition for accurate speech-to-text conversion and pyttsx3 for natural text-to-speech functionality, delivering a seamless real-time user interaction experience with 95% speech recognition accuracy. Enhanced accessibility and user engagement by enabling hands-free communication, boosting user interaction by 35%.",
      tech: ["Python", "OpenAI GPT-3.5", "Google Speech Recognition", "pyttsx3"],
      link: "https://github.com/Aadhithya01",
    },
    {
      title: "Assignment Generator",
      description: "Developed a comprehensive tool for web scraping and text processing, extracting and rephrasing Wikipedia content using OpenAI’s GPT-3.5-turbo model, increasing content generation efficiency by 70%. Integrated Selenium for automated web browsing and BeautifulSoup for efficient HTML parsing, ensuring accurate content retrieval with a 95% success rate. Leveraged Requests for HTTP requests and included features to save rephrased text into files, facilitating easy content extraction and transformation for academic and research purposes, reducing manual effort by 60%.",
      tech: ["Python", "OpenAI GPT-3.5", "Selenium", "BeautifulSoup"],
      link: "https://github.com/Aadhithya01",
    }
  ],
  experience: [
    {
      role: "Junior AI Engineer",
      company: "SPAN Technology Services Private Ltd",
      duration: "Jan 2024 - Present",
      responsibilities: [
        "Developed an AI chat-bot designed to assist users with tax filing processes in the US. Integrated conversational retrieval memory to maintain context and provide personalized assistance, enhancing overall user experience and operational efficiency.",
        "Drastically reduced the time from manual data entry by implementing AWS Textract to extract data from multi-page PDFs and automatically populate an Excel template. Created an API endpoint using FastAPI, then dockerized it and provided the endpoint to be hosted on a server.",
        "Conducted time series analysis to forecast next month’s website traffic using historical data, thereby optimizing operational planning and resource allocation."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Science & Engineering",
      institution: "Easwari Engineering College",
      duration: "2020 - 2024",
      score: "CGPA: 9.5"
    },
    {
      degree: "Higher Secondary Education",
      institution: "SRV Matriculation Hr. Sec. School Samayapuram",
      duration: "2019 - 2020",
      score: "Percentage: 84%"
    },
    {
      degree: "Secondary Education",
      institution: "SBOA School & Junior College",
      duration: "2017 - 2018",
      score: "Percentage: 83%"
    }
  ],
  certifications: [
    { title: 'Programming and Data science foundation', provider: 'IITM' },
    { title: 'Machine Learning Foundations', provider: 'Deeplearning.AI' },
    { title: 'Build your own Chatbot', provider: 'NPTEL' },
    { title: 'Data analytics with python', provider: 'NPTEL' },
    { title: 'AWS Educate Certification', provider: 'AWS' },
  ],
  leadership: [
    { title: 'Representative (2020-2024)', provider: 'Easwari Rotaract Community' },
    { title: 'Lead (2022-2024)', provider: 'College Coding Club' },
    { title: 'Events Lead (2023-2024)', provider: 'Department Symposium' },
  ],
  publications: [
      { title: 'How to create a legend for a contour plot in matplotlib', source: 'Codespeedy' },
      { title: 'Generate secure random string using Secrets module in Python', source: 'Codespeedy' }
  ]
};
