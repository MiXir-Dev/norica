import { useState, useEffect } from "react";
import NavDesktop from "@/components/navigation/NavDesktop";
import NavMobile from "@/components/navigation/NavMobile";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          <NavDesktop isScrolled={isScrolled} />
          <NavMobile isScrolled={isScrolled} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
