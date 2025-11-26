import { useState } from "react";
import { ExternalLink } from "lucide-react";
import drivewaveImg from "@assets/Drivewave_Design_1764185200769.jpg";
import qpayImg from "@assets/QPay_Design_1764185200770.png";
import cleaningBeeImg from "@assets/The Cleaning Bee-Profile_Image_1764185200770.jpg";

const projects = [
  {
    id: 1,
    title: "DriveWave",
    category: "Mobile App",
    description: "An innovative voice-controlled driving safety application that helps drivers stay focused on the road while managing messages and communications through an AI-powered interface. Features real-time voice recognition and adaptive UI.",
    image: drivewaveImg,
    technologies: ["React Native", "AI/ML", "Voice Recognition"],
    link: "#",
  },
  {
    id: 2,
    title: "QPay",
    category: "FinTech App",
    description: "A comprehensive digital payment platform providing seamless financial transactions, account management, and reward system integration. Designed for secure, fast, and user-friendly mobile banking experience.",
    image: qpayImg,
    technologies: ["React", "Node.js", "Payment Gateway"],
    link: "#",
  },
  {
    id: 3,
    title: "The Cleaning Bee",
    category: "Service Platform",
    description: "A vibrant on-demand cleaning and household services marketplace connecting professionals with customers. Features real-time booking, service tracking, and a loyalty rewards program with yellow bee branding.",
    image: cleaningBeeImg,
    technologies: ["React", "Firebase", "Stripe Integration"],
    link: "#",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = ["Mobile App", "FinTech App", "Service Platform"];
  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

  return (
    <section id="portfolio" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-play text-darkBlue mb-4">
            Our <span className="text-darkPink">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the innovative projects we've built for clients across different industries
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            data-testid="button-filter-all"
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === null
                ? "bg-darkBlue text-white"
                : "bg-gray-200 text-darkBlue hover:bg-gray-300"
            }`}
          >
            All Projects
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              data-testid={`button-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-darkBlue text-white"
                  : "bg-gray-200 text-darkBlue hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 hover-elevate"
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <a
                    href={project.link}
                    className="m-4 inline-flex items-center gap-2 bg-lightBlue text-white px-4 py-2 rounded-lg hover:bg-darkBlue transition-colors"
                    data-testid={`link-project-${project.id}`}
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-semibold text-darkPink">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold font-play text-darkBlue mb-2">{project.title}</h3>
                <p className="text-textGray text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-lightBlue/10 text-darkBlue text-xs px-3 py-1 rounded-full"
                      data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
