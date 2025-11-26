import React from "react";
import Navbar from "../components/Navbar";
import Lottie from "lottie-react";
import AboutJSON from "../assets/json/About JSON.json";
import Carousel from "react-multi-carousel";
import { about_services } from "../constants";
import { ReactComponent as Tick } from "../assets/svgs/tick.svg";
import image from "../assets/images/aboutUs.jpg";
import Footer from "../components/Footer";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const About = () => {
  const bullets = [
    {
      title: "Client-Centered Approach",
      desc: "Your goals are at the heart of everything we do.",
    },
    {
      title: "Agile Processes",
      desc: "We adapt to ensure timely and cost-effective delivery.",
    },
    {
      title: "Cutting-Edge Expertise",
      desc: "Our team stays ahead to provide you with the latest technology solutions.",
    },
  ];
  return (
    <div className="pt-20"> {/* Add padding for fixed navbar */}
      <Navbar />
      <div className="mt-24">
        {/* Hero Section */}
        <div className="flex flex-row justify-between items-center pl-8">
          <div className="lg:w-3/4">
            <p className="text-5xl text-darkBlue font-play font-400 my-6">
              Get to <span className="text-darkPink">Know</span> Us Better
            </p>
            <p className="text-lg text-black tracking-tight">
              Empowering Businesses with Innovative Tech Solutions-ByteForger
              delivers cutting-edge software services to turn your vision into a
              digital masterpiece.
            </p>
          </div>
          <div className="hidden lg:flex flex-col items-end">
            <Lottie
              animationData={AboutJSON}
              loop={true}
              className="lg:w-4/5 mr-10"
            />
          </div>
        </div>
        {/* Description */}
        <div className="px-10 mt-32 mb-10">
          <p className="text-center text-black text-3xl font-semibold font-play">
            About Us
          </p>

          {/* Description */}
          <div className="flex flex-col items-center lg:w-3/4 mx-auto mt-4 p-4">
            <p className="text-center text-textGray">
              Welcome to ByteForger Solutions, a remote-first software company
              proudly registered in Texas, USA. We are a dynamic team of
              forward-thinking professionals passionate about crafting
              innovative technology solutions that empower businesses to succeed
              in today’s fast-paced digital landscape.
            </p>
            <br />
            <p className="text-center text-textGray">
              As a startup, we are driven by ambition, creativity, and a
              commitment to excellence. ByteForger Solutions specializes in a
              wide range of software services, including:
            </p>
          </div>

          {/* Carousel */}
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            customTransition="transform 800ms ease-in-out"
            transitionDuration={800}
            containerClass="carousel-container mt-8"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            autoPlay
            autoPlaySpeed={5000}
          >
            {about_services.map((service: any) => (
              <button
                key={service.id} // Add a unique key for each item
                className="md:w-[65vh] lg:w-[65vh] mx-2 bg-white p-4 m-2 rounded-lg shadow-md flex flex-row items-center transition ease-out duration-300"
              >
                <div className="my-2 w-8 h-8">{<service.image />}</div>
                <div className="ml-4">
                  <p className="sm:text-sm lg:text-md font-semibold font-play text-start my-1 text-darkBlue">
                    {service.title}
                  </p>
                  <p className="text-balance mb-2 text-sm text-textGray text-start">
                    {service.desc}
                  </p>
                </div>
              </button>
            ))}
          </Carousel>
        </div>

        {/* Vision */}
        <div className="p-10 mt-20 mb-10 bg-darkBlue flex flex-row">
          <div className="flex-1 text-start justify-center flex flex-col">
            <p
              className={`  text-cream text-3xl font-semibold font-play flex flex-row`}
            >
              Our <span className="text-neonPink ml-2">Vision</span>
            </p>
            <p className={` text-cream mt-4`}>
              We envision ByteForger Solutions as a beacon of trust and quality
              in the software industry. Our mission is to continuously innovate,
              deliver exceptional results, and grow alongside our clients.
              Whether you’re a startup, a growing business, or an established
              enterprise, we are here to help you turn your ideas into reality.
            </p>
          </div>
          <div className="flex-1 ml-6">
            {bullets.map((item: any) => (
              <div className="flex flex-row items-center text-center my-10 ml-16">
                <Tick />
                <p className=" text-cream font-bold font-play text-3xl ml-4">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Ending */}
        <div className="flex flex-row justify-center px-20 my-10">
          <img src={image} width={400} height={400} />
          <div className="mt-20 ml-4">
            <p className="text-darkBlue text-3xl font-bold font-play">
              At ByteForger, every project is an opportunity to forge something
              extraordinary. Let’s build the future together!
            </p>
            <p className="mt-4 text-textGray">
              Contact us today to start your journey with ByteForger Solutions.
              We’re here to shape your vision into a digital masterpiece.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
