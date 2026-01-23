import { motion } from "framer-motion";
import { Check, Clock, Database, FileCheck } from "lucide-react";

const benefits = [
  { icon: Clock, text: "Mniej czasu na ręczne zestawienia i korekty danych." },
  { icon: Database, text: "Jedno źródło prawdy dla działu gospodarki odpadami." },
  { icon: FileCheck, text: "Szybsza obsługa reklamacji mieszkańców." },
  { icon: Check, text: "Większa przejrzystość realizacji umów z wykonawcą." },
];

const stats = [
  { value: "30-50%", label: "mniej czasu na raportowanie" },
  { value: "100%", label: "kontrola nad statusem odbiorów" },
  { value: "1", label: "system zamiast wielu arkuszy" },
];

export function Benefits() {
  return (
    <section id="korzysci" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Korzyści
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Korzyści dla administracji i operatorów
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-success" />
                </div>
                <p className="text-foreground pt-2">{benefit.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-hero-gradient text-primary-foreground"
          >
            <h3 className="text-xl font-semibold mb-8">Efekty po wdrożeniu</h3>
            
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-4xl md:text-5xl font-bold">{stat.value}</span>
                  <span className="text-primary-foreground/80">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
