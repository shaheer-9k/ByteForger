import { useEffect } from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { Mail, Clock, Zap, Shield, Target, Rocket, Briefcase } from "lucide-react";
import { updatePageSEO, pageConfigs } from "../lib/seo";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    updatePageSEO(pageConfigs.contact);
  }, []);
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900 transition-colors duration-300">
      <Navbar />
      <main>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-6 lg:py-8 gap-6 lg:gap-8">
            <div className="w-full lg:w-3/5 xl:w-1/2">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-darkBlue dark:text-lightBlue font-play font-bold leading-tight">
                  Get in <span className="text-pink-600 dark:text-neonPink">Touch</span> with Us
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground dark:text-gray-300 leading-relaxed max-w-2xl">
                  Ready to transform your ideas into reality? Let's discuss how we can help you build exceptional digital solutions.
                </p>

                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-darkBlue dark:text-lightBlue mb-3 flex items-center">
                    <Mail className="w-5 h-5 text-darkPink mr-2" />
                    Direct Contact
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="mailto:info@byteforger.com"
                      className="inline-flex items-center text-darkBlue dark:text-white hover:text-darkPink dark:hover:text-neonPink font-semibold text-base sm:text-lg transition-colors duration-200 group"
                      data-testid="link-email"
                    >
                      <span className="group-hover:underline">info@byteforger.com</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">We respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 lg:gap-8 xl:gap-12 items-start mb-16">
            <div className="xl:col-span-2 order-2 xl:order-1">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-700 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 flex items-center">
                      <span className="w-8 h-8 bg-neonPink rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">✓</span>
                      </span>
                      Why Choose ByteForger?
                    </h3>
                    <div className="grid gap-4">
                      {[
                        { icon: Zap, title: "Expert Developers", desc: "Modern technology stack & best practices" },
                        { icon: Target, title: "Tailored Solutions", desc: "Customized for your business needs" },
                        { icon: Clock, title: "Fast Response", desc: "24-hour response time guaranteed" },
                        { icon: Shield, title: "Premium Quality", desc: "Competitive pricing & transparent process" }
                      ].map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={index}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                            data-testid={`card-why-${index}`}
                          >
                            <Icon className="w-6 h-6 text-neonPink flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-semibold text-white text-sm lg:text-base">{item.title}</h4>
                              <p className="text-gray-400 text-xs lg:text-sm">{item.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-white/5 p-4 lg:p-6 rounded-xl border-l-4 border-neonPink backdrop-blur-sm">
                    <h4 className="font-bold text-white mb-2 flex items-center text-sm lg:text-base">
                      <Clock className="w-5 h-5 text-neonPink mr-2" />
                      Quick Response Promise
                    </h4>
                    <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">
                      We typically respond to all inquiries within 24 hours. For urgent projects,
                      mention <span className="font-bold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-1.5 py-0.5 rounded">"URGENT"</span> in your subject line for priority handling.
                    </p>
                  </div>

                  <div className="bg-slate-950/50 p-4 lg:p-6 rounded-xl text-white border border-gray-700">
                    <h4 className="font-bold mb-3 text-sm lg:text-base">Ready to Start?</h4>
                    <p className="text-blue-100 mb-4 text-xs lg:text-sm">
                      Let's build something amazing together. We're passionate about turning your ideas into reality.
                    </p>
                    <div className="flex items-center space-x-4 text-xs lg:text-sm">
                      <div className="flex items-center">
                        <Rocket className="w-4 h-4 text-neonPink mr-2" />
                        <span>Fast Delivery</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 text-neonPink mr-2" />
                        <span>Professional Service</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:col-span-3 order-1 xl:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div >
  );
}
