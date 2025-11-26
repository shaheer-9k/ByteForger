import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { ReactComponent as Facebook } from "../assets/svgs/facebook-svgrepo-com.svg";
import { ReactComponent as Instagram } from "../assets/svgs/instagram-svgrepo-com.svg";
import { ReactComponent as Twitter } from "../assets/svgs/twitter-154-svgrepo-com.svg";
import { ReactComponent as Linkedin } from "../assets/svgs/linkedin-svgrepo-com.svg";
import { links } from "../constants";

const socialLinks = [
  { icon: Facebook, url: "https://facebook.com/byteforger", name: "Facebook" },
  { icon: Instagram, url: "https://instagram.com/byteforger", name: "Instagram" },
  { icon: Twitter, url: "https://twitter.com/byteforger", name: "Twitter" },
  { icon: Linkedin, url: "https://linkedin.com/company/byteforger", name: "LinkedIn" },
];

const Footer = () => {
  const location = useLocation();

  const handleNavClick = (section: string) => {
    if (section.startsWith('#')) {
      // Handle anchor links
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first then scroll
        window.location.href = `/${section}`;
      } else {
        // If on home page, just scroll
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
          {/* ByteForger Branding */}
          <div className="lg:w-2/5 w-full px-4 md:px-6 lg:px-0">
            <Link to="/" className="inline-block">
              <img src={logo} className="w-28 h-10 sm:w-32 sm:h-12 md:w-40 md:h-14 lg:w-48 lg:h-16 xl:w-56 xl:h-18" alt="ByteForger Logo" />
            </Link>
            <p className="text-textGray my-4 text-sm md:text-base leading-relaxed">
              ByteForger - Crafting digital excellence through innovative software solutions. 
              We help build and manage world-class development teams to bring your vision to life.
            </p>
            <p className="text-textGray text-sm">
              <span className="font-semibold">Email:</span> info@byteforger.com
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-col justify-start items-start w-full md:w-1/2 lg:w-1/5">
            <p className="font-bold font-play text-lg lg:text-xl text-darkBlue my-2">
              Navigation
            </p>
            <Link 
              to="/" 
              className="text-textGray hover:text-darkPink my-1 text-sm md:text-base transition-colors"
            >
              Home
            </Link>
            {links.map((link, index) => (
              link.section.startsWith('#') ? (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.section)}
                  className="text-textGray hover:text-darkPink my-1 text-sm md:text-base transition-colors text-left"
                >
                  {link.text}
                </button>
              ) : (
                <Link 
                  key={index}
                  to={link.section} 
                  className="text-textGray hover:text-darkPink my-1 text-sm md:text-base transition-colors"
                >
                  {link.text}
                </Link>
              )
            ))}
            <Link 
              to="/contact" 
              className="text-textGray hover:text-darkPink my-1 text-sm md:text-base transition-colors"
            >
              Contact
            </Link>
          </div>
          
          {/* Contact & Social */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <p className="font-bold font-play text-lg lg:text-xl text-darkBlue my-2">
              Connect With Us
            </p>
            <p className="text-textGray my-2 text-sm md:text-base">
              Ready to start your next project? Let's discuss how we can help.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-darkBlue text-white px-4 py-2 rounded-lg hover:bg-lightBlue transition-colors text-sm font-play mt-2 mb-4"
            >
              Get Started
            </Link>
            <div className="flex flex-row justify-start items-center space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 shadow-md rounded-full items-center bg-white hover:bg-darkBlue hover:text-white transition-colors group"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-4 h-4 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-4">
          <p className="text-center text-textGray text-xs md:text-sm">
            © 2025 ByteForger. All rights reserved. | Crafting Excellence in Digital Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
