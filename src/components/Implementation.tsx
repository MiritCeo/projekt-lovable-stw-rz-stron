import { motion } from "framer-motion";
import { Search, Settings, GraduationCap } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Analiza danych",
    description: "Wspólnie przeglądamy dane źródłowe i zakres funkcji.",
  },
  {
    number: 2,
    icon: Settings,
    title: "Konfiguracja systemu",
    description: "Importujemy nieruchomości, pojemniki i tworzymy harmonogramy.",
  },
  {
    number: 3,
    icon: GraduationCap,
    title: "Szkolenie i start",
    description: "Szkolimy zespół i towarzyszymy w pierwszych tygodniach pracy.",
  },
];

export function Implementation() {
  return (
    <section id="wdrozenie" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Proces wdrożenia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Jak wygląda wdrożenie?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative p-8 rounded-2xl bg-card border border-border text-center"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-hero-gradient text-primary-foreground flex items-center justify-center font-bold text-sm">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4 mt-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </motion.article>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl bg-accent/50 border border-accent text-center"
        >
          <p className="text-lg font-medium text-accent-foreground">
            ⏱️ Standardowy czas wdrożenia: <strong>10-14 dni roboczych</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
