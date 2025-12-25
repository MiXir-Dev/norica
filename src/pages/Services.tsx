import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-services.jpg";
import gentlemaxImage from "@/assets/gentlemax-pro.png";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Services d’épilation laser" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container-wide text-center text-white">
            <motion.h1 
              className="mb-8 font-light text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Services Premium
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Épilation laser premium utilisant la technologie GentleMax Pro
            </motion.p>
          </div>
        </div>
      </section>

      {/* ====================== */}
{/* SUBSCRIPTION TABLE     */}
{/* ====================== */}

<section className="section-padding bg-background">
  <div className="container-wide">

    <motion.div className="text-center mb-16" {...fadeInUp}>
      <h2 className="mb-6 font-light">Abonnements Norica</h2>
    </motion.div>


    {/* ====================== */}
    {/* MOBILE VERSION */}
    {/* ====================== */}
    <div className="md:hidden space-y-10">

      {[
        {
          name: "Essentiel",
          price: "95$",
          bg: "#f7f4ef",
          items: [true, "15 % rabais", false, false, false, false]
        },
        {
          name: "Complet",
          price: "180$",
          bg: "#eee6db",
          items: [true, true, false, false, false, false]
        },
        {
          name: "Avancé",
          price: "250$",
          bg: "#e3d6c8",
          items: [true, true, true, true, true, true]
        }
      ].map(plan => (
        <div
          key={plan.name}
          className="rounded-3xl shadow-xl border border-border p-6 bg-white"
        >
          
          <div
            className="rounded-2xl p-5 mb-6 text-center"
            style={{ backgroundColor: plan.bg }}
          >
            <div className="font-bold text-[17px] mb-1">{plan.name}</div>

            <div className="text-[28px] font-light leading-none">
              {plan.price}
              <span className="text-[14px] text-muted-foreground font-normal">/mois</span>
            </div>
          </div>

          <ul className="space-y-5">

            {[
              "1 session gratuite",
              "Facial de base",
              "Dermaplaning",
              "Microneedling",
              "Peeling chimique",
              "10% Dermalogica"
            ].map((f,i) => (
              <li key={i} className="flex items-center justify-between border-b pb-3">

                <span className="font-medium">{f}</span>

                {plan.items[i] === true && (
                  <div className="w-9 h-9 rounded-full bg-[#6da687] flex items-center justify-center">
                    <Check className="text-white" size={22} strokeWidth={3} />
                  </div>
                )}

                {plan.items[i] === false && (
                  <div className="w-9 h-9 rounded-full bg-[#c9c2bb] flex items-center justify-center">
                    <span className="text-white text-[22px] font-bold leading-none select-none">×</span>
                  </div>
                )}

                {typeof plan.items[i] === "string" && (
                  <span className="text-[15px]">{plan.items[i]}</span>
                )}

              </li>
            ))}
          </ul>

        </div>
      ))}

    </div>


    {/* ====================== */}
    {/* DESKTOP TABLE */}
    {/* ====================== */}
    <motion.div
      className="hidden md:block relative overflow-hidden max-w-5xl mx-auto rounded-3xl shadow-2xl border border-border bg-white/95"
      {...fadeInUp}
    >

      {/* ROW 1 -- NAMES + PRICES */}
      <div className="grid grid-cols-4 border-b border-border">

        {/* Empty cell */}
        <div className="p-6"></div>

        {/* ESSENTIAL */}
        <div className="p-6 text-center bg-[#f7f4ef] border-l border-border">
          <div className="font-bold text-[17px] mb-2">Essentiel</div>

          <div className="flex items-end justify-center gap-1">
            <span className="text-[26px] font-normal leading-none">95$</span>
            <span className="text-[14px] text-muted-foreground leading-none">/mois</span>
          </div>
        </div>

        {/* COMPLETE */}
        <div className="p-6 text-center bg-[#eee6db] border-l border-border">
          <div className="font-bold text-[17px] mb-2">Complet</div>

          <div className="flex items-end justify-center gap-1">
            <span className="text-[26px] font-normal leading-none">180$</span>
            <span className="text-[14px] text-muted-foreground leading-none">/mois</span>
          </div>
        </div>

        {/* ADVANCED */}
        <div className="p-6 text-center bg-[#e3d6c8] border-l border-border">
          <div className="font-bold text-[17px] mb-2">Avancé</div>

          <div className="flex items-end justify-center gap-1">
            <span className="text-[26px] font-normal leading-none">250$</span>
            <span className="text-[14px] text-muted-foreground leading-none">/mois</span>
          </div>
        </div>

      </div>


      {/* ROW 2 -- ZONE NAMES */}
      <div className="grid grid-cols-4 font-bold text-[15px] border-b border-border">
        <div className="p-4 border-r border-border bg-white">Régions du corps</div>
        <div className="p-4 text-center border-r border-border bg-white">1 zone laser</div>
        <div className="p-4 text-center border-r border-border bg-white">2 zones laser</div>
        <div className="p-4 text-center bg-white">3+ zones laser</div>
      </div>


      {/* FEATURES */}
      {[
        { feature: "1 session gratuite", e: true, c: true, a: true },
        { feature: "Facial de base", e: "15 % rabais", c: true, a: true },
        { feature: "Dermaplaning", e: false, c: false, a: true },
        { feature: "Microneedling", e: false, c: false, a: true },
        { feature: "Peeling chimique", e: false, c: false, a: true },
        { feature: "10% produits Dermalogica", e: false, c: false, a: true },
      ].map((row, idx) => (
        <div
          key={row.feature}
          className={`grid grid-cols-4 border-t border-border ${
            idx % 2 === 0 ? "bg-[#f4f1ee]" : "bg-white"
          }`}
        >
          {/* feature */}
          <div className="p-4 font-bold">{row.feature}</div>

          {[row.e, row.c, row.a].map((v, i) => (
            <div
              key={i}
              className="p-4 flex items-center justify-center border-l border-border"
            >
              
              {v === true && (
                <div className="w-9 h-9 rounded-full bg-[#6da687] flex items-center justify-center">
                  <Check className="text-white" size={22} strokeWidth={3} />
                </div>
              )}

              {v === false && (
                <div className="w-9 h-9 rounded-full bg-[#c9c2bb] flex items-center justify-center">
                  <span className="text-white text-[22px] font-bold leading-none select-none">×</span>
                </div>
              )}

              {typeof v === "string" && <span>{v}</span>}

            </div>
          ))}
        </div>
      ))}

    </motion.div>


    <div className="text-center mt-10">
      <a
        href="https://form.typeform.com/to/tz9yXbxM"
        target="_blank"
        className="btn-primary"
      >
        Démarrer votre abonnement
      </a>
    </div>

  </div>
</section>




      {/* TECHNOLOGY */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <motion.div 
              className="rounded-3xl overflow-hidden shadow-xl"
              {...fadeInUp}
            >
              <img 
                src={gentlemaxImage} 
                alt="Technologie GentleMax Pro" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              className="space-y-8"
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="font-light">Technologie GentleMax Pro</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre appareil combine deux longueurs d’ondes pour des résultats supérieurs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
