import { motion } from "framer-motion";
import { 
  Brain, 
  Database, 
  Search, 
  AlertTriangle, 
  Bell,
  ArrowRight,
  Scale,
  MapPin,
  Users,
  TrendingUp,
  FileWarning,
  Truck
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  {
    icon: Database,
    title: "Zbieranie danych",
    description: "System agreguje dane z wielu źródeł: wagi, GPS, deklaracje mieszkańców, harmonogramy tras."
  },
  {
    icon: Brain,
    title: "Analiza AI",
    description: "Algorytmy uczenia maszynowego analizują wzorce i porównują dane historyczne z bieżącymi."
  },
  {
    icon: Search,
    title: "Wykrywanie anomalii",
    description: "AI identyfikuje odstępstwa od normy: nadwyżki wagi, nietypowe trasy, rozbieżności w deklaracjach."
  },
  {
    icon: Bell,
    title: "Generowanie alertów",
    description: "System automatycznie powiadamia pracowników o wykrytych nieprawidłowościach z priorytetyzacją."
  },
];

const exampleAlerts = [
  {
    type: "critical",
    icon: Scale,
    title: "Anomalia wagowa",
    location: "ul. Lipowa 23",
    description: "Wykryto nadwyżkę wagi +340% względem deklaracji. Możliwe nielegalne podrzucanie odpadów.",
    time: "2 min temu",
    action: "Wymaga weryfikacji"
  },
  {
    type: "warning",
    icon: MapPin,
    title: "Odchylenie trasy",
    location: "Trasa #12 - Północ",
    description: "Pojazd WE 4521K odchylił się od zaplanowanej trasy o 2.3 km. Nieplanowany postój 18 min.",
    time: "15 min temu",
    action: "Do sprawdzenia"
  },
  {
    type: "info",
    icon: Users,
    title: "Rozbieżność deklaracji",
    location: "ul. Dębowa 45-67",
    description: "Liczba zadeklarowanych mieszkańców nie odpowiada wolumenowi odpadów (-45%).",
    time: "1 godz. temu",
    action: "Analiza w toku"
  },
  {
    type: "warning",
    icon: Truck,
    title: "Pominięty punkt",
    location: "ul. Brzozowa 12",
    description: "Punkt odbioru pominięty przez pojazd. Brak potwierdzenia zbiórki w systemie GPS.",
    time: "2 godz. temu",
    action: "Wymagana interwencja"
  },
];

const stats = [
  { icon: FileWarning, value: "2,847", label: "wykrytych anomalii miesięcznie" },
  { icon: TrendingUp, value: "94%", label: "skuteczność wykrywania" },
  { icon: Brain, value: "<3s", label: "czas analizy punktu" },
];

const statsDisclaimer =
  "Dane ze statystyk to symulacja przygotowana na podstawie danych z przykładowych miast. Szczegółowe wyniki z wdrożeń nie mogą być udostępniane.";

export function AIAnalysis() {
  return (
    <section id="analiza-ai" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Sztuczna Inteligencja
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Jak działa analiza AI?
          </h2>
          <p className="text-lg text-muted-foreground">
            Nasz system wykorzystuje zaawansowane algorytmy uczenia maszynowego do automatycznego 
            wykrywania nieprawidłowości i wspierania decyzji administracyjnych.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
            
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-2xl bg-hero-gradient flex items-center justify-center mb-4 relative z-10 shadow-elevated">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-medium text-primary mb-2">Krok {index + 1}</span>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-12 -right-3 z-20">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="block text-3xl font-bold text-primary mb-1">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>
        <p className="text-xs text-muted-foreground text-center mb-16">
          {statsDisclaimer}
        </p>

        {/* Example Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Przykłady alertów generowanych przez AI
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {exampleAlerts.map((alert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`border-l-4 ${
                  alert.type === 'critical' 
                    ? 'border-l-destructive' 
                    : alert.type === 'warning' 
                      ? 'border-l-yellow-500' 
                      : 'border-l-primary'
                } hover:shadow-soft transition-shadow`}>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        alert.type === 'critical' 
                          ? 'bg-destructive/10' 
                          : alert.type === 'warning' 
                            ? 'bg-yellow-500/10' 
                            : 'bg-accent'
                      }`}>
                        <alert.icon className={`w-5 h-5 ${
                          alert.type === 'critical' 
                            ? 'text-destructive' 
                            : alert.type === 'warning' 
                              ? 'text-yellow-600' 
                              : 'text-primary'
                        }`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="font-semibold truncate">{alert.title}</h4>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">{alert.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{alert.location}</p>
                        <p className="text-sm mb-3">{alert.description}</p>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            alert.type === 'critical' 
                              ? 'bg-destructive/10 text-destructive' 
                              : alert.type === 'warning' 
                                ? 'bg-yellow-500/10 text-yellow-600' 
                                : 'bg-accent text-accent-foreground'
                          }`}>
                            {alert.action}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            System AI ciągle się uczy i dostosowuje do specyfiki Twojego przedsiębiorstwa, 
            zwiększając skuteczność wykrywania z każdym tygodniem użytkowania.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
