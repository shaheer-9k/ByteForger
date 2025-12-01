import { Link } from "wouter";
import { motion } from "framer-motion";
import { Cloud, Globe, Code, Target, ArrowRight, Sparkles, CheckCircle, Zap, Shield, Rocket } from "lucide-react";
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
        className="w-full lg:w-1/2 relative flex flex-col justify-center items-center mt-6 sm:mt-0 z-10 gap-8"
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

        {/* Core Competencies Section */}
        <motion.div 
          className="w-full max-w-2xl grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 px-2 xs:px-3 sm:px-6 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 backdrop-blur-md rounded-2xl p-3 sm:p-4 md:p-6 border border-blue-200/50 dark:border-blue-700/50 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </motion.div>
            <div className="text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-300">Lightning Fast</div>
            <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Performance</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/40 dark:to-emerald-800/40 backdrop-blur-md rounded-2xl p-3 sm:p-4 md:p-6 border border-green-200/50 dark:border-green-700/50 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3"
            >
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </motion.div>
            <div className="text-xs sm:text-sm font-bold text-green-700 dark:text-green-300">Secure & Reliable</div>
            <div className="text-xs text-green-600 dark:text-green-400 mt-1">Enterprise Grade</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/40 dark:to-pink-800/40 backdrop-blur-md rounded-2xl p-3 sm:p-4 md:p-6 border border-purple-200/50 dark:border-purple-700/50 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3"
            >
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </motion.div>
            <div className="text-xs sm:text-sm font-bold text-purple-700 dark:text-purple-300">Scalable Solutions</div>
            <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">Future Ready</div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          className="w-full max-w-2xl flex flex-wrap justify-center gap-2 sm:gap-3 px-2 relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
            <span className="text-xs sm:text-sm font-semibold text-green-700 dark:text-green-400">Quality Assured</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-400">Enterprise Ready</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-400">On-Time Delivery</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
