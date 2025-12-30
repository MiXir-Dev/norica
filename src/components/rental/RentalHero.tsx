import { motion } from "framer-motion";
import heroImage from "@/assets/hero-rental.jpg";
import { RENTAL_APP_URL } from "@/consts/links";

type RentalHeroProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
};

const RentalHero = ({
  title = "GentleMax Pro Rental",
  description = "Start or expand your laser practice with our comprehensive equipment rental program",
  ctaLabel = "Apply for Rental",
}: RentalHeroProps) => (
  <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="GentleMax Pro rental program"
        className="w-full h-full object-cover"
        decoding="async"
        fetchpriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
    </div>

    <div className="relative h-full flex items-center">
      <div className="container-wide text-center text-white">
        <motion.h1
          className="mb-8 font-light text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <a
            href={RENTAL_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {ctaLabel}
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default RentalHero;
