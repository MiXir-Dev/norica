import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Shield, HeadphonesIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-rental.jpg";
import gentlemaxImage from "@/assets/gentlemax-pro.png";

const Rental = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "GentleMax Pro laser system",
    "Full technical support",
    "Training and certification assistance",
    "Maintenance and service included",
    "Flexible rental terms",
    "Marketing materials provided",
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Premium Equipment",
      description: "Access industry-leading laser technology without the upfront investment",
    },
    {
      icon: Shield,
      title: "Full Support",
      description: "Comprehensive training, technical support, and maintenance included",
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Guidance",
      description: "Ongoing consultation to help you build and grow your practice",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero with Full-Width Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="GentleMax Pro rental program" 
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
              GentleMax Pro Rental
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Start or expand your laser practice with our comprehensive equipment rental program
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <a href="https://form.typeform.com/to/sH0PpiTP" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Apply for Rental
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview with Image */}
      <section className="section-padding bg-gradient-to-b from-secondary to-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div className="space-y-8" {...fadeInUp}>
              <h2 className="font-light">Rental Program</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our rental program provides established or aspiring aestheticians access to premium GentleMax Pro laser equipment with complete support and training.
              </p>
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-2xl shadow-md">
                  <h4 className="text-lg mb-2">Equipment</h4>
                  <p className="text-muted-foreground">GentleMax Pro dual-wavelength laser system</p>
                </div>
                <div className="bg-background p-6 rounded-2xl shadow-md">
                  <h4 className="text-lg mb-2">Terms</h4>
                  <p className="text-muted-foreground">Flexible monthly rental agreements</p>
                </div>
                <div className="bg-background p-6 rounded-2xl shadow-md">
                  <h4 className="text-lg mb-2">Support</h4>
                  <p className="text-muted-foreground">Training, technical assistance, and practice development</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="rounded-3xl overflow-hidden shadow-xl"
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <img 
                src={gentlemaxImage} 
                alt="GentleMax Pro" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="mb-6 font-light">What's Included</h2>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-secondary/50 to-accent/5 p-10 md:p-12 rounded-3xl shadow-lg"
            {...fadeInUp}
          >
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="text-accent" size={18} />
                  </div>
                  <span className="text-foreground text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="mb-6 font-light">Why Rent From Us</h2>
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

      {/* Ideal For */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="mb-6 font-light">Ideal For</h2>
          </motion.div>

          <div className="space-y-6">
            <motion.div 
              className="bg-secondary/50 p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow"
              {...fadeInUp}
            >
              <h4 className="text-lg mb-4">Established Practices</h4>
              <p className="text-muted-foreground leading-relaxed">
                Expand your service offerings without significant capital investment.
              </p>
            </motion.div>

            <motion.div 
              className="bg-secondary/50 p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow"
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <h4 className="text-lg mb-4">New Practitioners</h4>
              <p className="text-muted-foreground leading-relaxed">
                Launch your laser practice with reduced financial risk and full support.
              </p>
            </motion.div>

            <motion.div 
              className="bg-secondary/50 p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow"
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h4 className="text-lg mb-4">Testing the Market</h4>
              <p className="text-muted-foreground leading-relaxed">
                Validate demand for laser services in your area before purchasing equipment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-gradient-to-br from-accent/10 via-secondary to-accent/5">
        <div className="container-wide max-w-3xl mx-auto">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="mb-6 font-light">Requirements</h2>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div 
              className="bg-background p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow"
              {...fadeInUp}
            >
              <h4 className="text-lg mb-4">Certification</h4>
              <p className="text-muted-foreground leading-relaxed">
                Valid laser safety certification or willingness to complete our training program.
              </p>
            </motion.div>

            <motion.div 
              className="bg-background p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow"
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <h4 className="text-lg mb-4">Practice Space</h4>
              <p className="text-muted-foreground leading-relaxed">
                Suitable treatment space meeting safety and operational requirements.
              </p>
            </motion.div>

            <motion.div 
              className="bg-background p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow"
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h4 className="text-lg mb-4">Professional Standards</h4>
              <p className="text-muted-foreground leading-relaxed">
                Commitment to maintaining high standards of care and safety protocols.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <motion.section 
        className="section-padding bg-gradient-to-r from-primary via-primary/95 to-accent/20 text-white"
        {...fadeInUp}
      >
        <div className="container-wide text-center">
          <h2 className="mb-6 font-light text-white">Ready to Get Started?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
            Submit your rental application and we'll discuss how we can support your practice.
          </p>
          <a href="https://form.typeform.com/to/sH0PpiTP" target="_blank" rel="noopener noreferrer" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
            Apply Now
          </a>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Rental;
