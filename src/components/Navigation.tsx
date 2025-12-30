import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavDesktop from "@/components/navigation/NavDesktop";
import NavMobile from "@/components/navigation/NavMobile";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isFrench = location.pathname.startsWith("/fr");
  const switchHref = isFrench
    ? location.pathname.replace(/^\/fr/, "") || "/"
    : `/fr${location.pathname === "/" ? "" : location.pathname}`;
  const switchLabel = isFrench ? "EN" : "FR";
  const bookLabel = isFrench ? "Réserver" : "Book Now";

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
          <NavDesktop
            isScrolled={isScrolled}
            isFrench={isFrench}
            languageSwitch={{ href: switchHref, label: switchLabel }}
            bookLabel={bookLabel}
          />
          <NavMobile
            isScrolled={isScrolled}
            isFrench={isFrench}
            languageSwitch={{ href: switchHref, label: switchLabel }}
            bookLabel={bookLabel}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
