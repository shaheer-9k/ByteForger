import { Link } from "wouter";
import { Cloud, Globe, Code, Target } from "lucide-react";

export default function Hero() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 min-h-[calc(100vh-5rem)] lg:min-h-[60vh] flex-wrap overflow-x-hidden">
      <div className="flex flex-col justify-center w-full lg:w-1/2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-darkBlue font-play font-bold my-4 sm:my-6 leading-tight">
          Transform Your <span className="text-darkPink">Digital Vision</span> into Reality
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-foreground tracking-tight mb-4 leading-relaxed max-w-2xl">
          ByteForger specializes in full-stack development, cloud solutions, and AI integration. 
          From modern web applications to scalable cloud infrastructure, we deliver 
          cutting-edge technology solutions that drive business growth.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
          <span className="flex items-center" data-testid="text-feature-react">
            <span className="w-2 h-2 bg-darkPink rounded-full mr-2 flex-shrink-0"></span>
            React & TypeScript Development
          </span>
          <span className="flex items-center" data-testid="text-feature-cloud">
            <span className="w-2 h-2 bg-darkPink rounded-full mr-2 flex-shrink-0"></span>
            Cloud Architecture (AWS, Azure, GCP)
          </span>
          <span className="flex items-center" data-testid="text-feature-ai">
            <span className="w-2 h-2 bg-darkPink rounded-full mr-2 flex-shrink-0"></span>
            AI & Machine Learning Integration
          </span>
        </div>
        <Link href="/contact">
          <a 
            data-testid="button-get-started"
            className="border-2 border-darkBlue text-darkBlue font-play font-bold rounded-lg py-2 sm:py-3 px-4 sm:px-6 my-4 sm:my-6 self-start hover:bg-darkBlue hover:text-cream transition-all duration-300 whitespace-nowrap text-sm sm:text-base"
          >
            Let's get started!
          </a>
        </Link>
      </div>
      
      <div className="w-full lg:w-1/2 lg:-mt-10 relative flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 w-full max-w-2xl">
          <div 
            className="flex flex-col items-center p-4 sm:p-5 md:p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 group"
            data-testid="card-cloud-solutions"
          >
            <Cloud className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-darkBlue group-hover:scale-110 transition-transform duration-300 mb-2 sm:mb-3 md:mb-4" aria-label="Cloud Solutions Icon" />
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-darkBlue text-center">Cloud Solutions</h3>
            <p className="text-xs sm:text-sm text-muted-foreground text-center mt-1 sm:mt-2">Scalable AWS, Azure & GCP Infrastructure</p>
          </div>
          
          <div 
            className="flex flex-col items-center p-4 sm:p-5 md:p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 group"
            data-testid="card-web-development"
          >
            <Globe className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-darkPink group-hover:scale-110 transition-transform duration-300 mb-2 sm:mb-3 md:mb-4" aria-label="Web Development Icon" />
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-darkPink text-center">Web Development</h3>
            <p className="text-xs sm:text-sm text-muted-foreground text-center mt-1 sm:mt-2">Modern React & Full-Stack Applications</p>
          </div>
          
          <div 
            className="flex flex-col items-center p-4 sm:p-5 md:p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 group"
            data-testid="card-custom-development"
          >
            <Code className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-green-700 group-hover:scale-110 transition-transform duration-300 mb-2 sm:mb-3 md:mb-4" aria-label="Custom Development Icon" />
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-green-700 text-center">Custom Development</h3>
            <p className="text-xs sm:text-sm text-muted-foreground text-center mt-1 sm:mt-2">Tailored Software Solutions</p>
          </div>
          
          <div 
            className="flex flex-col items-center p-4 sm:p-5 md:p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 group"
            data-testid="card-global-impact"
          >
            <Target className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-purple-700 group-hover:scale-110 transition-transform duration-300 mb-2 sm:mb-3 md:mb-4" aria-label="Global Solutions Icon" />
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-purple-700 text-center">Global Impact</h3>
            <p className="text-xs sm:text-sm text-muted-foreground text-center mt-1 sm:mt-2">Enterprise-Grade AI & ML Solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
