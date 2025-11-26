import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import { services, approaches, techStack } from "../lib/constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === ref1.current) {
            setIsVisible1(entry.isIntersecting);
          }
          if (entry.target === ref2.current) {
            setIsVisible2(entry.isIntersecting);
          }
          if (entry.target === ref3.current) {
            setIsVisible3(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref1.current) observer.observe(ref1.current);
    if (ref2.current) observer.observe(ref2.current);
    if (ref3.current) observer.observe(ref3.current);

    return () => {
      if (ref1.current) observer.unobserve(ref1.current);
      if (ref2.current) observer.unobserve(ref2.current);
      if (ref3.current) observer.unobserve(ref3.current);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetSection = document.querySelector(hash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      
      <section id="hero" className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 w-full">
        <Hero />
      </section>

      <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-r from-darkBlue via-blue-800 to-lightBlue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-neonPink rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold font-play mb-4 sm:mb-6 leading-tight">
            Transforming Ideas Into <span className="bg-gradient-to-r from-neonPink to-cream bg-clip-text text-transparent">Digital Excellence</span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12 px-2">
            <strong>ByteForger</strong> is a technology consulting firm specializing in modern software development, 
            cloud architecture, and AI solutions. We partner with businesses to create scalable, 
            innovative digital experiences that drive growth and competitive advantage.
          </p>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16">
            {[
              { icon: "⚡", title: "Rapid Development", desc: "Agile approach for fast delivery", testid: "card-rapid-development" },
              { icon: "💡", title: "Innovation Focus", desc: "Latest tech & best practices", testid: "card-innovation" },
              { icon: "🎯", title: "Partnership Mindset", desc: "Your success is our priority", testid: "card-partnership" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 h-full"
                data-testid={item.testid}
              >
                <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <div className="text-lg sm:text-xl font-semibold mb-2">{item.title}</div>
                <div className="text-xs sm:text-sm text-blue-100">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services">
        <div
          ref={ref1}
          className={`transition-opacity ease-in duration-700 ${
            isVisible1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center mb-8 sm:mb-12 mt-12 sm:mt-14 px-4 sm:px-6">
            <p className="text-foreground text-2xl xs:text-3xl sm:text-4xl font-semibold font-play mb-3 sm:mb-4">
              Our Services
            </p>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              ByteForger delivers comprehensive technology solutions to transform your business. 
              From cutting-edge web development to scalable cloud infrastructure and AI integration, 
              we're your partner in digital innovation.
            </p>
          </div>
          
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            keyBoardControl={true}
            customTransition="transform 600ms cubic-bezier(0.4, 0, 0.2, 1)"
            transitionDuration={600}
            containerClass="carousel-container"
            autoPlay={true}
            autoPlaySpeed={1000}
            removeArrowOnDeviceType={[]}
            arrows={true}
          >
            {services.map((service, index) => {
              const Icon = service.image;
              return (
                <div
                  key={service.id}
                  className="h-full min-h-80 sm:min-h-96 md:min-h-[400px] p-3"
                  data-testid={`card-service-${service.id}`}
                >
                  <div className="group h-full bg-gradient-to-br from-white/95 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl dark:shadow-2xl dark:shadow-gray-900 p-8 flex flex-col items-center justify-center transition-all duration-500 overflow-hidden relative border border-gray-200 dark:border-gray-700 hover:border-lightBlue dark:hover:border-neonPink hover:shadow-2xl dark:hover:shadow-3xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-darkBlue/0 via-transparent to-darkPink/0 group-hover:from-darkBlue/10 group-hover:to-darkPink/10 transition-all duration-500" />
                    
                    <div className="relative z-10 w-full flex flex-col items-center h-full justify-center">
                      <div className="mb-6 p-5 bg-gradient-to-br from-darkBlue/15 to-lightBlue/15 dark:from-neonPink/20 dark:to-lightBlue/20 rounded-3xl group-hover:scale-120 group-hover:from-darkBlue/25 group-hover:to-lightBlue/25 dark:group-hover:from-neonPink/30 dark:group-hover:to-lightBlue/30 transition-all duration-300 shadow-lg">
                        <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-darkBlue dark:text-neonPink group-hover:text-darkPink dark:group-hover:text-cream transition-colors duration-300" />
                      </div>
                      <p className="font-bold font-play text-center text-lg md:text-2xl text-darkBlue dark:text-lightBlue mb-4 group-hover:text-darkPink dark:group-hover:text-cream transition-colors duration-300">
                        {service.title}
                      </p>
                      <p className="text-center text-sm md:text-base text-textGray dark:text-gray-300 group-hover:text-foreground dark:group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-darkBlue via-lightBlue to-darkPink dark:from-neonPink dark:via-lightBlue dark:to-cream transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-lg" />
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>

      <section id="methodology" className="bg-gradient-to-br from-darkBlue via-blue-900 to-darkBlue mt-14 relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-neonPink"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full border border-lightBlue"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-white text-2xl font-play">
              Our <br />{" "}
              <span className="text-5xl font-bold bg-gradient-to-r from-neonPink to-cream bg-clip-text text-transparent">
                Methodology
              </span>
            </p>
          </motion.div>
          <motion.div 
            ref={ref2}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center transition-opacity ease-in duration-700 ${
              isVisible2 ? "opacity-100" : "opacity-0"
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {approaches.map((item, idx) => {
              const Icon = item.image;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/30 p-8 flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-2xl rounded-3xl hover:border-neonPink/60 hover:bg-white/25 hover:shadow-xl transition-all duration-300"
                  data-testid={`card-approach-${item.id}`}
                >
                  <div className="flex-shrink-0 text-neonBlue group-hover:scale-125 group-hover:text-neonPink group-hover:rotate-6 transition-all duration-300 mb-4 md:mb-0">
                    <Icon className="w-16 h-16 md:w-20 md:h-20" />
                  </div>
                  <div className="md:ml-8 flex-1">
                    <p className="text-xl md:text-2xl font-bold font-play text-neonBlue group-hover:text-cream mb-3 transition-colors">
                      {item.title}
                    </p>
                    <p className="text-cream/95 font-light text-sm md:text-base leading-relaxed mb-3">
                      {item.desc}
                    </p>
                    <div className="text-xs md:text-sm text-cream/70 group-hover:text-cream/90 transition-colors leading-relaxed italic">
                      {item.details || "Optimized for scalability and maintainability"}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Portfolio />

      <section id="techstack" className="mt-14 bg-gradient-to-b from-background to-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-foreground text-2xl font-play">
              Our
              <br /> <span className="text-4xl font-semibold text-neonPink">Tech Stack</span>
            </p>
          </div>
          <div
            ref={ref3}
            className={`transition-opacity ease-in duration-700 ${
              isVisible3 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-wrap justify-center items-center mx-4 md:justify-evenly md:mx-20 space-y-4 lg:mx-44 md:space-y-0 mb-12 max-w-4xl mx-auto">
              {Object.keys(techStack).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`button-category-${category.toLowerCase()}`}
                  className={`font-semibold text-center my-2 md:my-4 text-${
                    selectedCategory === category ? "darkPink" : "darkBlue"
                  } text-sm md:text-md lg:text-lg mx-2 transition-colors duration-300 hover:text-lightBlue`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap justify-center items-center max-w-6xl mx-auto gap-4 md:gap-8">
              {techStack[selectedCategory as keyof typeof techStack].map((tech, index) => (
                <a
                  key={index}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 md:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-xl hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-gray-700 transition-all duration-300 hover:scale-110 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 hover:border-lightBlue dark:hover:border-neonPink flex flex-col items-center justify-center min-h-[140px] md:min-h-[160px] min-w-[140px] md:min-w-[160px]"
                  data-testid={`link-tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="h-12 md:h-16 flex items-center justify-center mb-3 text-2xl md:text-3xl font-bold bg-gradient-to-br from-darkBlue/20 to-neonPink/20 dark:from-neonPink/20 dark:to-lightBlue/20 rounded-lg w-12 md:w-16 text-darkBlue dark:text-lightBlue group-hover:text-neonPink dark:group-hover:text-cream transition-colors">
                    {tech.name.substring(0, 2).toUpperCase()}
                  </div>
                  <p className="text-darkBlue dark:text-lightBlue font-bold text-xs md:text-sm text-center group-hover:text-neonPink dark:group-hover:text-neonPink transition-colors">{tech.name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mt-14 py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-neonPink/10 to-lightBlue/10 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-darkBlue/10 to-neonBlue/10 rounded-full filter blur-3xl animate-blob-2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-darkBlue dark:text-neonBlue font-play font-bold mb-4 sm:mb-6 leading-tight">
              Get to <span className="bg-gradient-to-r from-darkPink to-neonPink bg-clip-text text-transparent animate-rotate-gradient bg-size-200">Know</span> Us Better
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-foreground dark:text-gray-300 tracking-tight max-w-3xl mx-auto px-2">
              Empowering Businesses with Innovative Tech Solutions - ByteForger
              delivers cutting-edge software services to turn your vision into a
              digital masterpiece.
            </p>
          </motion.div>

          <motion.div 
            className="mb-16 sm:mb-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl xs:text-3xl sm:text-4xl font-semibold font-play text-darkBlue dark:text-lightBlue mb-8">
              About ByteForger
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:w-5/6 mx-auto">
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 hover:border-lightBlue dark:hover:border-neonPink"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-4xl sm:text-5xl mb-4 text-neonPink">🌟</div>
                <p className="text-muted-foreground dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  Welcome to <span className="font-bold text-darkBlue dark:text-lightBlue">ByteForger Solutions</span>, a remote-first software company
                  proudly registered in Texas, USA. We are a dynamic team of
                  forward-thinking professionals passionate about crafting
                  innovative technology solutions that empower businesses to succeed
                  in today's fast-paced digital landscape.
                </p>
              </motion.div>
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 hover:border-lightBlue dark:hover:border-neonPink"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-4xl sm:text-5xl mb-4 text-darkPink">🚀</div>
                <p className="text-muted-foreground dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  As a startup, we are driven by <span className="font-bold text-darkBlue dark:text-lightBlue">ambition, creativity, and excellence</span>. ByteForger specializes in full-stack development, 
                  cloud architecture, AI integration, and digital transformation services designed to 
                  accelerate business growth and innovation for startups and enterprises alike.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-gradient-to-br from-darkBlue via-blue-800 to-lightBlue dark:from-neonPink dark:via-darkBlue dark:to-lightBlue rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden hover:shadow-3xl transition-all duration-300">
                <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-white to-transparent"></div>
                <motion.div 
                  className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full filter blur-2xl"
                  animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-play text-white mb-4 sm:mb-6">Our Vision & Mission</h3>
                  <p className="text-cream/95 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    We envision <span className="font-bold">ByteForger Solutions</span> as a beacon of trust and quality
                    in the software industry. Our mission is to continuously innovate,
                    deliver exceptional results, and grow alongside our clients.
                  </p>
                  <p className="text-cream/85 text-sm sm:text-base leading-relaxed">
                    Whether you're a startup, a growing business, or an established
                    enterprise, we are here to help you turn your ideas into reality
                    through cutting-edge technology and dedicated partnership.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: "🎯", title: "Client-Centered Approach", desc: "Your goals are at the heart of everything we do. We listen, understand, and deliver solutions aligned with your vision." },
                { icon: "⚡", title: "Agile Excellence", desc: "We adapt and innovate rapidly to ensure timely and cost-effective delivery without compromising quality." },
                { icon: "🚀", title: "Cutting-Edge Expertise", desc: "Our team stays ahead of technology trends to provide you with the latest and most effective solutions." },
                { icon: "💎", title: "Quality Assurance", desc: "We maintain the highest standards in every project, ensuring your solution is robust, scalable, and future-proof." },
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex gap-3 sm:gap-4 p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-lightBlue dark:hover:border-neonPink hover:scale-105" 
                  data-testid={`card-about-value-${idx}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <div className="text-2xl sm:text-3xl flex-shrink-0 animate-bounce-slow" style={{ animationDelay: `${idx * 0.1}s` }}>{item.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-bold font-play text-darkBlue dark:text-lightBlue mb-1 text-base sm:text-lg">{item.title}</h4>
                    <p className="text-muted-foreground dark:text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20 py-12 sm:py-16 px-4 sm:px-6 md:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {[
              { number: "50+", label: "Projects Completed", icon: "✅" },
              { number: "30+", label: "Happy Clients", icon: "😊" },
              { number: "15+", label: "Years Experience", icon: "⭐" },
              { number: "100%", label: "Client Satisfaction", icon: "🏆" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center p-4 sm:p-6 bg-gradient-to-br from-white/95 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-lightBlue dark:hover:border-neonPink hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-play bg-gradient-to-r from-darkBlue to-neonPink bg-clip-text text-transparent mb-2 sm:mb-3">
                  {stat.number}
                </div>
                <p className="text-xs sm:text-sm md:text-base text-darkBlue dark:text-lightBlue font-semibold">{stat.label}</p>
                <div className="text-2xl sm:text-3xl mt-2">{stat.icon}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-gradient-to-r from-darkBlue to-darkPink dark:from-neonPink dark:to-lightBlue rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold font-play text-white mb-4 sm:mb-6">
                Every Project is an Opportunity
              </h3>
              <p className="text-cream/95 text-sm xs:text-base sm:text-lg md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
                At ByteForger, we don't just build software—we forge digital masterpieces that transform businesses. 
                Let's build the future together and create something extraordinary.
              </p>
              <Link href="/contact">
                <a className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white text-darkBlue font-bold font-play rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl cursor-pointer text-sm sm:text-base">
                  Start Your Journey Today
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
