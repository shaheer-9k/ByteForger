import { Link } from "wouter";
import { motion } from "framer-motion";
import { Cloud, Globe, Code, Target, ArrowRight, Sparkles } from "lucide-react";
import AnimatedCard from "./AnimatedCard";

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
        >
          Transform Your <span className="bg-gradient-to-r from-darkPink via-neonPink to-neonBlue dark:from-neonPink dark:via-neonBlue dark:to-cream bg-clip-text text-transparent animate-rotate-gradient bg-size-200">Digital Vision</span> into Reality
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xs sm:text-base md:text-lg lg:text-xl text-foreground tracking-tight mb-3 sm:mb-4 leading-relaxed max-w-2xl"
        >
          ByteForger specializes in full-stack development, cloud solutions, and AI integration. 
          From modern web applications to scalable cloud infrastructure, we deliver 
          cutting-edge technology solutions that drive business growth.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col xs:flex-row flex-wrap gap-2 xs:gap-3 text-xs xs:text-sm text-muted-foreground mb-4 sm:mb-6 md:mb-8"
        >
          <span className="flex items-center" data-testid="text-feature-react">
            <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-gradient-to-r from-darkPink to-neonPink rounded-full mr-1.5 xs:mr-2 flex-shrink-0"></span>
            <span className="hidden xs:inline">React & TypeScript Development</span>
            <span className="xs:hidden">React & TypeScript</span>
          </span>
          <span className="flex items-center" data-testid="text-feature-cloud">
            <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-gradient-to-r from-darkPink to-neonPink rounded-full mr-1.5 xs:mr-2 flex-shrink-0"></span>
            <span className="hidden sm:inline">Cloud Architecture (AWS, Azure, GCP)</span>
            <span className="sm:hidden">Cloud Solutions</span>
          </span>
          <span className="hidden sm:flex items-center" data-testid="text-feature-ai">
            <span className="w-2 h-2 bg-gradient-to-r from-darkPink to-neonPink rounded-full mr-2 flex-shrink-0"></span>
            AI & Machine Learning Integration
          </span>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
        >
          <button
            data-testid="button-get-started"
            onClick={() => window.location.href = '/contact'}
            className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-gradient-to-r from-darkBlue to-lightBlue text-white font-play font-bold rounded-xl py-3 sm:py-4 px-8 sm:px-10 hover:shadow-2xl hover:scale-110 transition-all duration-300 whitespace-nowrap text-xs sm:text-base group animate-glow"
          >
            Let's get started!
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
        className="w-full lg:w-1/2 relative flex justify-center items-center mt-6 sm:mt-0 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 p-2 xs:p-3 sm:p-6 md:p-8 w-full max-w-2xl relative z-10">
          <AnimatedCard
            icon={<Cloud className="w-12 h-12 md:w-16 md:h-16 text-white" />}
            title="Cloud Solutions"
            description="Scalable AWS, Azure & GCP Infrastructure"
            gradient="from-blue-500 via-blue-600 to-cyan-600"
            delay={0}
          />
          
          <AnimatedCard
            icon={<Globe className="w-12 h-12 md:w-16 md:h-16 text-white" />}
            title="Web Development"
            description="Modern React & Full-Stack Applications"
            gradient="from-pink-500 via-pink-600 to-red-600"
            delay={0.1}
          />
          
          <AnimatedCard
            icon={<Code className="w-12 h-12 md:w-16 md:h-16 text-white" />}
            title="Custom Development"
            description="Tailored Software Solutions"
            gradient="from-green-500 via-emerald-600 to-teal-600"
            delay={0.2}
          />
          
          <AnimatedCard
            icon={<Target className="w-12 h-12 md:w-16 md:h-16 text-white" />}
            title="Global Impact"
            description="Enterprise-Grade AI & ML Solutions"
            gradient="from-purple-500 via-violet-600 to-indigo-600"
            delay={0.3}
          />
        </div>
      </motion.div>
    </div>
  );
}
