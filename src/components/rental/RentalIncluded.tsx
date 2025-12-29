import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeInUp } from "@/consts/animations";
import { RENTAL_FEATURES } from "@/consts/rental";

const RentalIncluded = () => (
  <section className="section-padding">
    <div className="container-wide max-w-4xl mx-auto">
      <motion.div className="text-center mb-12" {...fadeInUp}>
        <h2 className="mb-6 font-light">What's Included</h2>
      </motion.div>

      <motion.div
        className="bg-gradient-to-br from-secondary/50 to-accent/5 p-10 md:p-12 rounded-3xl shadow-lg"
        {...fadeInUp}
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RENTAL_FEATURES.map((feature) => (
            <li key={feature} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Check className="text-accent" size={18} />
              </div>
              <span className="text-foreground text-lg">{feature}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default RentalIncluded;
