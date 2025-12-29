import { motion } from "framer-motion";
import { fadeInSection } from "@/consts/animations";
import { HOME_CONTACT_ITEMS } from "@/consts/home";

const HomeContact = () => (
  <section className="section-padding bg-background">
    <div className="container-wide grid lg:grid-cols-2 gap-12">
      <motion.div {...fadeInSection}>
        <h2 className="text-2xl md:text-4xl font-light mb-8">Visit Us</h2>
        <div className="space-y-6">
          {HOME_CONTACT_ITEMS.map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <item.icon className="w-4 h-4 text-primary/80" />
              </div>
              <p className="text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        {...fadeInSection}
        className="rounded-xl overflow-hidden h-[320px] md:h-[420px]"
      >
        <iframe
          title="Norica Spa location"
          className="w-full h-full border-0"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.792703064969!2d-73.66278812296736!3d45.54653222861144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91931a617e521%3A0x62bbf2f880b25d64!2s105%20Rue%20Chabanel%20O%2C%20Montr%C3%A9al%2C%20QC%20H2N%202G9!5e0!3m2!1sen!2sca!4v1732578483113!5m2!1sen!2sca"
        />
      </motion.div>
    </div>
  </section>
);

export default HomeContact;
