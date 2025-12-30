import { motion } from "framer-motion";
import { fadeInUp } from "@/consts/animations";
import { RENTAL_BENEFITS } from "@/consts/rental";

type RentalBenefit = {
  icon: typeof RENTAL_BENEFITS[number]["icon"];
  title: string;
  description: string;
};

type RentalBenefitsProps = {
  heading?: string;
  benefits?: RentalBenefit[];
};

const RentalBenefits = ({
  heading = "Why Rent From Us",
  benefits = RENTAL_BENEFITS,
}: RentalBenefitsProps) => (
  <section className="section-padding bg-secondary">
    <div className="container-wide">
      <motion.div className="text-center mb-16" {...fadeInUp}>
        <h2 className="mb-6 font-light">{heading}</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            className="text-center space-y-6 bg-background p-10 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
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

export default RentalBenefits;
