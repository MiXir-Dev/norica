import { motion } from "framer-motion";
import { fadeIn } from "@/consts/animations";
import { GENTLEMAX_IMAGE, LASER_BENEFITS } from "@/consts/services";
import { LASER_FREE_SESSION_URL } from "@/consts/links";

type LaserBenefit = {
  title: string;
  description: string;
};

type LaserSectionProps = {
  heading?: string;
  kicker?: string;
  description?: string;
  benefitsTitle?: string;
  benefits?: LaserBenefit[];
  ctaLabel?: string;
  ctaDescription?: string;
};

const LaserSection = ({
  heading = "Permanent Hair Reduction",
  kicker = "Powered by GentleMax Pro",
  description = "Experience medical-grade laser hair removal with the GentleMax Pro, the most trusted technology in dermatology for fast, safe, and long-lasting results. This technology targets the hair follicle with precision, delivering smooth, long-term reduction on all skin types.",
  benefitsTitle = "Why Choose Our Laser Treatments",
  benefits = LASER_BENEFITS,
  ctaLabel = "Claim Free Session",
  ctaDescription = "Fill out the form to claim your free first session.",
}: LaserSectionProps) => (
  <section className="section-padding bg-secondary/20" aria-labelledby="laser-heading">
    <div className="container-wide">
      <motion.div {...fadeIn} className="max-w-3xl mb-16 md:mb-24">
        <h2 id="laser-heading" className="text-2xl md:text-4xl font-light mb-6">
          {heading}
        </h2>
        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-8">
          {kicker}
        </p>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </motion.div>

      <motion.div
        {...fadeIn}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 md:mb-24"
      >
        <div className="rounded-2xl overflow-hidden">
          <img
            src={GENTLEMAX_IMAGE}
            alt="GentleMax Pro laser technology for hair removal"
            className="w-full aspect-square object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="space-y-8 lg:pt-4">
          <h3 className="text-lg md:text-xl font-light mb-8">
            {benefitsTitle}
          </h3>
          {benefits.map((benefit, index) => (
            <div key={index} className="border-l-2 border-accent/40 pl-6">
              <h4 className="text-base font-medium text-foreground mb-2">
                {benefit.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div {...fadeIn} className="text-center py-12 md:py-16">
        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
          {ctaDescription}
        </p>
        <a
          href={LASER_FREE_SESSION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          aria-label="Apply for free laser hair removal session"
        >
          {ctaLabel}
        </a>
      </motion.div>
    </div>
  </section>
);

export default LaserSection;
