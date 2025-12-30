import { motion } from "framer-motion";
import { fadeInUp } from "@/consts/animations";
import { TRAINING_PREREQUISITES } from "@/consts/training";

type Prerequisite = {
  title: string;
  description: string;
};

type TrainingPrerequisitesProps = {
  heading?: string;
  items?: Prerequisite[];
};

const TrainingPrerequisites = ({
  heading = "Prerequisites",
  items = TRAINING_PREREQUISITES,
}: TrainingPrerequisitesProps) => (
  <section className="section-padding">
    <div className="container-wide max-w-3xl mx-auto">
      <motion.div className="text-center mb-12" {...fadeInUp}>
        <h2 className="mb-6 font-light">{heading}</h2>
      </motion.div>

      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            className="bg-secondary/50 p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow"
            {...fadeInUp}
            transition={{ delay: index * 0.1, duration: 0.8 }}
          >
            <h4 className="text-lg mb-4">{item.title}</h4>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrainingPrerequisites;
