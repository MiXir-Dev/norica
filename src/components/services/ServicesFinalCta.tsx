import { motion } from "framer-motion";
import { fadeIn } from "@/consts/animations";
import { BOOK_NOW_URL } from "@/consts/links";

type ServicesFinalCtaProps = {
  heading?: string;
  description?: string;
  buttonLabel?: string;
};

const ServicesFinalCta = ({
  heading = "Ready to Begin?",
  description = "Whether you're seeking advanced laser treatments or professional skincare, our team is here to guide you toward your best results.",
  buttonLabel = "Book Your Appointment",
}: ServicesFinalCtaProps) => (
  <section className="py-20 md:py-28 bg-secondary/30" aria-label="Book appointment">
    <div className="container-wide text-center">
      <motion.div {...fadeIn} className="max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light mb-6">{heading}</h2>
        <p className="text-base text-muted-foreground mb-10 leading-relaxed">
          {description}
        </p>
        <a
          href={BOOK_NOW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          aria-label="Book your appointment at Norica Spa"
        >
          {buttonLabel}
        </a>
      </motion.div>
    </div>
  </section>
);

export default ServicesFinalCta;
