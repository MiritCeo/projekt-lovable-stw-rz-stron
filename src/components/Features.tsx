import { motion } from "framer-motion";
import { 
  Building2, 
  Trash2, 
  CalendarDays, 
  Route, 
  ClipboardCheck, 
  FileBarChart 
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Ewidencja nieruchomości",
    description: "Import danych, statusy deklaracji, typy nieruchomości i powiązania z pojemnikami.",
  },
  {
    icon: Trash2,
    title: "Zarządzanie pojemnikami",
    description: "Śledzenie pojemności, frakcji, częstotliwości odbiorów oraz historii zmian.",
  },
  {
    icon: CalendarDays,
    title: "Harmonogramy odbiorów",
    description: "Definiowanie cykli, wyjątków i komunikatów dla mieszkańców.",
  },
  {
    icon: Route,
    title: "Planowanie tras",
    description: "Łączenie punktów, sortowanie kolejności i optymalizacja czasu przejazdu.",
  },
  {
    icon: ClipboardCheck,
    title: "Realizacja i kontrola",
    description: "Rejestr wykonanych odbiorów, zgłoszeń i reklamacji w jednym miejscu.",
  },
  {
    icon: FileBarChart,
    title: "Raporty i eksporty",
    description: "Gotowe zestawienia do sprawozdań, CSV i integracji z innymi systemami.",
  },
];

export function Features() {
  return (
    <section id="funkcje" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Moduły systemu
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Funkcje, które już działają w naszej aplikacji
          </h2>
          <p className="text-lg text-muted-foreground">
            Moduły są zaprojektowane specjalnie dla JST. Działają zarówno na
            komputerach, jak i tabletach w terenie.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-hero-gradient transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
