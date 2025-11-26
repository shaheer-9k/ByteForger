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

      <section id="about" className="mt-14 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl text-darkBlue font-play font-bold mb-6">
              Get to <span className="text-darkPink">Know</span> Us Better
            </h2>
            <p className="text-lg text-foreground tracking-tight max-w-3xl">
              Empowering Businesses with Innovative Tech Solutions - ByteForger
              delivers cutting-edge software services to turn your vision into a
              digital masterpiece.
            </p>
          </div>

          <div className="mb-16 text-center">
            <p className="text-3xl font-semibold font-play text-foreground mb-8">
              About Us
            </p>
            <div className="flex flex-col items-center lg:w-3/4 mx-auto">
              <p className="text-center text-muted-foreground leading-relaxed mb-4">
                Welcome to ByteForger Solutions, a remote-first software company
                proudly registered in Texas, USA. We are a dynamic team of
                forward-thinking professionals passionate about crafting
                innovative technology solutions that empower businesses to succeed
                in today's fast-paced digital landscape.
              </p>
              <p className="text-center text-muted-foreground leading-relaxed">
                As a startup, we are driven by ambition, creativity, and a
                commitment to excellence. ByteForger Solutions specializes in a
                wide range of software services.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="w-full flex justify-center">
              <div className="w-full max-w-md bg-gradient-to-br from-darkBlue to-lightBlue rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold font-play text-white mb-6">Our Vision</h3>
                <p className="text-cream leading-relaxed mb-6">
                  We envision ByteForger Solutions as a beacon of trust and quality
                  in the software industry. Our mission is to continuously innovate,
                  deliver exceptional results, and grow alongside our clients.
                </p>
                <p className="text-cream/90 text-sm">
                  Whether you're a startup, a growing business, or an established
                  enterprise, we are here to help you turn your ideas into reality.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { title: "Client-Centered Approach", desc: "Your goals are at the heart of everything we do." },
                { title: "Agile Processes", desc: "We adapt to ensure timely and cost-effective delivery." },
                { title: "Cutting-Edge Expertise", desc: "Our team stays ahead to provide you with the latest technology solutions." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4" data-testid={`card-about-value-${idx}`}>
                  <div className="flex-shrink-0 w-6 h-6 text-neonPink flex items-center justify-center">✓</div>
                  <div>
                    <h4 className="font-bold font-play text-darkBlue mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold font-play text-darkBlue mb-4">
              At ByteForger, every project is an opportunity to forge something
              extraordinary. Let's build the future together!
            </h3>
            <p className="text-textGray leading-relaxed max-w-3xl mx-auto">
              Contact us today to start your journey with ByteForger Solutions.
              We're here to shape your vision into a digital masterpiece.
            </p>
          </div>
        </div>
      </section>

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
                  {tech.logo ? (
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="h-12 md:h-16 w-auto object-contain mb-3 group-hover:scale-110 transition-transform duration-300 filter dark:invert"
                    />
                  ) : (
                    <div className="h-12 md:h-16 flex items-center justify-center mb-3 text-3xl md:text-4xl font-bold text-darkBlue dark:text-lightBlue">
                      {tech.name.charAt(0)}
                    </div>
                  )}
                  <p className="text-darkBlue dark:text-lightBlue font-bold text-xs md:text-sm text-center group-hover:text-neonPink dark:group-hover:text-neonPink transition-colors">{tech.name}</p>
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
