import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { links } from "../constants";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  // Auto-hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show navbar
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold - hide navbar
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Show navbar on mouse hover at top of page
  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;

    const handleMouseEnter = () => {
      // Clear any pending hide timeout
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      // Delay hiding to prevent flickering when mouse moves around
      hideTimeout = setTimeout(() => {
        // Only hide if scrolled down past threshold
        if (window.scrollY > 100) {
          setIsVisible(false);
        }
      }, 3000); // Increased to 3 seconds delay before hiding
    };

    // Create a hover area at the top of the page
    const hoverArea = document.createElement('div');
    hoverArea.style.position = 'fixed';
    hoverArea.style.top = '0';
    hoverArea.style.left = '0';
    hoverArea.style.right = '0';
    hoverArea.style.height = '80px'; // Increased to 80px hover area for easier access
    hoverArea.style.zIndex = '40'; // Below navbar (z-50) but above content
    hoverArea.style.pointerEvents = 'auto';
    
    hoverArea.addEventListener('mouseenter', handleMouseEnter);
    hoverArea.addEventListener('mouseleave', handleMouseLeave);
    
    document.body.appendChild(hoverArea);

    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      document.body.removeChild(hoverArea);
    };
  }, []);

  // Track active section for highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'methodology', 'techstack'];
      const scrollPos = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setNav(false);
    if (section.startsWith('#')) {
      // Handle anchor links
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first then scroll
        window.location.href = `/${section}`;
      } else {
        // If on home page, just scroll
        const element = document.getElementById(section.substring(1));
        if (element) {
          // Use a more reliable navbar height calculation with fallback
          const getNavbarHeight = () => {
            const navbar = document.querySelector('nav');
            if (navbar) {
              // Force reflow to get accurate measurements
              navbar.offsetHeight;
              return navbar.offsetHeight;
            }
            // Responsive fallback heights based on breakpoints
            if (window.innerWidth >= 1280) return 88; // xl: ~88px
            if (window.innerWidth >= 1024) return 80; // lg: ~80px
            if (window.innerWidth >= 768) return 72;  // md: ~72px
            return 64; // sm and below: ~64px
          };

          const navbarHeight = getNavbarHeight();
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight - 24; // Increased padding for safety

          // Use requestAnimationFrame for better timing
          requestAnimationFrame(() => {
            window.scrollTo({
              top: Math.max(0, offsetPosition), // Ensure we don't scroll to negative positions
              behavior: 'smooth'
            });
          });
        }
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If already on home page, just scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Navigate to home page and scroll to top
      navigate('/');
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100); // Small delay to ensure navigation completes
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/contact') {
      // If already on contact page, just scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Navigate to contact page and scroll to top
      navigate('/contact');
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100); // Small delay to ensure navigation completes
    }
  };

  const isLinkActive = (section: string) => {
    if (section.startsWith('#')) {
      return activeSection === section;
    } else {
      return location.pathname === section;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ${
      isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
    }`}>
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" onClick={handleLogoClick} className="w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48">
          <img src={logo} alt="ByteForger Logo" className="h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:flex-row items-center lg:text-lg md:text-md text-sm" aria-label="Main navigation">
          {links.map((item) => (
            item.section.startsWith('#') ? (
              <button
                key={item.id}
                className={`text-center mx-4 font-play transition-colors duration-300 ${
                  isLinkActive(item.section) 
                    ? 'text-lightBlue border-b-2 border-lightBlue' 
                    : 'text-black hover:text-lightBlue'
                }`}
                onClick={() => handleNavClick(item.section)}
              >
                {item.text}
              </button>
            ) : (
              <Link
                key={item.id}
                to={item.section}
                className={`text-center mx-4 font-play transition-colors duration-300 ${
                  isLinkActive(item.section) 
                    ? 'text-lightBlue border-b-2 border-lightBlue' 
                    : 'text-black hover:text-lightBlue'
                }`}
              >
                {item.text}
              </Link>
            )
          ))}
          <Link 
            to="/contact" 
            onClick={handleContactClick}
            className={`md:text-md text-sm rounded-3xl py-2 px-4 mx-2 font-play transition duration-300 ease-in-out transform hover:-translate-y-1 ${
              location.pathname === '/contact' 
                ? 'bg-lightBlue text-white' 
                : 'bg-darkBlue text-cream hover:bg-lightBlue'
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setNav(!nav)}
          className="md:hidden p-2 rounded-lg z-50 relative"
          aria-label="Toggle navigation menu"
        >
          {nav ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`${
            nav ? "translate-x-0" : "translate-x-full"
          } fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden`}
        >
          {links.map((item) => (
            item.section.startsWith('#') ? (
              <button
                key={item.id}
                className={`my-4 text-center text-lg font-play transition-colors duration-300 ${
                  isLinkActive(item.section) 
                    ? 'text-lightBlue' 
                    : 'text-black hover:text-lightBlue'
                }`}
                onClick={() => handleNavClick(item.section)}
              >
                {item.text}
              </button>
            ) : (
              <Link
                key={item.id}
                to={item.section}
                className={`my-4 text-center text-lg font-play transition-colors duration-300 ${
                  isLinkActive(item.section) 
                    ? 'text-lightBlue' 
                    : 'text-black hover:text-lightBlue'
                }`}
                onClick={() => setNav(false)}
              >
                {item.text}
              </Link>
            )
          ))}
          <Link
            to="/contact"
            onClick={(e) => {
              e.preventDefault();
              setNav(false);
              if (location.pathname === '/contact') {
                // If already on contact page, just scroll to top
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              } else {
                // Navigate to contact page and scroll to top
                navigate('/contact');
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }, 100); // Small delay to ensure navigation completes
              }
            }}
            className={`block text-lg rounded-xl py-2 px-8 my-4 font-play transition duration-300 ease-in-out transform hover:-translate-y-1 ${
              location.pathname === '/contact' 
                ? 'bg-lightBlue text-white' 
                : 'bg-darkBlue text-white hover:bg-lightBlue'
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
