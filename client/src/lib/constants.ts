import { Code, Globe, Cloud, Smartphone, LineChart, Wrench, Database, Shield, Zap, Users, Target, CheckCircle, Bug, Cpu, Settings, Briefcase } from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Web Development",
    desc: "Build modern, responsive web applications using React, Next.js, and cutting-edge frontend technologies. From landing pages to complex web platforms.",
    image: Globe,
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android. Beautiful, performant apps that users love.",
    image: Smartphone,
  },
  {
    id: 3,
    title: "Cloud Computing",
    desc: "Design and deploy scalable cloud infrastructure on AWS, Azure, and GCP. Expert cloud architecture, migration, and DevOps services.",
    image: Cloud,
  },
  {
    id: 4,
    title: "Salesforce Services",
    desc: "Comprehensive Salesforce consulting, customization, and integration services. From CRM implementation to advanced automation and analytics.",
    image: Users,
  },
  {
    id: 5,
    title: "Database Design & Management",
    desc: "Expert database design, optimization, and management services. PostgreSQL, MongoDB, MySQL, and cloud database solutions.",
    image: Database,
  },
  {
    id: 6,
    title: "IT Consulting & Digital Transformation",
    desc: "Strategic IT consulting and digital transformation services. Help your business leverage technology for competitive advantage.",
    image: Cpu,
  },
  {
    id: 7,
    title: "Maintenance & Support Services",
    desc: "Ongoing maintenance, support, and optimization services. Keep your applications running smoothly with our dedicated support team.",
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
    { name: "React", url: "https://react.dev/", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", url: "https://nextjs.org/", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "TypeScript", url: "https://www.typescriptlang.org/", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com/", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Vue.js", url: "https://vuejs.org/", logo: "https://cdn.simpleicons.org/vue.js/4FC08D" },
    { name: "Angular", url: "https://angular.io/", logo: "https://cdn.simpleicons.org/angular/DD0031" },
  ],
  Backend: [
    { name: "Node.js", url: "https://nodejs.org/", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Express", url: "https://expressjs.com/", logo: "https://cdn.simpleicons.org/express/000000" },
    { name: "Python", url: "https://www.python.org/", logo: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "Django", url: "https://www.djangoproject.com/", logo: "https://cdn.simpleicons.org/django/092E20" },
    { name: "FastAPI", url: "https://fastapi.tiangolo.com/", logo: "https://cdn.simpleicons.org/fastapi/009688" },
  ],
  Database: [
    { name: "PostgreSQL", url: "https://www.postgresql.org/", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "MongoDB", url: "https://www.mongodb.com/", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "Redis", url: "https://redis.io/", logo: "https://cdn.simpleicons.org/redis/DC382D" },
    { name: "MySQL", url: "https://www.mysql.com/", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
  ],
  Cloud: [
    { name: "AWS", url: "https://aws.amazon.com/", logo: "https://cdn.simpleicons.org/amazonaws/232F3E" },
    { name: "Google Cloud", url: "https://cloud.google.com/", logo: "https://cdn.simpleicons.org/googlecloud/4285F4" },
    { name: "Azure", url: "https://azure.microsoft.com/", logo: "https://cdn.simpleicons.org/microsoftazure/0078D4" },
    { name: "Vercel", url: "https://vercel.com/", logo: "https://cdn.simpleicons.org/vercel/000000" },
  ],
  DevOps: [
    { name: "Docker", url: "https://www.docker.com/", logo: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Kubernetes", url: "https://kubernetes.io/", logo: "https://cdn.simpleicons.org/kubernetes/326CE5" },
    { name: "GitHub Actions", url: "https://github.com/features/actions", logo: "https://cdn.simpleicons.org/githubactions/2088FF" },
    { name: "Terraform", url: "https://www.terraform.io/", logo: "https://cdn.simpleicons.org/terraform/7B42BC" },
  ],
  "AI/ML": [
    { name: "TensorFlow", url: "https://www.tensorflow.org/", logo: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
    { name: "PyTorch", url: "https://pytorch.org/", logo: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
    { name: "OpenAI", url: "https://openai.com/", logo: "https://cdn.simpleicons.org/openai/412991" },
    { name: "Hugging Face", url: "https://huggingface.co/", logo: "https://cdn.simpleicons.org/huggingface/FFD21E" },
  ],
  "CRM & Salesforce": [
    { name: "Salesforce", url: "https://www.salesforce.com/", logo: "https://cdn.simpleicons.org/salesforce/00A1E0" },
    { name: "Salesforce Lightning", url: "https://www.salesforce.com/products/platform/lightning/", logo: "https://cdn.simpleicons.org/lightning/795EA3" }, // Fallback to generic lightning or keep existing if preferred, but standardizing on simpleicons is good.
    { name: "Apex", url: "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_intro.htm", logo: "https://cdn.simpleicons.org/salesforce/00A1E0" }, // Reusing SF logo as Apex specific might not exist
  ],
};

export const navLinks = [
  { id: 1, text: "Home", section: "/" },
  { id: 2, text: "Services", section: "#services" },
  { id: 3, text: "Methodology", section: "#methodology" },
  { id: 4, text: "Portfolio", section: "#portfolio" },
  { id: 5, text: "Tech Stack", section: "#techstack" },
  { id: 6, text: "About", section: "#about" },
];
