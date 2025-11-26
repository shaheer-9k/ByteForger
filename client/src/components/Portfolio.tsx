import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import drivewaveImg from "@assets/Drivewave_Design_1764185200769.jpg";
import qpayImg from "@assets/QPay_Design_1764185200770.png";
import cleaningBeeImg from "@assets/The Cleaning Bee-Profile_Image_1764185200770.jpg";

const projects = [
  {
    id: 1,
    title: "DriveWave",
    category: "Mobile App",
    description: "An innovative voice-controlled driving safety application with AI-powered interface for real-time communication management.",
    image: drivewaveImg,
    technologies: ["React Native", "AI/ML", "Voice Recognition"],
    stats: "50K+ Users",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: 2,
    title: "QPay",
    category: "FinTech App",
    description: "Comprehensive digital payment platform featuring secure transactions, account management, and integrated reward system.",
    image: qpayImg,
    technologies: ["React", "Node.js", "Payment Gateway"],
    stats: "2M+ Transactions",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    title: "The Cleaning Bee",
    category: "Service Platform",
    description: "Vibrant on-demand services marketplace with real-time booking, professional tracking, and loyalty rewards program.",
    image: cleaningBeeImg,
    technologies: ["React", "Firebase", "Stripe"],
    stats: "5K+ Professionals",
    color: "from-yellow-500 to-orange-600",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = ["Mobile App", "FinTech App", "Service Platform"];
  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold font-play text-darkBlue mb-4">
            Our <span className="bg-gradient-to-r from-darkPink to-neonPink bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into stunning digital experiences across industries
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            onClick={() => setSelectedCategory(null)}
            data-testid="button-filter-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm ${
              selectedCategory === null
                ? "bg-gradient-to-r from-darkBlue to-lightBlue text-white shadow-lg"
                : "bg-white text-darkBlue hover:bg-gray-100 border border-gray-200"
            }`}
          >
            All Projects
          </motion.button>
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              data-testid={`button-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-darkBlue to-lightBlue text-white shadow-lg"
                  : "bg-white text-darkBlue hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 border border-gray-100 hover:border-lightBlue"
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-6">
                  <motion.a
                    href="#"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-lightBlue to-neonPink text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all font-semibold"
                    data-testid={`link-project-${project.id}`}
                  >
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`inline-block bg-gradient-to-r ${project.color} text-white text-xs font-bold px-4 py-2 rounded-full backdrop-blur-sm`}>
                    {project.stats}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <span className="text-sm font-bold text-transparent bg-gradient-to-r from-darkPink to-neonPink bg-clip-text">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold font-play text-darkBlue my-3">{project.title}</h3>
                <p className="text-textGray text-sm leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="inline-block bg-gradient-to-r from-darkBlue/10 to-lightBlue/10 text-darkBlue text-xs px-3 py-2 rounded-full font-semibold border border-darkBlue/20 hover:border-darkBlue/40 transition-all"
                      data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
