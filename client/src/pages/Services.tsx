import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { services } from "../lib/constants";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div className="pt-20">
      <Navbar />
      
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

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.image;
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover-elevate"
                data-testid={`card-service-detail-${service.id}`}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-lightBlue bg-opacity-10 rounded-lg mb-6">
                  <Icon className="w-8 h-8 text-darkBlue" />
                </div>
                <h3 className="text-xl font-bold font-play text-darkBlue mb-4">
                  {service.title}
                </h3>
                <p className="text-textGray leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link href="/contact">
                  <a
                    data-testid={`link-learn-more-${service.id}`}
                    className="inline-flex items-center text-darkBlue font-semibold hover:text-lightBlue transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-play text-darkBlue mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-textGray mb-8 leading-relaxed">
            Let's discuss how our services can help you achieve your goals. 
            Our team is ready to craft the perfect solution for your needs.
          </p>
          <Link href="/contact">
            <a
              data-testid="button-start-project"
              className="inline-block bg-darkBlue text-white px-8 py-3 rounded-lg font-semibold hover:bg-lightBlue transition-colors duration-300"
            >
              Start Your Project Today
            </a>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
