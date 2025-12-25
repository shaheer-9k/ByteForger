import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import drivewaveImg from "@assets/Drivewave_Design_1764185200769.jpg";
import qpayImg from "@assets/QPay_Design_1764185200770.png";
import cleaningBeeImg from "@assets/The Cleaning Bee-Profile_Image_1764185200770.jpg";
import homeNestImg from "@assets/homeNestImg.png";
import tasteCraftImg from "@assets/tasteCraftImg.png";
import matchMatesImg from "@assets/matchMatesImg.png";

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
  {
    id: 4,
    title: "HomeNest",
    category: "Mobile App",
    description: "A modern real-estate browsing application that helps users find, compare, and explore properties through high-quality visuals, virtual tours, and smart location-based recommendations.",
    image: homeNestImg,
    technologies: ["React Native", "Firebase", "Map API"],
    stats: "120K+ Active Users",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 5,
    title: "TasteCraft",
    category: "Website",
    description: "A beautifully crafted recipe and cooking inspiration platform offering step-by-step recipes, nutrition insights, chef profiles, and curated meal categories for food enthusiasts worldwide.",
    image: tasteCraftImg,
    technologies: ["Next.js", "TailwindCSS", "Headless CMS"],
    stats: "500K+ Monthly Visitors",
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 5,
    title: "TasteCraft",
    category: "Website",
    description: "A beautifully crafted recipe and cooking inspiration platform offering step-by-step recipes, nutrition insights, chef profiles, and curated meal categories for food enthusiasts worldwide.",
    image: tasteCraftImg,
    technologies: ["Next.js", "TailwindCSS", "Headless CMS"],
    stats: "500K+ Monthly Visitors",
    color: "from-amber-600 to-orange-600",
  },
  {
    id: 6,
    title: "MatchMates",
    category: "Mobile App",
    description: "A smart matchmaking platform designed to help users discover compatible partners using location filters, profile insights, and an intuitive swipe-based interface.",
    image: matchMatesImg,
    technologies: ["Flutter", "Node.js", "Real-time Chat API"],
    stats: "80K+ Successful Matches",
    color: "from-blue-500 to-teal-500",
  },
];

function PortfolioComponent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

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
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 will-change-contents">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold font-play text-darkBlue mb-3 sm:mb-4">
            Our <span className="text-lightBlue">Portfolio</span>
          </h2>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Transforming ideas into stunning digital experiences across industries
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-gray-700 overflow-hidden transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-lightBlue dark:hover:border-neonPink"
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative h-56 xs:h-64 sm:h-72 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Stats Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <motion.span
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.color} text-white text-xs font-bold px-4 py-2 rounded-full backdrop-blur-md shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <TrendingUp className="w-3 h-3" />
                    {project.stats}
                  </motion.span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-end justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex-1"></div>
                </div>
              </div>
              <div className="p-6 sm:p-8 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-lightBlue uppercase tracking-wider">
                    {project.category}
                  </span>
                  <Sparkles className="w-4 h-4 text-lightBlue opacity-60" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-play text-darkBlue dark:text-lightBlue mb-3 group-hover:text-lightBlue transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="inline-block bg-blue-50 dark:bg-slate-800 text-darkBlue dark:text-blue-100 text-xs px-3 py-2 rounded-full font-semibold border border-blue-100 dark:border-slate-700 group-hover:border-lightBlue/30 hover:shadow-md transition-all duration-300"
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

export default function Portfolio() {
  const MemoizedPortfolio = import.meta.env.PROD ? PortfolioComponent : PortfolioComponent;
  return <MemoizedPortfolio />;
}
