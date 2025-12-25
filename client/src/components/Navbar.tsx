import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { navLinks } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logoUrl from "@assets/bf_logo_1764188700832.png";
import { useScrollToSection } from "@/hooks/useScrollToSection";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [location] = useLocation();
  const { scrollToSection } = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);

      const sections = ["hero", "services", "methodology", "portfolio", "techstack", "about"];
      const scrollPos = window.scrollY + 100;

      // If at the very top of the page AND on home page, highlight Home
      if (currentScrollY < 50 && window.location.pathname === "/") {
        setActiveSection("/");
        return;
      }

      // If not on home page, do not highlight sections based on scroll
      if (window.location.pathname !== "/") {
        setActiveSection("");
        return;
      }

      let found = false;
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveSection(`#${section}`);
            found = true;
            break;
          }
        }
      }
      if (!found) {
        setActiveSection("");
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

    // LOGIC UPDATE: Handle Home ("/") specifically
    if (section === "/") {
      if (location === "/") {
        // If already on home page, scroll to absolute top
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // If on another page, navigate to home (browser default handles top scroll usually, 
        // or you can add a generic scroll-to-top on route change in your app router)
        window.location.href = "/";
      }
    } else if (section.startsWith("#")) {
      if (location !== "/") {
        window.location.href = `/${section}`;
      } else {
        scrollToSection(section.substring(1));
      }
    }
  };

  const isLinkActive = (section: string) => {
    if (section === "/") {
      return activeSection === "/";
    } else if (section.startsWith("#")) {
      return activeSection === section;
    } else {
      return location === section;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-gray-800 transition-all duration-300 ${isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}>
      <div className="flex justify-between items-center px-3 sm:px-4 py-2 sm:py-4 max-w-7xl mx-auto w-full">
        <button
          // LOGIC UPDATE: Scroll to absolute top instead of "hero" section
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-testid="button-logo"
          className="hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-2 flex-shrink-0"
          aria-label="ByteForger Home"
        >
          <img src={logoUrl} alt="ByteForger Logo" className="h-auto w-24 sm:w-32 md:w-40 lg:w-48 object-contain flex-shrink-0" />
        </button>

        <nav className="hidden md:flex md:flex-row items-center lg:text-base md:text-xs xl:text-sm gap-1 md:gap-2 lg:gap-4" aria-label="Main navigation">
          {navLinks.map((item) => (
            // LOGIC UPDATE: Treat "/" (Home) as a button action, not a Link
            item.section.startsWith("#") || item.section === "/" ? (
              <button
                key={item.id}
                data-testid={`button-nav-${item.text.toLowerCase()}`}
                className={`px-2 lg:px-3 py-2 font-play transition-colors duration-300 text-foreground dark:text-gray-200 whitespace-nowrap ${isLinkActive(item.section)
                    ? "text-lightBlue border-b-2 border-lightBlue dark:text-lightBlue dark:border-lightBlue"
                    : "hover:text-lightBlue dark:hover:text-lightBlue"
                  }`}
                onClick={() => handleNavClick(item.section)}
              >
                {item.text}
              </button>
            ) : (
              <Link
                key={item.id}
                href={item.section}
                data-testid={`link-${item.text.toLowerCase()}`}
                className={`px-2 lg:px-3 py-2 font-play transition-colors duration-300 text-foreground dark:text-gray-200 cursor-pointer whitespace-nowrap ${isLinkActive(item.section)
                    ? "text-lightBlue border-b-2 border-lightBlue dark:text-lightBlue dark:border-lightBlue"
                    : "hover:text-lightBlue dark:hover:text-lightBlue"
                  }`}
              >
                {item.text}
              </Link>
            )
          ))}
          <Link
            href="/contact"
            data-testid="link-contact"
            className={`hidden lg:flex rounded-full py-2 px-5 lg:px-6 ml-2 font-play font-bold text-xs lg:text-sm transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 whitespace-nowrap items-center gap-1 bg-gradient-to-r cursor-pointer ${location === "/contact"
                ? "from-lightBlue to-neonBlue text-white shadow-md"
                : "from-darkBlue to-lightBlue text-white shadow-md hover:shadow-xl dark:from-neonPink dark:to-lightBlue"
              }`}
          >
            Contact Us
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

        {nav && (
          <div
            className="fixed top-14 sm:top-20 left-0 right-0 bg-white dark:bg-gray-900 z-50 flex flex-col items-stretch justify-start pt-2 sm:pt-4 max-h-[calc(100vh-56px)] sm:max-h-[calc(100vh-80px)] md:hidden overflow-y-auto shadow-lg dark:shadow-xl"
          >
            {navLinks.map((item) => (
              // LOGIC UPDATE: Treat "/" (Home) as a button action in mobile menu as well
              item.section.startsWith("#") || item.section === "/" ? (
                <button
                  key={item.id}
                  data-testid={`button-mobile-nav-${item.text.toLowerCase()}`}
                  className={`w-full py-3 sm:py-4 px-4 sm:px-6 text-left text-sm sm:text-base font-play transition-colors duration-300 border-b border-gray-100 dark:border-gray-700 text-foreground dark:text-gray-200 ${isLinkActive(item.section)
                      ? "text-lightBlue bg-blue-50/50 dark:bg-gray-800 dark:text-lightBlue"
                      : "hover:text-lightBlue hover:bg-gray-50/50 dark:hover:bg-gray-800 dark:hover:text-lightBlue"
                    }`}
                  onClick={() => handleNavClick(item.section)}
                >
                  {item.text}
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={item.section}
                  data-testid={`link-mobile-${item.text.toLowerCase()}`}
                  className={`w-full py-3 sm:py-4 px-4 sm:px-6 text-left text-sm sm:text-base font-play transition-colors duration-300 border-b border-gray-100 dark:border-gray-700 block text-foreground dark:text-gray-200 cursor-pointer ${isLinkActive(item.section)
                      ? "text-lightBlue bg-blue-50/50 dark:bg-gray-800 dark:text-lightBlue"
                      : "hover:text-lightBlue hover:bg-gray-50/50 dark:hover:bg-gray-800 dark:hover:text-lightBlue"
                    }`}
                  onClick={() => setNav(false)}
                >
                  {item.text}
                </Link>
              )
            ))}
            <Link
              href="/contact"
              data-testid="link-mobile-contact"
              onClick={() => setNav(false)}
              className={`mx-4 sm:mx-6 text-center text-sm sm:text-base font-play font-bold rounded-full py-3 px-6 my-3 sm:my-4 transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 bg-gradient-to-r cursor-pointer ${location === "/contact"
                  ? "from-lightBlue to-neonBlue text-white shadow-md"
                  : "from-darkBlue to-lightBlue text-white shadow-md dark:from-neonPink dark:to-lightBlue"
                }`}
            >
              Contact Us
            </Link>
            <div className="w-full flex justify-center py-4 sm:py-6 border-t border-gray-100 dark:border-gray-700">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}