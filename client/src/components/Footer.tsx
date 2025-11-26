import { Link, useLocation } from "wouter";
import { navLinks } from "@/lib/constants";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Facebook, url: "https://facebook.com/byteforger", name: "Facebook" },
  { icon: Instagram, url: "https://instagram.com/byteforger", name: "Instagram" },
  { icon: Twitter, url: "https://twitter.com/byteforger", name: "Twitter" },
  { icon: Linkedin, url: "https://linkedin.com/company/byteforger", name: "LinkedIn" },
];

export default function Footer() {
  const [location] = useLocation();

  const handleNavClick = (section: string) => {
    if (section.startsWith('#')) {
      if (location !== '/') {
        window.location.href = `/${section}`;
      } else {
        const element = document.getElementById(section.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="bg-gray-50 shadow-inner p-4 md:p-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-start items-start lg:items-start lg:space-x-10 lg:space-y-0 space-y-6">
          <div className="lg:w-2/5 w-full px-4 md:px-6 lg:px-0">
            <Link href="/">
              <a className="inline-block text-3xl font-play font-bold text-darkBlue hover:text-lightBlue transition-colors">
                ByteForger
              </a>
            </Link>
            <p className="text-textGray my-4 text-sm md:text-base leading-relaxed">
              ByteForger - Crafting digital excellence through innovative software solutions. 
              We help build and manage world-class development teams to bring your vision to life.
            </p>
            <p className="text-textGray text-sm">
              <span className="font-semibold">Email:</span> info@byteforger.com
            </p>
          </div>
          
          <div className="flex flex-col justify-start items-start w-full md:w-1/2 lg:w-1/5">
            <p className="font-bold font-play text-lg lg:text-xl text-darkBlue my-2">
              Navigation
            </p>
            {navLinks.map((link, index) => (
              link.section.startsWith('#') ? (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.section)}
                  data-testid={`button-footer-${link.text.toLowerCase()}`}
                  className="text-textGray hover:text-darkPink my-1 text-sm md:text-base transition-colors text-left"
                >
                  {link.text}
                </button>
              ) : (
                <Link key={index} href={link.section}>
                  <a 
                    data-testid={`link-footer-${link.text.toLowerCase()}`}
                    className="text-textGray hover:text-darkPink my-1 text-sm md:text-base transition-colors"
                  >
                    {link.text}
                  </a>
                </Link>
              )
            ))}
            <Link href="/contact">
              <a 
                data-testid="link-footer-contact"
                className="text-textGray hover:text-darkPink my-1 text-sm md:text-base transition-colors"
              >
                Contact
              </a>
            </Link>
          </div>
          
          <div className="w-full md:w-1/2 lg:w-2/5">
            <p className="font-bold font-play text-lg lg:text-xl text-darkBlue my-2">
              Connect With Us
            </p>
            <p className="text-textGray my-2 text-sm md:text-base">
              Ready to start your next project? Let's discuss how we can help.
            </p>
            <Link href="/contact">
              <a 
                data-testid="button-footer-get-started"
                className="inline-block bg-darkBlue text-white px-4 py-2 rounded-lg hover:bg-lightBlue transition-colors text-sm font-play mt-2 mb-4"
              >
                Get Started
              </a>
            </Link>
            <div className="flex flex-row justify-start items-center space-x-4 mt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 shadow-md rounded-full items-center bg-white hover:bg-darkBlue hover:text-white transition-colors group"
                    aria-label={`Follow us on ${social.name}`}
                    data-testid={`link-social-${social.name.toLowerCase()}`}
                  >
                    <Icon className="w-4 h-4 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-4">
          <p className="text-center text-textGray text-xs md:text-sm">
            © 2025 ByteForger. All rights reserved. | Crafting Excellence in Digital Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
