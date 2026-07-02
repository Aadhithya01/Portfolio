export const portfolioData = {
  name: "Aadhithya R",
  role: "AI Engineer",
  tagline: "Turning complex business problems into scalable, production-grade AI systems.",
  avatarUrl: "https://placehold.co/128x128.png",
  avatarHint: "man portrait",
  location: "Erode, India",
  phone: "+91 95145 82641",
  contact: {
    email: "aadhithyaraja180@gmail.com",
    github: "https://github.com/Aadhithya01",
    linkedin: "https://www.linkedin.com/in/aadhithyar",
    leetcode: "https://leetcode.com/Aadhi01/",
    medium: "https://medium.com/@aadhithyaraja180",
  },
  resumeUrl: "/Portfolio/Aadhithya_Resume.pdf",
  navLinks: [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ],
  about: {
    summary:
      "AI Engineer focused on transforming complex business problems into scalable AI-driven solutions. Passionate about analyzing operational workflows, uncovering inefficiencies, and building intelligent systems that automate repetitive tasks, streamline decision-making, and improve customer experiences. Experienced in developing production-grade LLM applications, machine learning pipelines, intelligent automation systems, and cloud-based AI solutions with a strong emphasis on measurable business impact and long-term maintainability.",
  },
  // Headline numbers used for the animated counter band.
  stats: [
    { value: 80, suffix: "%", label: "Manual effort reduced via OCR + Textract pipelines" },
    { value: 65, suffix: "%", label: "Support tickets cut with a production tax chatbot" },
    { value: 1000, suffix: "+", label: "Daily queries handled in production" },
    { value: 8, suffix: "x", label: "Memory footprint reduced fine-tuning Mistral-7B" },
  ],
  skills: [
    {
      title: "AI / ML & LLMs",
      items: ["Machine Learning", "LLMs", "RAG", "AI Agents", "NLP", "Prompt Engineering", "LangChain", "MCP", "Tesseract OCR", "AWS Textract"],
    },
    {
      title: "Fine-Tuning & Research",
      items: ["HuggingFace", "PEFT", "TRL", "QLoRA", "LoRA", "Mistral 7B"],
    },
    {
      title: "Systems Design",
      items: ["REST API Design", "Microservices", "Request Queuing", "Celery", "Concurrency Management"],
    },
    {
      title: "Open Source Tools",
      items: ["Flowise", "Langflow", "Langfuse", "Chatwoot", "Zammad", "Typebot", "Directus", "Ollama"],
    },
    {
      title: "Languages & Frameworks",
      items: ["Python", "FastAPI", "Streamlit", "REST APIs", "OpenAI SDK", "Anthropic SDK", "LaTeX"],
    },
    {
      title: "Databases & Storage",
      items: ["PostgreSQL", "MongoDB", "FAISS", "PgVector", "Supabase", "SQLite"],
    },
    {
      title: "Cloud & DevOps",
      items: ["AWS (S3, Bedrock, SageMaker)", "Docker", "RunPod", "Git"],
    },
  ],
  experience: [
    {
      role: "Junior AI Engineer",
      company: "SPAN Technology Services Private Ltd.",
      duration: "January 2024 – Present",
      location: "Erode, India",
      highlights: [
        {
          title: "Architected an MCP-Powered Multi-Tool Assistant with Context-Aware Escalation",
          points: [
            "New users struggled to navigate the tax-filing platform even with guided in-app navigation; built an MCP-powered chatbot enabling direct natural-language queries with intent-based tool routing across 10+ internal tax application APIs.",
            "Enriched every request with real-time user and page context via API for personalized, context-aware responses.",
            "Designed auto-escalation to live agents with full conversation history on unresolved queries — improving resolution rate by 30%.",
          ],
        },
        {
          title: "Anything to Return — Automated Multi-Format Return Generation",
          points: [
            "Clients received tax data across disparate formats — PDF, Excel, CSV, Image, Parquet, ORC, JSON, and FIRE — requiring manual filing and consolidation before a return could be prepared.",
            "Led a team of 2 to design and build a system that automatically extracts data from any supported format and generates a structured return, using Celery-based task queuing to handle concurrent processing requests.",
            "Built a validation step allowing users to review the generated return before transmission, ensuring accuracy while eliminating manual data entry.",
          ],
        },
        {
          title: "Engineered a Multi-Engine Document Extraction Pipeline — 80% Manual Effort Reduction",
          points: [
            "Tax forms (W9, W8, W8-BEN, 1095-C, 1042) arrived primarily as image-based PDFs requiring manual data entry.",
            "Built independently tuned extraction endpoints per form type, selecting Tesseract OCR or AWS Textract based on layout complexity.",
            "Implemented Celery-based request queuing to prevent single-user resource monopolization during concurrent multi-file uploads, reducing manual data entry by 80%.",
          ],
        },
        {
          title: "Shipped a Production Tax-Filing Chatbot with an Auto-Retraining Pipeline — 65% Support Reduction",
          points: [
            "Frequent tax regulation updates required manual re-embedding of content into the vector database — time-consuming and error-prone at scale.",
            "Built a Directus-based auto-retraining pipeline detecting content changes and selectively re-embedding only modified chunks, gated through Slack approval.",
            "Deployed an LLM-powered chatbot via Flowise handling 1,000+ daily queries, reducing support tickets by 65%.",
          ],
        },
        {
          title: "Deployed Self-Hosted AI Infrastructure — Eliminated Recurring SaaS Costs",
          points: [
            "Reliance on third-party SaaS tools for chat, support, and automation drove recurring subscription costs at scale.",
            "Self-hosted Flowise, Langfuse, Zammad, Chatwoot, and Typebot via Docker, eliminating third-party SaaS dependency across internal and production environments.",
            "Developed 10+ modular APIs for conversation summarization, sentiment classification, ticket management, and data validation.",
          ],
        },
      ],
    },
  ],
  projects: [
    {
      title: "Multi-Format Automated Tax Return Generator",
      description:
        "An automated pipeline that ingests tax data in any supported format (PDF, Excel, CSV, Image, Parquet, ORC, JSON, FIRE), extracts and validates the data, and generates a transmit-ready return post-payment — replacing manual consolidation. Extraction accuracy and pipeline reliability were validated across sample datasets spanning all 8 supported formats.",
      tech: ["Python", "Celery", "AWS Textract", "FastAPI", "Data Pipelines"],
      link: "https://github.com/Aadhithya01",
    },
    {
      title: "Job Hunt MCP Server & Multi-LLM Client",
      description:
        "An MCP server that automates the end-to-end job search — searching LinkedIn and Indeed simultaneously and scoring listings against a resume via a multi-signal ranking system (ATS score, keyword match, hire probability, seniority and salary fit). Exposes 10 MCP tools (cover-letter generation, resume suggestions, application tracking, side-by-side comparison) plus a companion chat client supporting Anthropic SDK, OpenAI SDK, Gemini, and Ollama.",
      tech: ["MCP", "Anthropic SDK", "OpenAI SDK", "Gemini", "Ollama", "Python"],
      link: "https://github.com/Aadhithya01",
    },
    {
      title: "LLM Fine-Tuning with QLoRA on Mistral 7B",
      description:
        "Fine-tuned Mistral-7B-Instruct using QLoRA (4-bit NF4 quantization + LoRA adapters) on the Alpaca dataset for instruction-following. Implemented the full pipeline from scratch — quantization config, adapter attachment, dataset formatting, and supervised fine-tuning — training only 0.047% of parameters (3.4M of 7.2B), an 8x memory reduction vs. full fine-tuning, with stable loss convergence from 1.33 to 0.85.",
      tech: ["HuggingFace", "PEFT", "TRL", "QLoRA", "LoRA", "Mistral 7B"],
      link: "https://github.com/Aadhithya01",
    },
    {
      title: "Synthetic Customer Data Generator (PostgreSQL + Faker)",
      description:
        "A Python utility that simulates and inserts realistic customer order data into PostgreSQL for testing and development. Structured scalable schemas and auto-populated 100+ diverse records — cutting test-data preparation time by 80% — with secure, asynchronous connectivity via asyncpg and environment-based configuration.",
      tech: ["Python", "PostgreSQL", "Faker", "asyncpg"],
      link: "https://github.com/Aadhithya01",
    },
  ],
  certifications: [
    { title: "AWS Certified AI Practitioner", provider: "Amazon Web Services", year: "2024" },
    { title: "Machine Learning Foundations", provider: "DeepLearning.AI", year: "2024" },
    { title: "Build Your Own Chatbot", provider: "AWS Educate", year: "2024" },
    { title: "Foundation in Programming and Data Science", provider: "IIT Madras", year: "2023" },
  ],
  education: [
    {
      degree: "Bachelor of Computer Science & Engineering",
      institution: "Easwari Engineering College",
      duration: "2020 – 2024",
      score: "CGPA: 9.5",
      honor: "Gold Medalist — Department of Computer Science & Engineering",
    },
  ],
  publications: [
    {
      title: "Docker Build Not Updating? The Build Cache is Probably Why.",
      source: "Medium",
      link: "https://medium.com/@aadhithyaraja180",
    },
    {
      title: "Tired of Re-Embedding Manually? Here's How We Fixed It for Good",
      source: "Medium",
      link: "https://medium.com/@aadhithyaraja180",
    },
  ],
};
