import { Link } from "wouter";
import { motion } from "framer-motion";
import { Cloud, Globe, Code, Target, ArrowRight } from "lucide-react";
import AnimatedCard from "./AnimatedCard";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="w-full px-3 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-12 md:py-16 flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-8 lg:gap-12 min-h-screen sm:min-h-[calc(100vh-5rem)] lg:min-h-[60vh] overflow-hidden">
      <motion.div 
        className="flex flex-col justify-center w-full lg:w-1/2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-darkBlue font-play font-bold my-2 sm:my-4 md:my-6 leading-tight"
        >
          Transform Your <span className="bg-gradient-to-r from-darkPink to-neonPink bg-clip-text text-transparent">Digital Vision</span> into Reality
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
        
        <motion.div variants={itemVariants}>
          <Link href="/contact">
            <a 
              data-testid="button-get-started"
              className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-gradient-to-r from-darkBlue to-lightBlue text-white font-play font-bold rounded-lg py-2 sm:py-3 px-6 sm:px-8 hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap text-xs sm:text-base group"
            >
              Let's get started!
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Link>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="w-full lg:w-1/2 relative flex justify-center items-center mt-6 sm:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 p-2 xs:p-3 sm:p-6 md:p-8 w-full max-w-2xl">
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
