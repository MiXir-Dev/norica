import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeInUp } from "@/consts/animations";
import { TRAINING_CURRICULUM, TRAINING_OVERVIEW_CARDS } from "@/consts/training";

const TrainingOverview = () => (
  <section className="section-padding bg-gradient-to-b from-secondary to-background">
    <div className="container-wide">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div className="space-y-8" {...fadeInUp}>
          <h2 className="font-light">Program Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our comprehensive training program combines theoretical knowledge with extensive hands-on practice using GentleMax Pro laser technology.
          </p>
          <div className="space-y-6">
            {TRAINING_OVERVIEW_CARDS.map((card) => (
              <div key={card.title} className="bg-background p-6 rounded-2xl shadow-md">
                <h4 className="text-lg mb-2">{card.title}</h4>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="space-y-8"
          {...fadeInUp}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3 className="text-2xl">Curriculum</h3>
          <ul className="space-y-4">
            {TRAINING_CURRICULUM.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 bg-background p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <Check className="text-accent" size={18} />
                </div>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TrainingOverview;
