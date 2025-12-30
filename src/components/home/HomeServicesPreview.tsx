import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { HOME_SERVICES } from "@/consts/home";
import { fadeInSection } from "@/consts/animations";
import { preloadRoute } from "@/consts/routes";

type HomeServicesPreviewProps = {
  services?: typeof HOME_SERVICES;
  ctaLabel?: string;
};

const HomeServicesPreview = ({
  services = HOME_SERVICES,
  ctaLabel = "View Services",
}: HomeServicesPreviewProps) => (
  <section className="section-padding bg-secondary/30">
    <div className="container-wide">
      <motion.div {...fadeInSection} className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map((service) => (
          <Link
            key={service.title}
            to={service.href}
            onMouseEnter={() => preloadRoute(service.href)}
            onFocus={() => preloadRoute(service.href)}
            className="group relative block rounded-xl overflow-hidden bg-card border border-border/30 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            <div className="relative overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="aspect-square w-full object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:contrast-105"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </div>

            <div className="p-6">
              <h3 className="text-lg font-medium mb-3 text-foreground">{service.title}</h3>

              <div className="inline-flex items-center gap-2 text-sm text-primary">
                <span className="relative">
                  {ctaLabel}
                  <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </span>

                <ArrowRight
                  size={15}
                  className="opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[3px]"
                />
              </div>
            </div>

            <span className="pointer-events-none absolute inset-0 opacity-0 group-active:opacity-100 transition-opacity duration-150 bg-black/5" />
          </Link>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HomeServicesPreview;
