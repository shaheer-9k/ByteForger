import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { services } from "../lib/constants";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { updatePageSEO, pageConfigs } from "../lib/seo";

export default function Services() {
  useEffect(() => {
    updatePageSEO(pageConfigs.services);
  }, []);
  return (
    <div className="pt-20">
      <Navbar />

      <main>
        <div className="bg-gradient-to-br from-darkBlue via-lightBlue to-neonPink text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-6xl font-bold font-play mb-6 bg-gradient-to-r from-white to-neonPink bg-clip-text text-transparent">
              Our <span className="text-neonPink">Services</span>
            </h1>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-90">
              Comprehensive digital solutions tailored to transform your business.
              From web development to cloud computing and Salesforce services, we deliver excellence at every step.
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
                    <span
                      data-testid={`link-learn-more-${service.id}`}
                      className="inline-flex items-center text-darkBlue font-semibold hover:text-lightBlue transition-colors cursor-pointer"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neonPink/5 via-transparent to-lightBlue/5"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold font-play text-darkBlue mb-6 bg-gradient-to-r from-darkBlue to-neonPink bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-textGray mb-10 leading-relaxed max-w-2xl mx-auto">
              Let's discuss how our comprehensive services can help you achieve your goals.
              Our expert team is ready to craft the perfect solution for your unique needs.
            </p>
            <Link href="/contact">
              <span
                data-testid="button-start-project"
                className="inline-block bg-gradient-to-r from-darkBlue to-neonPink text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Start Your Project Today
              </span>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
