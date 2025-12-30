import { motion } from "framer-motion";
import { fadeInUp } from "@/consts/animations";
import { TRAINING_BENEFITS } from "@/consts/training";

type TrainingBenefit = {
  icon: typeof TRAINING_BENEFITS[number]["icon"];
  title: string;
  description: string;
};

type TrainingBenefitsProps = {
  heading?: string;
  benefits?: TrainingBenefit[];
};

const TrainingBenefits = ({
  heading = "Why Train With Us",
  benefits = TRAINING_BENEFITS,
}: TrainingBenefitsProps) => (
  <section className="section-padding">
    <div className="container-wide">
      <motion.div className="text-center mb-16" {...fadeInUp}>
        <h2 className="mb-6 font-light">{heading}</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            className="text-center space-y-6 bg-secondary/50 p-10 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
            {...fadeInUp}
            transition={{ delay: index * 0.1, duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full">
              <benefit.icon className="text-accent" size={32} />
            </div>
            <h3 className="text-xl">{benefit.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrainingBenefits;
