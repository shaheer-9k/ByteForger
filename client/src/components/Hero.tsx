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
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 min-h-[calc(100vh-5rem)] lg:min-h-[60vh] overflow-hidden">
      <motion.div 
        className="flex flex-col justify-center w-full lg:w-1/2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-darkBlue font-play font-bold my-4 sm:my-6 leading-tight"
        >
          Transform Your <span className="bg-gradient-to-r from-darkPink to-neonPink bg-clip-text text-transparent">Digital Vision</span> into Reality
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-foreground tracking-tight mb-4 leading-relaxed max-w-2xl"
        >
          ByteForger specializes in full-stack development, cloud solutions, and AI integration. 
          From modern web applications to scalable cloud infrastructure, we deliver 
          cutting-edge technology solutions that drive business growth.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8"
        >
          <span className="flex items-center" data-testid="text-feature-react">
            <span className="w-2 h-2 bg-gradient-to-r from-darkPink to-neonPink rounded-full mr-2 flex-shrink-0"></span>
            React & TypeScript Development
          </span>
          <span className="flex items-center" data-testid="text-feature-cloud">
            <span className="w-2 h-2 bg-gradient-to-r from-darkPink to-neonPink rounded-full mr-2 flex-shrink-0"></span>
            Cloud Architecture (AWS, Azure, GCP)
          </span>
          <span className="flex items-center" data-testid="text-feature-ai">
            <span className="w-2 h-2 bg-gradient-to-r from-darkPink to-neonPink rounded-full mr-2 flex-shrink-0"></span>
            AI & Machine Learning Integration
          </span>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Link href="/contact">
            <a 
              data-testid="button-get-started"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-darkBlue to-lightBlue text-white font-play font-bold rounded-lg py-3 px-8 hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap text-sm sm:text-base group"
            >
              Let's get started!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Link>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="w-full lg:w-1/2 relative flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 w-full max-w-2xl">
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
