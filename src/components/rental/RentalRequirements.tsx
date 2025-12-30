import { motion } from "framer-motion";
import { fadeInUp } from "@/consts/animations";
import { RENTAL_REQUIREMENTS } from "@/consts/rental";

type Requirement = {
  title: string;
  description: string;
};

type RentalRequirementsProps = {
  heading?: string;
  items?: Requirement[];
};

const RentalRequirements = ({
  heading = "Requirements",
  items = RENTAL_REQUIREMENTS,
}: RentalRequirementsProps) => (
  <section className="section-padding bg-gradient-to-br from-accent/10 via-secondary to-accent/5">
    <div className="container-wide max-w-3xl mx-auto">
      <motion.div className="text-center mb-12" {...fadeInUp}>
        <h2 className="mb-6 font-light">{heading}</h2>
      </motion.div>

      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            className="bg-background p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow"
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

export default RentalRequirements;
