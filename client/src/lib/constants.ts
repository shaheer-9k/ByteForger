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
    image: Target,
  },
  {
    id: 2,
    title: "Agile Development",
    desc: "Our iterative development process ensures regular feedback, rapid prototyping, and flexibility to adapt to changing requirements.",
    image: Users,
  },
  {
    id: 3,
    title: "Quality Assurance",
    desc: "Rigorous testing at every stage - from unit tests to end-to-end testing - ensures your solution works flawlessly.",
    image: Shield,
  },
  {
    id: 4,
    title: "Deployment & Support",
    desc: "Seamless deployment to production with ongoing maintenance, monitoring, and support to keep your application running smoothly.",
    image: CheckCircle,
  },
];

export const techStack = {
  Frontend: [
    { name: "React", url: "https://react.dev/" },
    { name: "Next.js", url: "https://nextjs.org/" },
    { name: "TypeScript", url: "https://www.typescriptlang.org/" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
    { name: "Vue.js", url: "https://vuejs.org/" },
  ],
  Backend: [
    { name: "Node.js", url: "https://nodejs.org/" },
    { name: "Express", url: "https://expressjs.com/" },
    { name: "Python", url: "https://www.python.org/" },
    { name: "Django", url: "https://www.djangoproject.com/" },
    { name: "FastAPI", url: "https://fastapi.tiangolo.com/" },
  ],
  Database: [
    { name: "PostgreSQL", url: "https://www.postgresql.org/" },
    { name: "MongoDB", url: "https://www.mongodb.com/" },
    { name: "Redis", url: "https://redis.io/" },
    { name: "MySQL", url: "https://www.mysql.com/" },
  ],
  Cloud: [
    { name: "AWS", url: "https://aws.amazon.com/" },
    { name: "Google Cloud", url: "https://cloud.google.com/" },
    { name: "Azure", url: "https://azure.microsoft.com/" },
    { name: "Vercel", url: "https://vercel.com/" },
  ],
  DevOps: [
    { name: "Docker", url: "https://www.docker.com/" },
    { name: "Kubernetes", url: "https://kubernetes.io/" },
    { name: "GitHub Actions", url: "https://github.com/features/actions" },
    { name: "Terraform", url: "https://www.terraform.io/" },
  ],
  "AI/ML": [
    { name: "TensorFlow", url: "https://www.tensorflow.org/" },
    { name: "PyTorch", url: "https://pytorch.org/" },
    { name: "OpenAI", url: "https://openai.com/" },
    { name: "Hugging Face", url: "https://huggingface.co/" },
  ],
};

export const navLinks = [
  { id: 1, text: "Home", section: "/" },
  { id: 2, text: "Services", section: "#services" },
  { id: 3, text: "Methodology", section: "#methodology" },
  { id: 4, text: "Tech Stack", section: "#techstack" },
  { id: 5, text: "About", section: "/about" },
];
