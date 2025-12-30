import { Link } from "react-router-dom";
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
import { NAV_LINKS, NAV_LINKS_FR } from "@/consts/navigation";
import { preloadRoute } from "@/consts/routes";
import { BOOK_NOW_URL, INSTAGRAM_URL, PHONE_TEL } from "@/consts/links";

type NavMobileProps = {
  isScrolled: boolean;
  isFrench: boolean;
  languageSwitch: {
    href: string;
    label: string;
  };
  bookLabel: string;
};

const NavMobile = ({ isScrolled, isFrench, languageSwitch, bookLabel }: NavMobileProps) => (
  <div className="flex items-center gap-6 md:hidden ml-auto">
    <a
      href={PHONE_TEL}
      aria-label="Call Norica Spa"
      className={`transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
    >
      <Phone size={22} />
    </a>

    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className={`transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
        >
          <Menu size={26} />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-screen max-w-none p-0 bg-background border-r border-border/30"
      >
        <VisuallyHidden>
          <SheetTitle>Main navigation</SheetTitle>
        </VisuallyHidden>

        <div className="flex h-[100dvh] flex-col items-center">
          <div className="px-8 pt-16 pb-8 border-b border-border/20">
            <Link
              to="/"
              className="relative inline-flex items-center justify-center w-28 h-28 rounded-full overflow-hidden bg-white/[0.08] border border-black/50"
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

          <nav className="flex-1 px-8 py-10">
            <div className="mx-auto flex max-w-sm flex-col gap-2">
              {(isFrench ? NAV_LINKS_FR : NAV_LINKS).map((link) => (
                <SheetClose asChild key={link.to}>
                  <Link
                    to={link.to}
                    onMouseEnter={() => preloadRoute(link.to)}
                    onFocus={() => preloadRoute(link.to)}
                    className="group rounded-xl px-5 py-4 text-xl font-light tracking-wide text-foreground/90 transition-colors hover:bg-secondary/40 hover:text-foreground"
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

          <div className="px-8 pb-10 pt-6 border-t border-border/20">
                    <SheetClose asChild>
                      <a
                        href={BOOK_NOW_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary block text-center"
                      >
                        {bookLabel}
                      </a>
                    </SheetClose>

            <div className="mt-6 flex items-center justify-center">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
                @noricaspa
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center">
              <SheetClose asChild>
                <Link
                  to={languageSwitch.href}
                  onMouseEnter={() => preloadRoute(languageSwitch.href)}
                  onFocus={() => preloadRoute(languageSwitch.href)}
                  className="inline-flex items-center rounded-full border border-border/40 px-4 py-1 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground"
                >
                  {languageSwitch.label}
                </Link>
              </SheetClose>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  </div>
);

export default NavMobile;
