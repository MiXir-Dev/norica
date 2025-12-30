import { motion } from "framer-motion";
import { fadeIn } from "@/consts/animations";
import { FACIAL_SERVICES, DERMALOGICA_IMAGE } from "@/consts/services";
import { BOOK_NOW_URL } from "@/consts/links";

const FacialsSection = () => (
  <section className="section-padding bg-background" aria-labelledby="facials-heading">
    <div className="container-wide">
      <motion.div {...fadeIn} className="max-w-3xl mb-20 md:mb-28">
        <h2 id="facials-heading" className="text-2xl md:text-4xl font-light mb-8">
          Facials & Skin Treatments
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          At Norica, every service is elevated with Dermalogica's professional skincare collection.
          These advanced, science-driven formulas enhance each treatment, ensuring deeper hydration,
          smoother texture, and a visibly healthier complexion from your very first visit.
        </p>
      </motion.div>

      <div className="space-y-16 md:space-y-24 mb-20 md:mb-28">
        {FACIAL_SERVICES.map((service, index) => (
          <motion.article
            key={service.title}
            {...fadeIn}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={service.image}
                alt={`${service.title} treatment at Norica Spa`}
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="py-4">
              <h3 className="text-xl md:text-2xl font-light mb-2">{service.title}</h3>
              {service.subtitle && (
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                  {service.subtitle}
                </p>
              )}
              <p className="text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        {...fadeIn}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-24"
      >
        <div className="rounded-2xl overflow-hidden">
          <img
            src={DERMALOGICA_IMAGE}
            alt="Dermalogica professional skincare products"
            className="w-full aspect-[4/3] object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Products Used
          </p>
          <h3 className="text-xl md:text-2xl font-light mb-6">Dermalogica</h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            All treatments are performed exclusively with Dermalogica, a globally recognized
            professional skincare brand known for its high performance, non-irritating formulas,
            and skin-respectful approach. Protocols are customized to each skin type to ensure
            safety, effectiveness, and visible results.
          </p>
        </div>
      </motion.div>

      <motion.div {...fadeIn} className="text-center py-12 md:py-16">
        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Enjoy a complimentary skin consultation during your appointment with our certified skin experts.
        </p>
        <a
          href={BOOK_NOW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          aria-label="Book a facial treatment appointment"
        >
          Book Now
        </a>
      </motion.div>
    </div>
  </section>
);

export default FacialsSection;
