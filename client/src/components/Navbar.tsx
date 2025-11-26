import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { navLinks } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logoUrl from "@assets/bf_logo_1764188700832.png";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);

      const sections = ["services", "portfolio", "methodology", "techstack"];
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;

    const handleMouseEnter = () => {
      if (hideTimeout) clearTimeout(hideTimeout);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      hideTimeout = setTimeout(() => {
        if (window.scrollY > 100) {
          setIsVisible(false);
        }
      }, 3000);
    };

    const hoverArea = document.createElement("div");
    hoverArea.style.cssText = "position:fixed;top:0;left:0;right:0;height:80px;z-index:40;pointer-events:auto";
    
    hoverArea.addEventListener("mouseenter", handleMouseEnter);
    hoverArea.addEventListener("mouseleave", handleMouseLeave);
    
    document.body.appendChild(hoverArea);

    return () => {
      if (hideTimeout) clearTimeout(hideTimeout);
      document.body.removeChild(hoverArea);
    };
  }, []);

  const handleNavClick = (section: string) => {
    setNav(false);
    if (section.startsWith("#")) {
      if (location !== "/") {
        window.location.href = `/${section}`;
      } else {
        const element = document.getElementById(section.substring(1));
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight - 24;

          requestAnimationFrame(() => {
            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: "smooth"
            });
          });
        }
      }
    }
  };

  const isLinkActive = (section: string) => {
    if (section.startsWith("#")) {
      return activeSection === section;
    } else {
      return location === section;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-gray-800 transition-all duration-300 ${
      isVisible ? "transform translate-y-0" : "transform -translate-y-full"
    }`}>
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto w-full">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setNav(false);
          }}
          data-testid="button-logo"
          className="hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-2"
          aria-label="ByteForger Home"
        >
          <img src={logoUrl} alt="ByteForger Logo" className="h-auto w-40 md:w-48 object-contain flex-shrink-0" />
        </button>

        <nav className="hidden md:flex md:flex-row items-center lg:text-lg md:text-md text-sm gap-2" aria-label="Main navigation">
          {navLinks.map((item) => (
            item.section.startsWith("#") ? (
              <button
                key={item.id}
                data-testid={`button-nav-${item.text.toLowerCase()}`}
                className={`text-center mx-4 font-play transition-colors duration-300 text-foreground dark:text-gray-200 ${
                  isLinkActive(item.section) 
                    ? "text-lightBlue border-b-2 border-lightBlue dark:text-lightBlue dark:border-lightBlue" 
                    : "hover:text-lightBlue dark:hover:text-lightBlue"
                }`}
                onClick={() => handleNavClick(item.section)}
              >
                {item.text}
              </button>
            ) : (
              <Link key={item.id} href={item.section}>
                <div
                  data-testid={`link-${item.text.toLowerCase()}`}
                  className={`text-center mx-4 font-play transition-colors duration-300 text-foreground dark:text-gray-200 cursor-pointer ${
                    isLinkActive(item.section) 
                      ? "text-lightBlue border-b-2 border-lightBlue dark:text-lightBlue dark:border-lightBlue" 
                      : "hover:text-lightBlue dark:hover:text-lightBlue"
                  }`}
                >
                  {item.text}
                </div>
              </Link>
            )
          ))}
          <Link href="/contact">
            <div
              data-testid="link-contact"
              className={`text-xs sm:text-sm md:text-base rounded-full py-2.5 px-6 md:px-7 mx-2 font-play font-bold transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 whitespace-nowrap flex items-center gap-1 bg-gradient-to-r cursor-pointer ${
                location === "/contact" 
                  ? "from-lightBlue to-neonBlue text-white shadow-md" 
                  : "from-darkBlue to-lightBlue text-white shadow-md hover:shadow-xl dark:from-neonPink dark:to-lightBlue"
              }`}
            >
              <span>Contact Us</span>
            </div>
          </Link>
          <ThemeToggle />
        </nav>

        <button
          onClick={() => setNav(!nav)}
          className="md:hidden p-2 rounded-lg z-50 relative hover-elevate"
          aria-label="Toggle navigation menu"
          data-testid="button-menu-toggle"
        >
          {nav ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div
          className={`${
            nav ? "translate-x-0" : "translate-x-full"
          } fixed top-16 left-0 right-0 bottom-0 bg-white dark:bg-gray-900 z-40 flex flex-col items-center justify-start pt-8 transition-transform duration-300 ease-in-out md:hidden overflow-y-auto`}
        >
          {navLinks.map((item) => (
            item.section.startsWith("#") ? (
              <button
                key={item.id}
                data-testid={`button-mobile-nav-${item.text.toLowerCase()}`}
                className={`w-full py-3 px-4 text-center text-base sm:text-lg font-play transition-colors duration-300 border-b border-gray-100 dark:border-gray-700 text-foreground dark:text-gray-200 ${
                  isLinkActive(item.section) 
                    ? "text-lightBlue bg-blue-50 dark:bg-gray-800 dark:text-lightBlue" 
                    : "hover:text-lightBlue hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-lightBlue"
                }`}
                onClick={() => handleNavClick(item.section)}
              >
                {item.text}
              </button>
            ) : (
              <Link key={item.id} href={item.section}>
                <div
                  data-testid={`link-mobile-${item.text.toLowerCase()}`}
                  className={`w-full py-3 px-4 text-center text-base sm:text-lg font-play transition-colors duration-300 border-b border-gray-100 dark:border-gray-700 block text-foreground dark:text-gray-200 cursor-pointer ${
                    isLinkActive(item.section) 
                      ? "text-lightBlue bg-blue-50 dark:bg-gray-800 dark:text-lightBlue" 
                      : "hover:text-lightBlue hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-lightBlue"
                  }`}
                  onClick={() => setNav(false)}
                >
                  {item.text}
                </div>
              </Link>
            )
          ))}
          <Link href="/contact">
            <div
              data-testid="link-mobile-contact"
              onClick={() => setNav(false)}
              className={`w-4/5 text-center text-base font-play font-bold rounded-full py-3 px-6 my-3 transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 bg-gradient-to-r cursor-pointer ${
                location === "/contact" 
                  ? "from-lightBlue to-neonBlue text-white shadow-md" 
                  : "from-darkBlue to-lightBlue text-white shadow-md dark:from-neonPink dark:to-lightBlue"
              }`}
            >
              Contact Us
            </div>
          </Link>
          <div className="w-full flex justify-center py-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
