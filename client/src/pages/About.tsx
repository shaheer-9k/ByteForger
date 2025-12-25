import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle, Target, Users, Zap } from "lucide-react";
import teamImg from "@assets/aboutUs_1764185200768.jpg";
import { services } from "../lib/constants";
import { updatePageSEO, pageConfigs } from "../lib/seo";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 2,
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

const bullets = [
  {
    title: "Client-Centered Approach",
    desc: "Your goals are at the heart of everything we do.",
    icon: Target,
  },
  {
    title: "Agile Processes",
    desc: "We adapt to ensure timely and cost-effective delivery.",
    icon: Zap,
  },
  {
    title: "Cutting-Edge Expertise",
    desc: "Our team stays ahead to provide you with the latest technology solutions.",
    icon: Users,
  },
];

export default function About() {
  useEffect(() => {
    updatePageSEO(pageConfigs.about);
  }, []);

  return (
    <div className="pt-20">
      <Navbar />
      <main className="mt-24">
        <div className="flex flex-col lg:flex-row justify-between items-center px-8 gap-8">
          <div className="lg:w-3/4">
            <h1 className="text-5xl text-darkBlue font-play font-bold my-6">
              Get to <span className="text-darkPink">Know</span> Us Better
            </h1>
            <p className="text-lg text-foreground tracking-tight">
              Empowering Businesses with Innovative Tech Solutions - ByteForger
              delivers cutting-edge software services to turn your vision into a
              digital masterpiece.
            </p>
          </div>
        </div>

        <div className="px-10 mt-32 mb-10">
          <h2 className="text-center text-foreground text-3xl font-semibold font-play">
            About Us
          </h2>

          <div className="flex flex-col items-center lg:w-3/4 mx-auto mt-4 p-4">
            <p className="text-center text-muted-foreground leading-relaxed">
              Welcome to ByteForger Solutions, a remote-first software company
              proudly registered in Texas, USA. We are a dynamic team of
              forward-thinking professionals passionate about crafting
              innovative technology solutions that empower businesses to succeed
              in today's fast-paced digital landscape.
            </p>
            <br />
            <p className="text-center text-muted-foreground leading-relaxed">
              As a startup, we are driven by ambition, creativity, and a
              commitment to excellence. ByteForger Solutions specializes in a
              wide range of software services, including:
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
            containerClass="carousel-container mt-8"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            autoPlay
            autoPlaySpeed={5000}
          >
            {services.map((service) => {
              const Icon = service.image;
              return (
                <div
                  key={service.id}
                  className="md:w-[65vh] lg:w-[65vh] mx-2 bg-white p-4 m-2 rounded-lg shadow-md hover:shadow-xl flex flex-row items-center transition ease-out duration-300"
                  data-testid={`card-about-service-${service.id}`}
                >
                  <div className="my-2 w-8 h-8 text-darkBlue">
                    <Icon className="w-full h-full" />
                  </div>
                  <div className="ml-4">
                    <h3 className="sm:text-sm lg:text-md font-semibold font-play text-start my-1 text-darkBlue">
                      {service.title}
                    </h3>
                    <p className="text-balance mb-2 text-sm text-textGray text-start">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>

        <div className="p-10 mt-20 mb-10 bg-darkBlue flex flex-col lg:flex-row gap-8">
          <div className="flex-1 text-start justify-center flex flex-col">
            <h2 className="text-cream text-3xl font-semibold font-play flex flex-row items-center gap-2">
              Our <span className="text-neonPink">Vision</span>
            </h2>
            <p className="text-cream mt-4 leading-relaxed">
              We envision ByteForger Solutions as a beacon of trust and quality
              in the software industry. Our mission is to continuously innovate,
              deliver exceptional results, and grow alongside our clients.
              Whether you're a startup, a growing business, or an established
              enterprise, we are here to help you turn your ideas into reality.
            </p>
          </div>
          <div className="flex-1">
            {bullets.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-row items-start text-left my-8 lg:ml-16"
                  data-testid={`card-vision-${index}`}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-neonPink" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-cream font-bold font-play text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-cream/80 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center px-8 lg:px-20 my-10 gap-8">
          <div className="w-full lg:w-2/5 flex justify-center">
            <img
              src={teamImg}
              alt="ByteForger Team"
              className="w-full max-w-md rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          <div className="w-full lg:w-3/5">
            <h2 className="text-darkBlue text-3xl font-bold font-play mb-4">
              At ByteForger, every project is an opportunity to forge something
              extraordinary. Let's build the future together!
            </h2>
            <p className="mt-4 text-textGray leading-relaxed">
              Contact us today to start your journey with ByteForger Solutions.
              We're here to shape your vision into a digital masterpiece.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
