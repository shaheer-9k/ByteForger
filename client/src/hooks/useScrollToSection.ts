export const useScrollToSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const navbarHeight = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight - 24;

    requestAnimationFrame(() => {
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth"
      });
    });
  };

  return { scrollToSection };
};
