import { motion } from "framer-motion";
import { fadeInUp } from "@/consts/animations";
import { RENTAL_APP_URL } from "@/consts/links";

type RentalCtaProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
};

const RentalCta = ({
  title = "Ready to Get Started?",
  description = "Submit your rental application and we'll discuss how we can support your practice.",
  buttonLabel = "Apply Now",
}: RentalCtaProps) => (
  <motion.section
    className="section-padding bg-gradient-to-r from-primary via-primary/95 to-accent/20 text-white"
    {...fadeInUp}
  >
    <div className="container-wide text-center">
      <h2 className="mb-6 font-light text-white">{title}</h2>
      <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
        {description}
      </p>
      <a
        href={RENTAL_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary border-white text-white hover:bg-white hover:text-primary"
      >
        {buttonLabel}
      </a>
    </div>
  </motion.section>
);

export default RentalCta;
