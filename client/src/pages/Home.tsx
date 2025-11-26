import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { services, approaches, techStack } from "../lib/constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
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

      <section className="py-16 bg-gradient-to-r from-darkBlue to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-play mb-6">
            Transforming Ideas Into Digital Excellence
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            <strong>ByteForger</strong> is a technology consulting firm specializing in modern software development, 
            cloud architecture, and AI solutions. We partner with businesses to create scalable, 
            innovative digital experiences that drive growth and competitive advantage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center" data-testid="card-rapid-development">
              <div className="text-4xl mb-2">🚀</div>
              <div className="text-lg font-semibold">Rapid Development</div>
              <div className="text-sm text-blue-100 mt-2">Agile approach for fast delivery</div>
            </div>
            <div className="text-center" data-testid="card-innovation">
              <div className="text-4xl mb-2">💡</div>
              <div className="text-lg font-semibold">Innovation Focus</div>
              <div className="text-sm text-blue-100 mt-2">Latest tech & best practices</div>
            </div>
            <div className="text-center" data-testid="card-partnership">
              <div className="text-4xl mb-2">🤝</div>
              <div className="text-lg font-semibold">Partnership Mindset</div>
              <div className="text-sm text-blue-100 mt-2">Your success is our priority</div>
            </div>
          </div>
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
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            keyBoardControl={true}
            customTransition="transform 800ms ease-in-out"
            transitionDuration={800}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {services.map((service) => {
              const Icon = service.image;
              return (
                <div
                  key={service.id}
                  className="h-80 sm:h-96 md:h-[400px] lg:h-[450px] xl:h-[500px] bg-white p-4 m-2 rounded-lg shadow-md hover:shadow-xl flex flex-col items-center transition ease-out duration-300"
                  data-testid={`card-service-${service.id}`}
                >
                  <div className="my-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-darkBlue">
                    <Icon className="w-full h-full" />
                  </div>
                  <p className="font-semibold font-play text-center my-2 text-lg text-darkBlue">
                    {service.title}
                  </p>
                  <p className="text-balance mb-2 text-sm text-textGray text-center">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>

      <section id="methodology" className="bg-darkBlue mt-14">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-white text-2xl font-play">
              Workflow and <br />{" "}
              <span className="text-4xl font-semibold text-neonPink">
                Methodology
              </span>
            </p>
          </div>
          <div 
            ref={ref2}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center transition-opacity ease-in duration-700 ${
              isVisible2 ? "opacity-100" : "opacity-0"
            }`}
          >
            {approaches.map((item) => {
              const Icon = item.image;
              return (
                <div
                  key={item.id}
                  className="border border-lightBlue p-6 flex flex-row justify-between items-center w-full max-w-xl rounded-lg hover:bg-lightBlue/5 transition-all duration-300"
                  data-testid={`card-approach-${item.id}`}
                >
                  <div className="flex-shrink-0 text-neonBlue">
                    <Icon className="w-12 h-12" />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-lg font-bold font-play text-neonBlue mb-2">
                      {item.title}
                    </p>
                    <p className="text-cream font-light text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
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
