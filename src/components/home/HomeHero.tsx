import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";
import { fadeBlur } from "@/consts/animations";
import { BOOK_NOW_URL } from "@/consts/links";
import { preloadRoute } from "@/consts/routes";

type HomeHeroProps = {
  kicker?: string;
  title?: string;
  description?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

const HomeHero = ({
  kicker = "Laser · Facials · Memberships",
  title = "Aesthetic Clinic & Academy in Montreal",
  description = "Advanced laser treatments, professional skin care, and accredited training programs.",
  primaryCtaLabel = "Book Now",
  secondaryCtaLabel = "Training",
  secondaryCtaHref = "/training",
}: HomeHeroProps) => (
  <header className="relative h-screen min-h-[600px] md:min-h-[700px] overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Norica Spa aesthetic clinic in Montreal"
        className="w-full h-full object-cover"
        decoding="async"
        fetchpriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent md:hidden" />
    </div>

    <div className="relative h-full flex items-center">
      <div className="container-wide">
        <div className="max-w-xl md:max-w-2xl">
          <motion.p
            {...fadeBlur(0)}
            className="hidden md:block uppercase tracking-[0.25em] text-white/60 text-xs mb-8"
          >
            {kicker}
          </motion.p>

          <motion.h1
            {...fadeBlur(0.15)}
            className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-5"
          >
            {title}
          </motion.h1>

          <motion.p
            {...fadeBlur(0.3)}
            className="text-base md:text-lg text-white/70 mb-8 max-w-lg"
          >
            {description}
          </motion.p>

          <motion.div
            {...fadeBlur(0.45)}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href={BOOK_NOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary text-center"
            >
              {primaryCtaLabel}
            </a>
            <Link
              to={secondaryCtaHref}
              className="hero-btn-secondary text-center"
              onMouseEnter={() => preloadRoute(secondaryCtaHref)}
              onFocus={() => preloadRoute(secondaryCtaHref)}
            >
              {secondaryCtaLabel}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  </header>
);

export default HomeHero;
