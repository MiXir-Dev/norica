import { motion } from "framer-motion";
import gentlemaxImage from "@/assets/gentlemax-pro.png";
import { fadeInUp } from "@/consts/animations";
import { RENTAL_OVERVIEW_CARDS } from "@/consts/rental";

const RentalOverview = () => (
  <section className="section-padding bg-gradient-to-b from-secondary to-background">
    <div className="container-wide">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div className="space-y-8" {...fadeInUp}>
          <h2 className="font-light">Rental Program</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our rental program provides established or aspiring aestheticians access to premium GentleMax Pro laser equipment with complete support and training.
          </p>
          <div className="space-y-6">
            {RENTAL_OVERVIEW_CARDS.map((card) => (
              <div key={card.title} className="bg-background p-6 rounded-2xl shadow-md">
                <h4 className="text-lg mb-2">{card.title}</h4>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl overflow-hidden shadow-xl"
          {...fadeInUp}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            src={gentlemaxImage}
            alt="GentleMax Pro"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default RentalOverview;
