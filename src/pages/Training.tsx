import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, BookOpen, Award, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-training.jpg";
import certificationImage from "@/assets/certification.jpg";

const Training = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const curriculum = [
    "Laser physics and safety fundamentals",
    "Skin anatomy and photobiology",
    "Treatment protocols and techniques",
    "Client consultation and assessment",
    "Hands-on practical training",
    "Business and practice management",
  ];

  const benefits = [
    { icon: BookOpen, title: "Comprehensive Curriculum", description: "Theory and practical training" },
    { icon: Award, title: "Certification", description: "Industry-recognized credentials" },
    { icon: Users, title: "Expert Instructors", description: "Learn from experienced professionals" },
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
            alt="Laser training academy" 
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
              Laser Training Academy
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Professional laser certification program for aspiring and practicing aestheticians
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <a href="https://form.typeform.com/to/tqWSZaMZ" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Apply Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-padding bg-gradient-to-b from-secondary to-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div className="space-y-8" {...fadeInUp}>
              <h2 className="font-light">Program Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our comprehensive training program combines theoretical knowledge with extensive hands-on practice using GentleMax Pro laser technology.
              </p>
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-2xl shadow-md">
                  <h4 className="text-lg mb-2">Duration</h4>
                  <p className="text-muted-foreground">6-8 weeks intensive training</p>
                </div>
                <div className="bg-background p-6 rounded-2xl shadow-md">
                  <h4 className="text-lg mb-2">Format</h4>
                  <p className="text-muted-foreground">In-person at our Montreal clinic</p>
                </div>
                <div className="bg-background p-6 rounded-2xl shadow-md">
                  <h4 className="text-lg mb-2">Investment</h4>
                  <p className="text-muted-foreground">Contact us for program fees</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-8"
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl">Curriculum</h3>
              <ul className="space-y-4">
                {curriculum.map((item) => (
                  <li key={item} className="flex items-start gap-4 bg-background p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="text-accent" size={18} />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits with Icons */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="mb-6 font-light">Why Train With Us</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.title} 
                className="text-center space-y-6 bg-secondary/50 p-10 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
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

      {/* Certification Image Section */}
      <section className="section-padding bg-gradient-to-br from-accent/10 via-secondary to-accent/5">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              {...fadeInUp}
            >
              <h2 className="font-light">Industry-Recognized Certification</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Upon successful completion of our program, you'll receive a professional certification that opens doors to exciting career opportunities in the aesthetic medicine industry.
              </p>
              <a href="https://form.typeform.com/to/tqWSZaMZ" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                Start Your Journey
              </a>
            </motion.div>

            <motion.div 
              className="rounded-3xl overflow-hidden shadow-xl"
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <img 
                src={certificationImage} 
                alt="Certification ceremony" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="mb-6 font-light">Prerequisites</h2>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div 
              className="bg-secondary/50 p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow"
              {...fadeInUp}
            >
              <h4 className="text-lg mb-4">Education</h4>
              <p className="text-muted-foreground leading-relaxed">
                Background in aesthetics, nursing, or related healthcare field preferred but not required.
              </p>
            </motion.div>

            <motion.div 
              className="bg-secondary/50 p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow"
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <h4 className="text-lg mb-4">Commitment</h4>
              <p className="text-muted-foreground leading-relaxed">
                Full participation in all training sessions and completion of practical requirements.
              </p>
            </motion.div>

            <motion.div 
              className="bg-secondary/50 p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow"
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h4 className="text-lg mb-4">Professional Goals</h4>
              <p className="text-muted-foreground leading-relaxed">
                Serious interest in building a career in laser aesthetics.
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
          <h2 className="mb-6 font-light text-white">Ready to Start Your Journey?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
            Submit your application and we'll be in touch to discuss the next steps.
          </p>
          <a href="https://form.typeform.com/to/tqWSZaMZ" target="_blank" rel="noopener noreferrer" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
            Apply for Training
          </a>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Training;
