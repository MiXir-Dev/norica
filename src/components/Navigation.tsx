import { useState, useEffect } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { Menu, Instagram, Phone } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Logo from "@/components/Logo";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/training", label: "Training" },
    { to: "/rental", label: "Rental" },
  ];

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
          {/* LOGO — DESKTOP ONLY */}
          <Link to="/" className="hidden md:flex items-center">
            <Logo variant={isScrolled ? "dark" : "light"} size="md" />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <RouterNavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative text-[1.1rem] tracking-wide transition-colors
                  ${
                    isActive
                      ? "text-accent"
                      : isScrolled
                      ? "text-foreground/80 hover:text-foreground"
                      : "text-white hover:text-white"
                  }
                  after:absolute after:left-0 after:-bottom-1 after:h-[1px]
                  after:w-0 after:bg-accent after:transition-all after:duration-300
                  hover:after:w-full`
                }
              >
                {link.label}
              </RouterNavLink>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <a
            href="https://www.vagaro.com/noricaspa/book-now"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block btn-primary"
          >
            Book Now
          </a>

          {/* MOBILE */}
          <div className="flex items-center gap-6 md:hidden ml-auto">
            <a
              href="tel:+15145504633"
              aria-label="Call Norica Spa"
              className={`transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              <Phone size={22} />
            </a>

            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className={`transition-colors ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  <Menu size={26} />
                </button>
              </SheetTrigger>

              {/* FULL WIDTH SIDEBAR */}
              <SheetContent
                side="left"
                className="
                  w-screen max-w-none p-0
                  bg-background
                  border-r border-border/30
                "
              >
                <VisuallyHidden>
                  <SheetTitle>Main navigation</SheetTitle>
                </VisuallyHidden>

                {/* LAYOUT */}
                <div className="flex h-full flex-col items-center">
                  {/* TOP: Brand + location (clean, not floating) */}
                  <div className="px-8 pt-16 pb-8 border-b border-border/20">
                   <Link
                      to="/"
                      className="
                        relative inline-flex items-center justify-center
                        w-28 h-28 rounded-full
                        overflow-hidden

                        bg-white/[0.08]
                        border border-black/50
                      "
                    >
                      <div className="relative scale-[0.7]">
                        <Logo variant="dark" size="lg" />
                      </div>
                    </Link>

                    <div className="mt-5 flex items-center justify-center">
                      <span className="inline-flex items-center rounded-full border border-border/40 bg-secondary/40 px-4 py-1 text-xs tracking-wide text-muted-foreground">
                        Montréal, QC
                      </span>
                    </div>
                  </div>

                  {/* MIDDLE: Links (balanced spacing) */}
                  <nav className="flex-1 px-8 py-10">
                    <div className="mx-auto flex max-w-sm flex-col gap-2">
                      {navLinks.map((link) => (
                        <SheetClose asChild key={link.to}>
                          <Link
                            to={link.to}
                            className="
                              group rounded-xl px-5 py-4
                              text-xl font-light tracking-wide
                              text-foreground/90
                              transition-colors
                              hover:bg-secondary/40 hover:text-foreground
                            "
                          >
                            <span className="inline-flex items-center gap-3">
                              <span className="h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-6" />
                              {link.label}
                            </span>
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </nav>

                  {/* BOTTOM: CTA + socials */}
                  <div className="px-8 pb-10 pt-6 border-t border-border/20">
                    <SheetClose asChild>
                      <a
                        href="https://www.vagaro.com/noricaspa/book-now"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary block text-center"
                      >
                        Book Now
                      </a>
                    </SheetClose>

                    <div className="mt-6 flex items-center justify-center">
                      <a
                        href="https://instagram.com/noricaspa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram size={16} />
                        @noricaspa
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
