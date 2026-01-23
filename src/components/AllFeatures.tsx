import { motion } from "framer-motion";
import { 
  Upload, 
  Layers, 
  MessageSquare, 
  Map, 
  ClipboardCheck, 
  FileText, 
  Shield, 
  Bell, 
  Settings 
} from "lucide-react";

const allFeatures = [
  {
    icon: Upload,
    title: "Importy Radix",
    description: "Gotowe mapowania do danych z programu Radix, szybkie walidacje i podgląd braków.",
  },
  {
    icon: Layers,
    title: "Segmentacja nieruchomości",
    description: "Podział na typy, statusy deklaracji, frakcje oraz priorytety odbiorów.",
  },
  {
    icon: MessageSquare,
    title: "Wnioski i reklamacje",
    description: "Rejestracja zgłoszeń, śledzenie statusów i automatyczne przypomnienia.",
  },
  {
    icon: Map,
    title: "Mapa tras i punktów",
    description: "Podgląd punktów na mapie, filtrowanie po frakcjach i operatorach.",
  },
  {
    icon: ClipboardCheck,
    title: "Kontrola realizacji",
    description: "Oznaczanie wykonanych odbiorów, raporty opóźnień i braków.",
  },
  {
    icon: FileText,
    title: "Raporty i analityka",
    description: "Statystyki odpadów, wykrywanie anomalii na trasach, kontrola kosztów i segregacji.",
  },
  {
    icon: Shield,
    title: "Uprawnienia i role",
    description: "Role dla administracji, operatorów i wykonawców, kontrola dostępu.",
  },
  {
    icon: Bell,
    title: "Komunikacja z mieszkańcami",
    description: "Komunikaty o zmianach harmonogramów, informacje o wyjątkach.",
  },
  {
    icon: Settings,
    title: "Integracje i eksporty",
    description: "CSV, XLSX, integracje z systemami JST oraz wsparcie API.",
  },
];

export function AllFeatures() {
  return (
    <section id="funkcje-szczegoly" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Pełna lista
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wszystkie funkcje systemu
          </h2>
          <p className="text-lg text-muted-foreground">
            Każdy moduł jest rozwijany pod potrzeby samorządów i operatorów.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allFeatures.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
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
