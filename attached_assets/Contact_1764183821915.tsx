import React from "react";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Lottie from "lottie-react";
import ContactJSON from "../assets/json/Contact JSON.json";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Section with improved responsiveness */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-6 lg:py-8 gap-6 lg:gap-8">
          <div className="w-full lg:w-3/5 xl:w-1/2">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-darkBlue font-play font-400 leading-tight">
                Get in <span className="text-darkPink">Touch</span> with Us
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Ready to transform your ideas into reality? Let's discuss how we can help you build exceptional digital solutions.
              </p>
              
              {/* Contact Information Card */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-darkBlue mb-3 flex items-center">
                  <svg className="w-5 h-5 text-darkPink mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  Direct Contact
                </h3>
                <div className="space-y-2">
                  <a 
                    href="mailto:info@byteforger.com" 
                    className="inline-flex items-center text-darkBlue hover:text-darkPink font-semibold text-base sm:text-lg transition-colors duration-200 group"
                  >
                    <span className="group-hover:underline">info@byteforger.com</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 xl:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <Lottie
                animationData={ContactJSON}
                loop={true}
                className="h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 xl:h-64 xl:w-64"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-darkPink/20 to-darkBlue/20 rounded-full blur-xl opacity-30"></div>
            </div>
          </div>
        </div>
        {/* Details */}
        {/* <div className="my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 px-6 bg-lightGray">
          Address Section
          <div className="flex flex-col items-center text-center">
            <img src={addressIcon} alt="Office address location" className="w-10 h-10 sm:w-12 sm:h-12" />
            <h3 className="mt-4 text-lg font-bold">Our Address</h3>
            <p className="mt-2 text-sm text-gray-600">
              1234 Main St, City, Country
            </p>
          </div>

          Email Section
          <div className="flex flex-col items-center text-center">
            <img src={mailIcon} alt="Email contact information" className="w-10 h-10 sm:w-12 sm:h-12" />
            <h3 className="mt-4 text-lg font-bold">Email Us</h3>
            <p className="mt-2 text-sm text-gray-600">contact@example.com</p>
          </div>

          Phone Section
          <div className="flex flex-col items-center text-center">
            <img src={callIcon} alt="Phone contact number" className="w-10 h-10 sm:w-12 sm:h-12" />
            <h3 className="mt-4 text-lg font-bold">Call Us</h3>
            <p className="mt-2 text-sm text-gray-600">+123 456 7890</p>
          </div>
        </div> */}

        {/* Main Content Grid with enhanced responsiveness */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 lg:gap-8 xl:gap-12 items-start">
          {/* Left Side - Additional Contact Info */}
          <div className="xl:col-span-2 order-2 xl:order-1">
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-darkBlue mb-4 flex items-center">
                    <span className="w-8 h-8 bg-darkPink rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">✓</span>
                    </span>
                    Why Choose ByteForger?
                  </h3>
                  <div className="grid gap-4">
                    {[
                      { icon: "🚀", title: "Expert Developers", desc: "Modern technology stack & best practices" },
                      { icon: "🎯", title: "Tailored Solutions", desc: "Customized for your business needs" },
                      { icon: "⚡", title: "Fast Response", desc: "24-hour response time guaranteed" },
                      { icon: "💎", title: "Premium Quality", desc: "Competitive pricing & transparent process" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold text-darkBlue text-sm lg:text-base">{item.title}</h4>
                          <p className="text-gray-600 text-xs lg:text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-darkBlue/5 to-darkPink/5 p-4 lg:p-6 rounded-xl border-l-4 border-darkPink">
                  <h4 className="font-bold text-darkBlue mb-2 flex items-center text-sm lg:text-base">
                    <svg className="w-5 h-5 text-darkPink mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Quick Response Promise
                  </h4>
                  <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                    We typically respond to all inquiries within 24 hours. For urgent projects, 
                    mention <span className="font-semibold text-darkPink">"URGENT"</span> in your subject line for priority handling.
                  </p>
                </div>

                <div className="bg-darkBlue p-4 lg:p-6 rounded-xl text-white">
                  <h4 className="font-bold mb-3 text-sm lg:text-base">Ready to Start?</h4>
                  <p className="text-blue-100 mb-4 text-xs lg:text-sm">
                    Let's build something amazing together. We're passionate about turning your ideas into reality.
                  </p>
                  <div className="flex items-center space-x-4 text-xs lg:text-sm">
                    <div className="flex items-center">
                      <span className="text-darkPink mr-1">🚀</span>
                      <span>Fast Delivery</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-darkPink mr-1">💼</span>
                      <span>Professional Service</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="xl:col-span-3 order-1 xl:order-2">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
