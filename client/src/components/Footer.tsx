import { Link, useLocation } from "wouter";
import { navLinks } from "@/lib/constants";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoUrl from "@assets/bf_logo_1764188700832.png";
import addressIcon from "@assets/addressIcon_1764185200769.png";
import callIcon from "@assets/callIcon_1764185200769.png";
import mailIcon from "@assets/mailIcon_1764185200770.png";

const socialLinks = [
  { icon: Facebook, url: "https://facebook.com/byteforger", name: "Facebook" },
  { icon: Instagram, url: "https://instagram.com/byteforger", name: "Instagram" },
  { icon: Twitter, url: "https://twitter.com/byteforger", name: "Twitter" },
  { icon: Linkedin, url: "https://linkedin.com/company/byteforger", name: "LinkedIn" },
];

export default function Footer() {
  const [location] = useLocation();

  const handleNavClick = (section: string) => {
    if (section === '/') {
      if (location === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.location.href = '/';
      }
    } else if (section.startsWith('#')) {
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
    <footer className="bg-slate-900 shadow-lg p-4 md:p-6 lg:px-8 mt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-start items-start lg:items-start lg:space-x-10 lg:space-y-0 space-y-6">
          <div className="lg:w-2/5 w-full px-4 md:px-6 lg:px-0">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-block hover:opacity-80 transition-opacity mb-4 flex-shrink-0 cursor-pointer"
            >
              <img src={logoUrl} alt="ByteForger Solutions - Enterprise Software Development" title="ByteForger Logo" className="h-auto w-32 sm:w-40 md:w-44 object-contain brightness-0 invert" loading="lazy" />
            </button>
            <p className="text-gray-400 my-4 text-sm md:text-base leading-relaxed">
              ByteForger - Crafting digital excellence through innovative software solutions.
              We help build and manage world-class development teams to bring your vision to life.
            </p>
            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-2">
                <img src={mailIcon} alt="Email icon" className="w-4 h-4 brightness-0 invert" loading="lazy" />
                <a href="mailto:info@byteforger.com" title="Send email to ByteForger" className="text-gray-400 hover:text-neonPink text-sm transition-colors">
                  info@byteforger.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img src={callIcon} alt="Phone icon" className="w-4 h-4 brightness-0 invert" loading="lazy" />
                <a href="tel:+1234567890" title="Call ByteForger" className="text-gray-400 hover:text-neonPink text-sm transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img src={addressIcon} alt="Address icon" className="w-4 h-4 brightness-0 invert" loading="lazy" />
                <p className="text-gray-400 text-sm">
                  Texas, USA
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start w-full md:w-1/2 lg:w-1/5">
            <p className="font-bold font-play text-lg lg:text-xl text-white my-2">
              Navigation
            </p>
            {navLinks.map((link, index) => (
              link.section.startsWith('#') || link.section === '/' ? (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.section)}
                  data-testid={`button-footer-${link.text.toLowerCase()}`}
                  className="text-gray-400 hover:text-neonPink my-1 text-sm md:text-base transition-colors text-left bg-none border-none p-0 cursor-pointer"
                >
                  {link.text}
                </button>
              ) : (
                <Link
                  key={index}
                  href={link.section}
                  data-testid={`link-footer-${link.text.toLowerCase()}`}
                  className="text-gray-400 hover:text-neonPink my-1 text-sm md:text-base transition-colors cursor-pointer inline-block"
                >
                  {link.text}
                </Link>
              )
            ))}
            <Link
              href="/contact"
              data-testid="link-footer-contact"
              className="text-gray-400 hover:text-neonPink my-1 text-sm md:text-base transition-colors cursor-pointer inline-block"
            >
              Contact
            </Link>
          </div>

          <div className="w-full md:w-1/2 lg:w-2/5">
            <p className="font-bold font-play text-lg lg:text-xl text-white my-2">
              Connect With Us
            </p>

            {/* Newsletter */}


            <p className="text-gray-400 my-2 text-sm md:text-base">
              Ready to start your next project? Let's discuss how we can help.
            </p>
            <Link
              href="/contact"
              data-testid="button-footer-get-started"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all text-sm font-play font-bold mt-2 mb-4 cursor-pointer"
            >
              Get Started
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
                    className="p-2.5 shadow-md rounded-full items-center bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-600 hover:border-transparent transition-all duration-300 group transform hover:scale-110"
                    aria-label={`Follow us on ${social.name}`}
                    data-testid={`link-social-${social.name.toLowerCase()}`}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4">
          <p className="text-center text-gray-500 text-xs md:text-sm">
            © 2025 ByteForger. All rights reserved. | Crafting Excellence in Digital Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
