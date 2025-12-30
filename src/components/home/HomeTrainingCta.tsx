import { motion } from "framer-motion";
import treatmentBg from "@/assets/treatment-bg.png";
import { fadeInSection } from "@/consts/animations";
import { preloadRoute } from "@/consts/routes";

const HomeTrainingCta = () => (
  <section className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={treatmentBg}
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover blur-[2px] saturate-[0.9]"
        loading="lazy"
        decoding="async"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
    </div>

    <div className="container-wide relative z-10 flex justify-center">
      <motion.div
        {...fadeInSection}
        className="relative inline-block w-fit rounded-2xl px-8 py-12 md:px-10 md:py-14 bg-white/[0.06] backdrop-blur-md border border-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.65)]"
      >
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-white/6 opacity-40" />
        </div>

        <div className="relative text-center max-w-lg">
          <h2 className="text-2xl md:text-4xl font-light text-white mb-2 whitespace-nowrap drop-shadow-sm">
            Become a Certified Laser Technician
          </h2>

          <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed">
            Comprehensive, professional training focused on GentleMax Pro technology.
          </p>

          <a
            href="/training"
            className="training-cta-btn inline-block"
            aria-label="Apply for laser technician training program"
            onMouseEnter={() => preloadRoute("/training")}
            onFocus={() => preloadRoute("/training")}
          >
            Apply for Training
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HomeTrainingCta;
