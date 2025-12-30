import { motion } from "framer-motion";
import heroImage from "@/assets/hero-services.jpg";

const ServicesHero = () => (
  <header className="relative h-[60vh] min-h-[420px] md:h-[70vh] md:min-h-[520px] overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Premium laser hair removal and facial treatments at Norica Spa Montreal"
        className="w-full h-full object-cover"
        decoding="async"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
    </div>

    <div className="relative h-full flex items-center">
      <div className="container-wide">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            Services
          </h1>
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
            Medical-grade treatments designed for lasting results. From advanced laser technology to professional skin care.
          </p>
        </motion.div>
      </div>
    </div>
  </header>
);

export default ServicesHero;
