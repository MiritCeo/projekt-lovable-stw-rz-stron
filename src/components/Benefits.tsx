import { motion } from "framer-motion";
import { 
  Brain, 
  TrendingDown, 
  Eye, 
  MapPin, 
  AlertTriangle, 
  BarChart3,
  Shield,
  Zap
} from "lucide-react";

const benefits = [
  { 
    icon: Brain, 
    title: "Analiza AI",
    text: "Sztuczna inteligencja wspiera pracowników administracji w wykrywaniu wzorców i anomalii w danych odpadowych." 
  },
  { 
    icon: TrendingDown, 
    title: "Redukcja kosztów",
    text: "Identyfikacja nadwyżek budżetowych i nieefektywności w procesie zbiórki i utylizacji odpadów." 
  },
  { 
    icon: Eye, 
    title: "Przejrzyste raporty",
    text: "Czytelne zestawienia statystyk, trendów i wykrytych nieprawidłowości w jednym miejscu." 
  },
  { 
    icon: MapPin, 
    title: "Kontrola tras",
    text: "Monitorowanie tras odbioru w czasie rzeczywistym i analiza zdarzeń na trasie." 
  },
  { 
    icon: AlertTriangle, 
    title: "Wykrywanie anomalii",
    text: "Automatyczne flagowanie nietypowych zdarzeń: nadwyżki wagi, rozbieżności deklaracji, podrzucanie śmieci." 
  },
  { 
    icon: Shield, 
    title: "Uszczelnienie systemu",
    text: "Kontrola deklaracji śmieciowych i identyfikacja nieprawidłowości w rozliczeniach z mieszkańcami i firmami." 
  },
];

const stats = [
  { value: "30-50%", label: "mniej czasu na analizę danych" },
  { value: "100%", label: "widoczność tras i zdarzeń" },
  { value: "AI", label: "wsparcie decyzji administracji" },
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
            Pełna kontrola nad gospodarką odpadami
          </h2>
          <p className="text-lg text-muted-foreground">
            System wspiera wewnętrzne zespoły PSZOK w analizie, kontroli i optymalizacji 
            procesów zbiórki odpadów z wykorzystaniem sztucznej inteligencji.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Benefits Grid */}
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-hero-gradient text-primary-foreground"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                <Zap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Efekty po wdrożeniu</h3>
                <p className="text-primary-foreground/80">Realne korzyści dla Twojego zespołu</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <span className="block text-3xl md:text-4xl font-bold">{stat.value}</span>
                  <span className="text-sm text-primary-foreground/80">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
