import { Code, Globe, Cloud, Smartphone, LineChart, Wrench, Database, Shield, Zap, Users, Target, CheckCircle } from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Web Development",
    desc: "Build modern, responsive web applications using React, Next.js, and cutting-edge frontend technologies. From landing pages to complex web platforms.",
    image: Globe,
  },
  {
    id: 2,
    title: "Cloud Solutions",
    desc: "Design and deploy scalable cloud infrastructure on AWS, Azure, and GCP. Expert cloud architecture, migration, and DevOps services.",
    image: Cloud,
  },
  {
    id: 3,
    title: "Mobile Development",
    desc: "Native and cross-platform mobile applications for iOS and Android. Beautiful, performant apps that users love.",
    image: Smartphone,
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    desc: "Integrate advanced AI/ML capabilities into your applications. From natural language processing to computer vision and predictive analytics.",
    image: Zap,
  },
  {
    id: 5,
    title: "Custom Software",
    desc: "Tailored software solutions built specifically for your business needs. Full-stack development with modern frameworks and best practices.",
    image: Code,
  },
  {
    id: 6,
    title: "Data Analytics",
    desc: "Transform raw data into actionable insights. Business intelligence, data visualization, and analytics dashboard development.",
    image: LineChart,
  },
  {
    id: 7,
    title: "API Development",
    desc: "RESTful and GraphQL API design and implementation. Secure, scalable backend services with comprehensive documentation.",
    image: Database,
  },
  {
    id: 8,
    title: "DevOps & CI/CD",
    desc: "Automated deployment pipelines, container orchestration with Docker/Kubernetes, and infrastructure as code implementation.",
    image: Wrench,
  },
];

export const approaches = [
  {
    id: 1,
    title: "Discovery & Planning",
    desc: "We begin by understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
    details: "In-depth stakeholder interviews, competitive analysis, and technical feasibility studies",
    image: Target,
  },
  {
    id: 2,
    title: "Agile Development",
    desc: "Our iterative development process ensures regular feedback, rapid prototyping, and flexibility to adapt to changing requirements.",
    details: "Two-week sprints with daily standups, weekly demos, and continuous integration practices",
    image: Users,
  },
  {
    id: 3,
    title: "Quality Assurance",
    desc: "Rigorous testing at every stage - from unit tests to end-to-end testing - ensures your solution works flawlessly.",
    details: "Automated testing frameworks, manual QA review, performance benchmarking, and security audits",
    image: Shield,
  },
  {
    id: 4,
    title: "Deployment & Support",
    desc: "Seamless deployment to production with ongoing maintenance, monitoring, and support to keep your application running smoothly.",
    details: "CI/CD pipelines, zero-downtime deployments, 24/7 monitoring, and dedicated support team",
    image: CheckCircle,
  },
];

export const techStack = {
  Frontend: [
    { name: "React", url: "https://react.dev/", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Next.js", url: "https://nextjs.org/", logo: new URL("../../attached_assets/next logo_1764188505456.png", import.meta.url).href },
    { name: "TypeScript", url: "https://www.typescriptlang.org/", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Vue.js", url: "https://vuejs.org/", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
  ],
  Backend: [
    { name: "Node.js", url: "https://nodejs.org/", logo: new URL("../../attached_assets/node logo_1764188505456.jpg", import.meta.url).href },
    { name: "Express", url: "https://expressjs.com/", logo: new URL("../../attached_assets/express logo_1764188505454.jpg", import.meta.url).href },
    { name: "Python", url: "https://www.python.org/", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "Django", url: "https://www.djangoproject.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" },
    { name: "FastAPI", url: "https://fastapi.tiangolo.com/", logo: new URL("../../attached_assets/fastapi logo_1764188505454.png", import.meta.url).href },
  ],
  Database: [
    { name: "PostgreSQL", url: "https://www.postgresql.org/", logo: new URL("../../attached_assets/postgresql logo_1764188505457.jpg", import.meta.url).href },
    { name: "MongoDB", url: "https://www.mongodb.com/", logo: new URL("../../attached_assets/mongodb logo_1764188505456.png", import.meta.url).href },
    { name: "Redis", url: "https://redis.io/", logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg" },
    { name: "MySQL", url: "https://www.mysql.com/", logo: new URL("../../attached_assets/mysql logo_1764188505456.png", import.meta.url).href },
  ],
  Cloud: [
    { name: "AWS", url: "https://aws.amazon.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Google Cloud", url: "https://cloud.google.com/", logo: new URL("../../attached_assets/googlecloud logo_1764188505455.jpg", import.meta.url).href },
    { name: "Azure", url: "https://azure.microsoft.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
    { name: "Vercel", url: "https://vercel.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg" },
  ],
  DevOps: [
    { name: "Docker", url: "https://www.docker.com/", logo: new URL("../../attached_assets/docker logo_1764188505454.png", import.meta.url).href },
    { name: "Kubernetes", url: "https://kubernetes.io/", logo: new URL("../../attached_assets/kubernetes logo_1764188505455.jpg", import.meta.url).href },
    { name: "GitHub Actions", url: "https://github.com/features/actions", logo: new URL("../../attached_assets/github logo_1764188505455.png", import.meta.url).href },
    { name: "Terraform", url: "https://www.terraform.io/", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg" },
  ],
  "AI/ML": [
    { name: "TensorFlow", url: "https://www.tensorflow.org/", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/TensorFlow_logo.svg" },
    { name: "PyTorch", url: "https://pytorch.org/", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/PyTorch_logo_icon.svg" },
    { name: "OpenAI", url: "https://openai.com/", logo: new URL("../../attached_assets/openai logo_1764188505457.png", import.meta.url).href },
    { name: "Hugging Face", url: "https://huggingface.co/", logo: new URL("../../attached_assets/hugging face logo_1764188505455.png", import.meta.url).href },
  ],
};

export const navLinks = [
  { id: 1, text: "Home", section: "/" },
  { id: 2, text: "Services", section: "#services" },
  { id: 3, text: "Portfolio", section: "#portfolio" },
  { id: 4, text: "Methodology", section: "#methodology" },
  { id: 5, text: "Tech Stack", section: "#techstack" },
  { id: 6, text: "About", section: "/about" },
];
