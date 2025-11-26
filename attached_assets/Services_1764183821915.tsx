import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { services } from '../constants';
import { Link } from 'react-router';

const Services = () => {
  return (
    <div className="pt-20"> {/* Add padding for fixed navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-darkBlue to-lightBlue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold font-play mb-6">
            Our <span className="text-neonPink">Services</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to transform your business. 
            From software development to AI-driven analytics, we deliver excellence at every step.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-lightBlue bg-opacity-10 rounded-lg mb-6">
                <service.image className="w-8 h-8 text-darkBlue" />
              </div>
              <h3 className="text-xl font-bold font-play text-darkBlue mb-4">
                {service.title}
              </h3>
              <p className="text-textGray leading-relaxed mb-6">
                {service.desc}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-darkBlue font-semibold hover:text-lightBlue transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-play text-darkBlue mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-textGray mb-8 leading-relaxed">
            Let's discuss how our services can help you achieve your goals. 
            Our team is ready to craft the perfect solution for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-darkBlue text-white px-8 py-3 rounded-lg font-semibold hover:bg-lightBlue transition-colors duration-300"
          >
            Start Your Project Today
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;