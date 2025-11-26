import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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

      <section className="py-20 bg-gradient-to-r from-darkBlue via-blue-800 to-lightBlue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-neonPink rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-play mb-6">
            Transforming Ideas Into <span className="bg-gradient-to-r from-neonPink to-cream bg-clip-text text-transparent">Digital Excellence</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12">
            <strong>ByteForger</strong> is a technology consulting firm specializing in modern software development, 
            cloud architecture, and AI solutions. We partner with businesses to create scalable, 
            innovative digital experiences that drive growth and competitive advantage.
          </p>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
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
                className="group p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                data-testid={item.testid}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <div className="text-xl font-semibold mb-2">{item.title}</div>
                <div className="text-sm text-blue-100">{item.desc}</div>
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
          <div className="text-center mb-8 mt-14 px-4">
            <p className="text-foreground text-3xl font-semibold font-play mb-4">
              Our Services
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
            autoPlaySpeed={4000}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          >
            {services.map((service, index) => {
              const Icon = service.image;
              return (
                <div
                  key={service.id}
                  className="h-full min-h-80 sm:min-h-96 md:min-h-[400px] p-3"
                  data-testid={`card-service-${service.id}`}
                >
                  <div className="group h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl p-8 flex flex-col items-center justify-start transition-all duration-500 overflow-hidden relative border border-gray-100 hover:border-lightBlue">
                    <div className="absolute inset-0 bg-gradient-to-br from-darkBlue/0 via-transparent to-darkPink/0 group-hover:from-darkBlue/5 group-hover:to-darkPink/5 transition-all duration-500" />
                    
                    <div className="relative z-10 w-full flex flex-col items-center">
                      <div className="mb-4 p-4 bg-gradient-to-br from-darkBlue/10 to-lightBlue/10 rounded-2xl group-hover:scale-110 group-hover:from-darkBlue/20 group-hover:to-lightBlue/20 transition-all duration-300">
                        <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-darkBlue group-hover:text-darkPink transition-colors duration-300" />
                      </div>
                      <p className="font-bold font-play text-center text-lg md:text-xl text-darkBlue mb-3 group-hover:text-darkPink transition-colors duration-300">
                        {service.title}
                      </p>
                      <p className="text-center text-sm md:text-base text-textGray group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-darkBlue via-lightBlue to-darkPink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
                  className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 p-8 flex flex-row justify-between items-center w-full max-w-xl rounded-2xl hover:border-neonPink/50 hover:bg-white/20 transition-all duration-300"
                  data-testid={`card-approach-${item.id}`}
                >
                  <div className="flex-shrink-0 text-neonBlue group-hover:scale-110 group-hover:text-neonPink transition-all duration-300">
                    <Icon className="w-14 h-14" />
                  </div>
                  <div className="ml-6 flex-1">
                    <p className="text-lg font-bold font-play text-neonBlue group-hover:text-cream mb-2 transition-colors">
                      {item.title}
                    </p>
                    <p className="text-cream/90 font-light text-sm leading-relaxed">
                      {item.desc}
                    </p>
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
            <div className="flex flex-wrap justify-center md:justify-evenly items-center space-y-4 md:space-y-0 max-w-6xl mx-auto gap-6">
              {techStack[selectedCategory as keyof typeof techStack].map((tech, index) => (
                <a
                  key={index}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[120px] text-center"
                  data-testid={`link-tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <p className="text-darkBlue font-semibold text-sm">{tech.name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
