import { Link, NavLink as RouterNavLink } from "react-router-dom";
import Logo from "@/components/Logo";
import { NAV_LINKS, NAV_LINKS_FR } from "@/consts/navigation";
import { preloadRoute } from "@/consts/routes";
import { BOOK_NOW_URL } from "@/consts/links";

type NavDesktopProps = {
  isScrolled: boolean;
  isFrench: boolean;
  languageSwitch: {
    href: string;
    label: string;
  };
  bookLabel: string;
};

const NavDesktop = ({ isScrolled, isFrench, languageSwitch, bookLabel }: NavDesktopProps) => (
  <>
    <Link to="/" className="hidden md:flex items-center">
      <Logo variant={isScrolled ? "dark" : "light"} size="md" />
    </Link>

    <div className="hidden md:flex items-center gap-10">
      {(isFrench ? NAV_LINKS_FR : NAV_LINKS).map((link) => (
        <RouterNavLink
          key={link.to}
          to={link.to}
          onMouseEnter={() => preloadRoute(link.to)}
          onFocus={() => preloadRoute(link.to)}
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
      <Link
        to={languageSwitch.href}
        onMouseEnter={() => preloadRoute(languageSwitch.href)}
        onFocus={() => preloadRoute(languageSwitch.href)}
        className={`text-xs tracking-[0.2em] uppercase border px-3 py-1 rounded-full transition-colors ${
          isScrolled
            ? "text-foreground/70 border-border hover:text-foreground"
            : "text-white/80 border-white/30 hover:text-white"
        }`}
      >
        {languageSwitch.label}
      </Link>
    </div>

    <a
      href={BOOK_NOW_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:inline-block btn-primary"
    >
      {bookLabel}
    </a>
  </>
);

export default NavDesktop;
