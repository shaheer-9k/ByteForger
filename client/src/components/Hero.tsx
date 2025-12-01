import { Link } from "wouter";
import { motion } from "framer-motion";
import { Cloud, Globe, Code, Target, ArrowRight, Sparkles, CheckCircle, Zap, Shield, Rocket, Database, Cpu, GitBranch, Server } from "lucide-react";
import AnimatedCard from "./AnimatedCard";
import { SiReact, SiNodedotjs, SiPython, SiAmazon, SiDocker, SiKubernetes } from "react-icons/si";

// Tech stack with icons for orbit display
const techStack = [
  { Icon: SiReact, label: "React", color: "from-blue-400 to-cyan-400", x: 100, y: 0 },
  { Icon: SiNodedotjs, label: "Node.js", color: "from-green-400 to-emerald-400", x: 50, y: 86 },
  { Icon: SiPython, label: "Python", color: "from-yellow-400 to-orange-400", x: -50, y: 86 },
  { Icon: SiAmazon, label: "AWS", color: "from-orange-400 to-red-400", x: -100, y: 0 },
  { Icon: SiDocker, label: "Docker", color: "from-blue-500 to-blue-400", x: -50, y: -86 },
  { Icon: SiKubernetes, label: "K8s", color: "from-purple-400 to-pink-400", x: 50, y: -86 },
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full px-3 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-12 md:py-16 flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-8 lg:gap-12 min-h-screen sm:min-h-[calc(100vh-5rem)] lg:min-h-[60vh] overflow-hidden relative">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full filter blur-3xl animate-blob"
          animate={{ x: [-50, 50, -50], y: [-50, 50, -50] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-blob-2"
          animate={{ x: [50, -50, 50], y: [50, -50, 50] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>
      <motion.div 
        className="flex flex-col justify-center w-full lg:w-1/2 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-2 mb-4"
        >
          <Sparkles className="w-5 h-5 text-neonPink animate-pulse" />
          <span className="text-sm font-semibold text-neonPink uppercase tracking-widest">Welcome to ByteForger</span>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-darkBlue dark:text-white font-play font-bold my-2 sm:my-4 md:my-6 leading-tight"
          data-testid="heading-hero-main"
        >
          Transform Your <span className="bg-gradient-to-r from-darkPink via-neonPink to-neonBlue dark:from-neonPink dark:via-neonBlue dark:to-cream bg-clip-text text-transparent animate-rotate-gradient bg-size-200">Digital Vision</span> into Reality
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xs sm:text-base md:text-lg lg:text-xl text-foreground tracking-tight mb-3 sm:mb-4 leading-relaxed max-w-2xl"
        >
          We engineer enterprise-grade software solutions that accelerate business transformation. 
          From full-stack development to cloud architecture, we combine strategic expertise with 
          proven execution to deliver measurable results for enterprises and startups.
        </motion.p>
        
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
        >
          <button
            data-testid="button-get-started"
            onClick={() => window.location.href = '/contact'}
            className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-gradient-to-r from-darkBlue to-lightBlue text-white font-play font-bold rounded-xl py-3 sm:py-4 px-8 sm:px-10 hover:shadow-2xl hover:scale-110 transition-all duration-300 whitespace-nowrap text-xs sm:text-base group animate-glow"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass rounded-xl py-3 px-8 text-darkBlue dark:text-white font-semibold text-xs sm:text-base hover:glass-hover cursor-pointer"
            onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                const navbarHeight = 80;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - navbarHeight - 24;
                window.scrollTo({
                  top: Math.max(0, offsetPosition),
                  behavior: 'smooth'
                });
              }
            }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="w-full lg:w-1/2 relative flex flex-col justify-center items-center mt-6 sm:mt-0 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Animated Tech Showcase Container */}
        <div className="relative w-full max-w-2xl h-80 sm:h-96 md:h-[32rem] flex items-center justify-center">
          {/* Floating particle background */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm"
                animate={{
                  x: [Math.random() * 250 - 125, Math.random() * 250 - 125],
                  y: [Math.random() * 250 - 125, Math.random() * 250 - 125],
                  opacity: [0.2, 0.9, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 5 + 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  willChange: "transform, opacity",
                }}
              />
            ))}
          </div>

          {/* Central glowing orb */}
          <motion.div 
            className="absolute w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-3xl"
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ willChange: "transform, opacity" }}
          />

          {/* Orbiting tech icons */}
          <div className="absolute w-full h-full flex items-center justify-center">
            {techStack.map((tech, idx) => {
              const Icon = tech.Icon;
              const angle = (idx / techStack.length) * 360;
              const radius = 100;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <motion.div
                  key={tech.label}
                  className="absolute"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    transformOrigin: `calc(50% + ${-x}px) calc(50% + ${-y}px)`,
                    willChange: "transform",
                  }}
                >
                  <motion.div
                    className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${tech.color} shadow-2xl flex items-center justify-center backdrop-blur-md border border-white/30 hover:scale-125 transition-transform duration-300 cursor-pointer group`}
                    whileHover={{ scale: 1.2, boxShadow: "0 0 30px rgba(79, 172, 254, 0.8)" }}
                    whileTap={{ scale: 0.9 }}
                    style={{ willChange: "transform" }}
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
                    <motion.div 
                      className="absolute -bottom-10 text-xs sm:text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/60 px-2 py-1 rounded-full backdrop-blur-sm"
                      initial={{ opacity: 0, y: 5 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      {tech.label}
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Center text label */}
          <motion.div 
            className="absolute text-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="text-xl sm:text-2xl font-bold text-darkBlue dark:text-white font-play">Our Tech Stack</div>
            <div className="text-xs sm:text-sm text-textGray dark:text-gray-400 mt-2">Enterprise-grade technologies</div>
          </motion.div>
        </div>

        {/* Below the showcase - description and badges */}
        <motion.div 
          className="w-full max-w-2xl mt-8 sm:mt-12 px-2 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-6">
            <div className="text-center p-3 sm:p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all">
              <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 mx-auto mb-2" />
              <div className="text-xs sm:text-sm font-bold text-foreground">Lightning Fast</div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-green-500 mx-auto mb-2" />
              <div className="text-xs sm:text-sm font-bold text-foreground">Secure</div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all">
              <Rocket className="w-6 h-6 sm:w-7 sm:h-7 text-purple-500 mx-auto mb-2" />
              <div className="text-xs sm:text-sm font-bold text-foreground">Scalable</div>
            </div>
          </div>

          {/* Trust Badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-xs sm:text-sm font-semibold text-green-700 dark:text-green-400">Quality Assured</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-400">Enterprise Ready</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
