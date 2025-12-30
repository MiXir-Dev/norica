import { motion } from "framer-motion";
import { fadeInUp } from "@/consts/animations";
import { TRAINING_APP_URL } from "@/consts/links";

type TrainingCtaProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
};

const TrainingCta = ({
  title = "Ready to Start Your Journey?",
  description = "Submit your application and we'll be in touch to discuss the next steps.",
  buttonLabel = "Apply for Training",
}: TrainingCtaProps) => (
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
        href={TRAINING_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary border-white text-white hover:bg-white hover:text-primary"
      >
        {buttonLabel}
      </a>
    </div>
  </motion.section>
);

export default TrainingCta;
