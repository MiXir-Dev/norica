import { motion } from "framer-motion";
import { fadeIn } from "@/consts/animations";
import { FAQ_ITEMS } from "@/consts/servicesFaq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

type ServicesFaqProps = {
  heading?: string;
  subheading?: string;
  items?: FaqItem[];
};

const ServicesFaq = ({
  heading = "Frequently Asked Questions",
  subheading = "Laser Hair Removal — GentleMax Pro",
  items = FAQ_ITEMS,
}: ServicesFaqProps) => (
  <section className="section-padding bg-background" aria-labelledby="faq-heading">
    <div className="container-wide">
      <motion.div {...fadeIn} className="max-w-3xl mb-12 md:mb-16">
        <h2 id="faq-heading" className="text-2xl md:text-4xl font-light mb-4">
          {heading}
        </h2>
        <p className="text-sm uppercase tracking-wider text-muted-foreground">
          {subheading}
        </p>
      </motion.div>

      <motion.div {...fadeIn} className="max-w-3xl">
        <Accordion type="single" collapsible className="space-y-0">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border/50 py-1"
            >
              <AccordionTrigger className="text-left py-5 hover:no-underline group">
                <span className="text-base font-medium text-foreground pr-8 group-hover:text-foreground/80 transition-colors duration-300">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pr-8">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default ServicesFaq;
