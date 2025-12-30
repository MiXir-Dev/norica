import { motion } from "framer-motion";
import treatmentImage from "@/assets/treatment-room.png";
import { fadeInSection } from "@/consts/animations";
import { HOME_TRUST_POINTS } from "@/consts/home";

type HomeTrustPoint = {
  icon: typeof HOME_TRUST_POINTS[number]["icon"];
  text: string;
};

type HomeTrustProps = {
  title?: string;
  points?: HomeTrustPoint[];
};

const HomeTrust = ({
  title = "Trust the technology. Love the results.",
  points = HOME_TRUST_POINTS,
}: HomeTrustProps) => (
  <section className="section-padding bg-background">
    <div className="container-wide">
      <motion.h2
        {...fadeInSection}
        className="text-center text-2xl md:text-4xl font-light mb-6"
      >
        {title}
      </motion.h2>

      <motion.div
        {...fadeInSection}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center"
      >
        <figure className="relative order-1 lg:order-2">
          <img
            src={treatmentImage}
            alt="Treatment room"
            className="w-full h-[380px] md:h-[500px] object-cover rounded-2xl"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-accent/15 rounded-2xl -z-10" />
        </figure>

        <div className="space-y-8 order-1 lg:order-2">
          {points.map((point, index) => (
            <div key={index} className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <point.icon className="w-5 h-5 text-primary/80" />
              </div>
              <p className="text-base md:text-lg text-foreground/80">{point.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HomeTrust;
