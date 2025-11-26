import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { navLinks } from "@/lib/constants";
import { Menu, X } from "lucide-react";

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

      const sections = ["services", "methodology", "techstack"];
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
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ${
      isVisible ? "transform translate-y-0" : "transform -translate-y-full"
    }`}>
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <Link href="/" data-testid="link-home">
          <a className="text-2xl md:text-3xl font-play font-bold text-darkBlue hover:text-lightBlue transition-colors">
            ByteForger
          </a>
        </Link>

        <nav className="hidden md:flex md:flex-row items-center lg:text-lg md:text-md text-sm" aria-label="Main navigation">
          {navLinks.map((item) => (
            item.section.startsWith("#") ? (
              <button
                key={item.id}
                data-testid={`button-nav-${item.text.toLowerCase()}`}
                className={`text-center mx-4 font-play transition-colors duration-300 ${
                  isLinkActive(item.section) 
                    ? "text-lightBlue border-b-2 border-lightBlue" 
                    : "text-foreground hover:text-lightBlue"
                }`}
                onClick={() => handleNavClick(item.section)}
              >
                {item.text}
              </button>
            ) : (
              <Link key={item.id} href={item.section}>
                <a
                  data-testid={`link-${item.text.toLowerCase()}`}
                  className={`text-center mx-4 font-play transition-colors duration-300 ${
                    isLinkActive(item.section) 
                      ? "text-lightBlue border-b-2 border-lightBlue" 
                      : "text-foreground hover:text-lightBlue"
                  }`}
                >
                  {item.text}
                </a>
              </Link>
            )
          ))}
          <Link href="/contact">
            <a
              data-testid="link-contact"
              className={`md:text-md text-sm rounded-3xl py-2 px-4 mx-2 font-play transition duration-300 ease-in-out transform hover:-translate-y-1 ${
                location === "/contact" 
                  ? "bg-lightBlue text-white" 
                  : "bg-darkBlue text-cream hover:bg-lightBlue"
              }`}
            >
              Contact Us
            </a>
          </Link>
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
          } fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden`}
        >
          {navLinks.map((item) => (
            item.section.startsWith("#") ? (
              <button
                key={item.id}
                data-testid={`button-mobile-nav-${item.text.toLowerCase()}`}
                className={`my-4 text-center text-lg font-play transition-colors duration-300 ${
                  isLinkActive(item.section) 
                    ? "text-lightBlue" 
                    : "text-foreground hover:text-lightBlue"
                }`}
                onClick={() => handleNavClick(item.section)}
              >
                {item.text}
              </button>
            ) : (
              <Link key={item.id} href={item.section}>
                <a
                  data-testid={`link-mobile-${item.text.toLowerCase()}`}
                  className={`my-4 text-center text-lg font-play transition-colors duration-300 ${
                    isLinkActive(item.section) 
                      ? "text-lightBlue" 
                      : "text-foreground hover:text-lightBlue"
                  }`}
                  onClick={() => setNav(false)}
                >
                  {item.text}
                </a>
              </Link>
            )
          ))}
          <Link href="/contact">
            <a
              data-testid="link-mobile-contact"
              onClick={() => setNav(false)}
              className={`block text-lg rounded-xl py-2 px-8 my-4 font-play transition duration-300 ease-in-out transform hover:-translate-y-1 ${
                location === "/contact" 
                  ? "bg-lightBlue text-white" 
                  : "bg-darkBlue text-white hover:bg-lightBlue"
              }`}
            >
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
