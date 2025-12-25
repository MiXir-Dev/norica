import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Award, Users, MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-home.jpg";
import gentlemaxImage from "@/assets/gentlemax-pro.png";
import dermalogicaImage from "@/assets/dermalogica.png";
import treatmentImage from "@/assets/treatment-room.png";
import treatmentBg from "@/assets/treatment-bg.png";
import { Link } from "react-router-dom";


const fadeBlur = (delay = 0) => ({
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  transition: { duration: 1.5, delay, ease: "easeOut" },
});

const fadeInSection = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 1.2, ease: "easeOut" },
  viewport: { once: true, margin: "-80px" },
};

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* HERO */}
      <header className="relative h-screen min-h-[600px] md:min-h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Norica Spa luxury aesthetic clinic in Montreal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent md:hidden" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="container-wide">
            <div className="max-w-xl md:max-w-2xl">

              <motion.p {...fadeBlur(0)} className="hidden md:block uppercase tracking-[0.25em] text-white/60 text-xs mb-8">
                Laser · Facials · Memberships
              </motion.p>

              <motion.h1 {...fadeBlur(0.15)} className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-5">
                Luxury Aesthetic Clinic & Academy in Montreal
              </motion.h1>

              <motion.p {...fadeBlur(0.3)} className="text-base md:text-lg text-white/70 mb-8 max-w-lg">
                Advanced laser treatments, professional skin care, and accredited training programs.
              </motion.p>

              <motion.div {...fadeBlur(0.45)} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="https://www.vagaro.com/noricaspa/book-now" target="_blank" className="hero-btn-primary text-center">
                  Book Now
                </a>
                <a href="/training" className="hero-btn-secondary text-center">
                  Training
                </a>
              </motion.div>

            </div>
          </div>
        </div>
      </header>

      {/* TRUST */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.h2 {...fadeInSection} className="text-center text-2xl md:text-4xl font-light mb-6">
            Trust the technology. Love the results.
          </motion.h2>

          <motion.div {...fadeInSection} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <figure className="relative order-1 lg:order-2">
              <img src={treatmentImage} alt="Treatment room" className="w-full h-[380px] md:h-[500px] object-cover rounded-2xl" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-accent/15 rounded-2xl -z-10" />
            </figure>

            <div className="space-y-8 order-1 lg:order-2">
              {[Sparkles, Award, Users].map((Icon, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary/80" />
                  </div>
                  <p className="text-base md:text-lg text-foreground/80">
                    {[
                      "Laser technology trusted by dermatologists worldwide.",
                      "Professional facials powered by Dermalogica expertise.",
                      "Personalized treatments for every skin type."
                    ][i]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <motion.div
            {...fadeInSection}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {[
              { title: "Laser Hair Removal", image: treatmentImage },
              { title: "Facials & Skin Treatments", image: dermalogicaImage },
              { title: "Laser Memberships", image: gentlemaxImage },
            ].map((s) => (
              <Link
                key={s.title}
                to="/services"
                className="
                  group relative block
                  rounded-xl overflow-hidden
                  bg-card

                  border border-border/30
                  transition-all duration-500

                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent/60
                "
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="
                      aspect-square w-full object-cover
                      transition-all duration-700
                      group-hover:scale-[1.04]
                      group-hover:contrast-105
                    "
                  />

                  {/* soft overlay on hover */}
                  <div
                    className="
                      pointer-events-none absolute inset-0
                      bg-black/0
                      group-hover:bg-black/5
                      transition-colors duration-500
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-3 text-foreground">
                    {s.title}
                  </h3>

                  <div className="inline-flex items-center gap-2 text-sm text-primary">
                    <span className="relative">
                      View Services
                      <span
                        className="
                          absolute left-0 -bottom-0.5 h-px w-0
                          bg-primary
                          transition-all duration-300
                          group-hover:w-full
                        "
                      />
                    </span>

                    <ArrowRight
                      size={15}
                      className="
                        opacity-60
                        transition-all duration-300
                        group-hover:opacity-100
                        group-hover:translate-x-[3px]
                      "
                    />
                  </div>
                </div>

                {/* MOBILE TAP FEEDBACK */}
                <span
                  className="
                    pointer-events-none absolute inset-0
                    opacity-0
                    group-active:opacity-100
                    transition-opacity duration-150
                    bg-black/5
                  "
                />
              </Link>
            ))}
          </motion.div>
        </div>
      </section>


      {/* TRAINING CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={treatmentBg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover blur-[2px] saturate-[0.9]"
            loading="lazy"
          />

          {/* Darkening gradients for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        </div>

        {/* Centering wrapper */}
        <div className="container-wide relative z-10 flex justify-center">
          <motion.div
            {...fadeInSection}
            className="
              relative inline-block w-fit
              rounded-2xl px-8 py-12 md:px-10 md:py-14

              /* Liquid glass */
              bg-white/[0.06]
              backdrop-blur-md
              border border-white/10

              /* Floating depth */
              shadow-[0_20px_60px_-20px_rgba(0,0,0,0.65)]
            "
          >
            {/* Glass highlight layer */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-white/6 opacity-40" />
            </div>

            {/* Content */}
            <div className="relative text-center max-w-lg">
              <h2
                className="
                  text-2xl md:text-4xl font-light text-white mb-4
                  whitespace-nowrap
                  drop-shadow-sm
                "
              >
                Become a Certified Laser Technician
              </h2>

              <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed">
                Comprehensive, professional training focused on GentleMax Pro technology.
              </p>

              <a
                href="/training"
                className="training-cta-btn inline-block"
                aria-label="Apply for laser technician training program"
              >
                Apply for Training
              </a>
            </div>
          </motion.div>
        </div>
      </section>



      {/* CONTACT */}
      <section className="section-padding bg-background">
        <div className="container-wide grid lg:grid-cols-2 gap-12">
          <motion.div {...fadeInSection}>
            <h2 className="text-2xl md:text-4xl font-light mb-8">Visit Us</h2>
            <div className="space-y-6">
              {[MapPin, Phone, Mail, Instagram, Clock].map((Icon, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary/80" />
                  </div>
                  <p className="text-muted-foreground">
                    {[
                      "105 rue Chabanel Ouest, Montreal",
                      "(514) 550-4633",
                      "noricaspa@gmail.com",
                      "@noricaspa",
                      "Monday – Saturday: 9:00 AM – 6:00 PM"
                    ][i]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInSection} className="rounded-xl overflow-hidden h-[320px] md:h-[420px]">
            <iframe title="Norica Spa location" className="w-full h-full border-0" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.792703064969!2d-73.66278812296736!3d45.54653222861144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91931a617e521%3A0x62bbf2f880b25d64!2s105%20Rue%20Chabanel%20O%2C%20Montr%C3%A9al%2C%20QC%20H2N%202G9!5e0!3m2!1sen!2sca!4v1732578483113!5m2!1sen!2sca" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
