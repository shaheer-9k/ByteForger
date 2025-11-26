import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { approaches, case_studies, icons, services, techUrls } from "../constants";
import Footer from "../components/Footer";
import { useIsVisible } from "../hooks/useIsVisible";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const [stacks, setStacks] = useState(icons[0].items);
  const [selectedIcon, setSelectedIcon] = useState(icons[0].name);
  const [showButton, setShowButton] = useState(false);
  const searchTerm = useSelector((state: RootState) => state.search.value);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // const highlightText = (text: string, term: string) => {
  //   if (!term) return text;
  //   const regex = new RegExp(`(${term})`, "gi");
  //   return (
  //     <span
  //       dangerouslySetInnerHTML={{
  //         __html: text.replace(regex, "<mark>$1</mark>"),
  //       }}
  //     />
  //   );
  // };

  const ref1 = useRef<HTMLDivElement | null>(null);
  const visible1 = useIsVisible(ref1);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const visible2 = useIsVisible(ref2);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const visible3 = useIsVisible(ref3);
  const ref4 = useRef<HTMLDivElement | null>(null);
  const visible4 = useIsVisible(ref4);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Check for URL hash and scroll to the corresponding section
    const hash = window.location.hash;
    if (hash) {
      const targetSection = document.querySelector(hash); // Find the section by ID
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the section
      }
    }
  }, []);

  
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <section id="hero" className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 w-full">
        <Hero />
      </section>

      {/* Company Mission */}
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
            <div className="text-center">
              <div className="text-2xl font-bold text-darkPink mb-2">🚀</div>
              <div className="text-lg">Rapid Development</div>
              <div className="text-sm text-gray-600 mt-2">Agile approach for fast delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-darkPink mb-2">💡</div>
              <div className="text-lg">Innovation Focus</div>
              <div className="text-sm text-gray-600 mt-2">Latest tech & best practices</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-darkPink mb-2">🤝</div>
              <div className="text-lg">Partnership Mindset</div>
              <div className="text-sm text-gray-600 mt-2">Your success is our priority</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services">
        <div
          ref={ref1}
          className={`transition-opacity ease-in duration-700 ${
            visible1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center mb-8 mt-14">
            <p className="text-black text-3xl font-semibold font-play mb-4">
              Our Services
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
              ByteForger delivers comprehensive technology solutions to transform your business. 
              From cutting-edge web development to scalable cloud infrastructure and AI integration, 
              we're your partner in digital innovation.
            </p>
          </div>
        {/* <div className="flex p-4 flex-wrap justify-center"> */}
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition=" transform 800ms ease-in-out"
          transitionDuration={800}
          containerClass="carousel-container "
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          // itemClass="carousel-item-padding-40-px"
          // className="border-2"
        >
          {services.map((service: any) => {
            return (
              <button
                key={service.id} // Add a unique key for each item
                className="h-80 sm:h-96 md:h-[400px] lg:h-[450px] xl:h-[500px] bg-white p-4 m-2 rounded-lg shadow-md flex flex-col items-center transition ease-out duration-300"
              >
                <div className="my-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center">{<service.image />}</div>
                <p className="font-semibold font-play text-center my-2 text-lg text-darkBlue">
                  {service.title}
                </p>
                <p className="text-balance mb-2 text-sm text-textGray">
                  {service.desc}
                </p>
              </button>
            );
          })}
        </Carousel>

        {/* </div> */}
        </div>
      </section>
      {/* Workflow and Methodology */}
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
          <div ref={ref3} className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {approaches.map((item: any, index: number) => (
              <div
                key={index}
                className={`border-[1px] border-lightBlue p-6 flex flex-row justify-between items-center transition-opacity ease-in duration-700 w-full max-w-xl ${
                  visible3 ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex-shrink-0">{<item.image />}</div>
                <div className="ml-4 flex-1">
                  <p className="text-lg font-bold font-play text-neonBlue mb-2">
                    {item.title}
                  </p>
                  <p className="text-cream font-thin text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Techstack */}
      <section id="techstack" className="mt-14">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <p className="text-white text-2xl font-play">
              Our
              <br /> <span className="text-4xl font-semibold text-neonPink">Techstack</span>
            </p>
          </div>
          <div
            ref={ref4}
            className={`transition-opacity ease-in duration-700 ${
              visible4 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-wrap justify-center items-center mx-4 md:justify-evenly md:mx-20 space-y-4 lg:mx-44 md:space-y-0 mb-12 max-w-4xl mx-auto">
              {icons.map((icon: any) => (
                <button
                  key={icon.name}
                  onClick={() => {
                    setStacks(icon.items);
                    setSelectedIcon(icon.name);
                  }}
                  className={`font-semibold text-center my-2 md:my-4 text-${
                    selectedIcon === icon.name ? "darkPink" : "darkBlue"
                  } text-sm md:text-md lg:text-lg mx-2`}
                >
                  {icon.name}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap justify-center md:justify-evenly items-center space-y-4 md:space-y-0 max-w-6xl mx-auto">
              {stacks.map((StackIcon: any, index: number) => {
                // Get component name from the function string (a bit hacky but works)
                const getComponentName = (component: any) => {
                  const funcStr = component.toString();
                  if (funcStr.includes('react-2')) return 'Reactjs';
                  if (funcStr.includes('vue-9')) return 'Vue';
                  if (funcStr.includes('angular-icon-1')) return 'Angular';
                  if (funcStr.includes('tailwind-css-2')) return 'Tailwind';
                  if (funcStr.includes('sass-1')) return 'Sass';
                  if (funcStr.includes('nodejs-1')) return 'Nodejs';
                  if (funcStr.includes('expressjs-ar21')) return 'Express';
                  if (funcStr.includes('Group')) return 'Php';
                  if (funcStr.includes('rails-1')) return 'Ruby';
                  if (funcStr.includes('django-community')) return 'Django';
                  if (funcStr.includes('mongodb-icon-2')) return 'Mongo';
                  if (funcStr.includes('mysql-3')) return 'Sql';
                  if (funcStr.includes('postgresql')) return 'Postgres';
                  if (funcStr.includes('firebase-1')) return 'Firebase';
                  if (funcStr.includes('aws-2')) return 'Aws';
                  if (funcStr.includes('google-cloud-1')) return 'Google';
                  if (funcStr.includes('microsoft-azure-2')) return 'Microsoft';
                  if (funcStr.includes('browserstack')) return 'Browser';
                  if (funcStr.includes('selenium-svgrepo-com')) return 'Selenium';
                  if (funcStr.includes('docker-1-logo-svgrepo-com')) return 'Docker';
                  if (funcStr.includes('kubernetes-svgrepo-com')) return 'Kubernetes';
                  if (funcStr.includes('jenkins-svgrepo-com')) return 'Jenkins';
                  if (funcStr.includes('github-142-svgrepo-com')) return 'Github';
                  if (funcStr.includes('terraform-icon-svgrepo-com')) return 'Terraform';
                  if (funcStr.includes('keras-svgrepo-com')) return 'Keras';
                  if (funcStr.includes('tensorflow-svgrepo-com')) return 'TensorFlow';
                  if (funcStr.includes('scikitlearn-svgrepo-com')) return 'ScikitLearn';
                  if (funcStr.includes('pytorch-svgrepo-com')) return 'PyTorch';
                  if (funcStr.includes('openai-svgrepo-com')) return 'OpenAI';
                  return 'Unknown';
                };
                
                const techName = getComponentName(StackIcon);
                const url = techUrls[techName] || '#';
                
                return (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-transform duration-200 hover:scale-110 hover:drop-shadow-lg"
                    aria-label={`Learn more about ${techName}`}
                  >
                    <StackIcon
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 py-2 group-hover:opacity-80 transition-all duration-200"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {showButton && (
        <button
          type="button"
          onClick={backToTop}
          className={` ${
            showButton ? `inline-block` : `hidden`
          } fixed bottom-[40px] right-[40px] p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out`}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            className="w-4 h-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            ></path>
          </svg>
        </button>
      )}
      <Footer />
    </div>
  );
};

export default Home;
