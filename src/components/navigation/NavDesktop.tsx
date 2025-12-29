import { Link, NavLink as RouterNavLink } from "react-router-dom";
import Logo from "@/components/Logo";
import { NAV_LINKS } from "@/consts/navigation";
import { BOOK_NOW_URL } from "@/consts/links";

type NavDesktopProps = {
  isScrolled: boolean;
};

const NavDesktop = ({ isScrolled }: NavDesktopProps) => (
  <>
    <Link to="/" className="hidden md:flex items-center">
      <Logo variant={isScrolled ? "dark" : "light"} size="md" />
    </Link>

    <div className="hidden md:flex items-center gap-12">
      {NAV_LINKS.map((link) => (
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

    <a
      href={BOOK_NOW_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:inline-block btn-primary"
    >
      Book Now
    </a>
  </>
);

export default NavDesktop;
