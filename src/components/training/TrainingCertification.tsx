import { motion } from "framer-motion";
import certificationImage from "@/assets/certification.jpg";
import { fadeInUp } from "@/consts/animations";
import { TRAINING_APP_URL } from "@/consts/links";

type TrainingCertificationProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
};

const TrainingCertification = ({
  title = "Industry-Recognized Certification",
  description = "Upon successful completion of our program, you'll receive a professional certification that opens doors to exciting career opportunities in the aesthetic medicine industry.",
  ctaLabel = "Start Your Journey",
}: TrainingCertificationProps) => (
  <section className="section-padding bg-gradient-to-br from-accent/10 via-secondary to-accent/5">
    <div className="container-wide">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div className="space-y-6" {...fadeInUp}>
          <h2 className="font-light">{title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
          <a
            href={TRAINING_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            {ctaLabel}
          </a>
        </motion.div>

        <motion.div
          className="rounded-3xl overflow-hidden shadow-xl"
          {...fadeInUp}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            src={certificationImage}
            alt="Certification ceremony"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default TrainingCertification;
