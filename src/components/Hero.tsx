import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Download, Clock, Headphones, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const badges = [
  { icon: Shield, label: "Bezpieczne dane" },
  { icon: Download, label: "Import Radix" },
  { icon: Clock, label: "Wdrożenie 14 dni" },
  { icon: Headphones, label: "Wsparcie PL" },
];

const useCases = [
  "Planowanie tras i harmonogramów odbioru",
  "Kontrola realizacji zleceń i reklamacji",
  "Raporty do sprawozdań gminnych",
  "Ewidencja pojemników i deklaracji",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              Dla gmin, powiatów i miast
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Jedno miejsce do{" "}
              <span className="text-gradient">planowania i kontroli</span>{" "}
              gospodarki odpadami
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Waste Route Manager łączy dane o nieruchomościach, pojemnikach i
              harmonogramach w spójnym systemie. Twórz trasy, monitoruj realizację
              odbiorów i generuj raporty bez chaosu w arkuszach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" asChild>
                <a href="#kontakt">Zamów prezentację</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#funkcje">Zobacz funkcje</a>
              </Button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-sm"
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image & Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden shadow-elevated mb-6">
              <img 
                src={heroImage} 
                alt="Smart city waste management visualization" 
                className="w-full h-auto"
              />
            </div>

            <div className="glass rounded-2xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-hero-gradient flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-primary-foreground" />
                </span>
                Najczęstsze zastosowania
              </h3>

              <ul className="space-y-3">
                {useCases.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-hero-gradient rounded-2xl opacity-20 blur-xl animate-float" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
