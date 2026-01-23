import { motion } from "framer-motion";
import { Truck, MapPin, Users, CheckCircle, AlertTriangle, TrendingUp, User } from "lucide-react";

const adminStats = [
  { icon: Truck, value: "128", label: "Trasy", color: "text-info" },
  { icon: MapPin, value: "3 420", label: "Adresy", note: "Firmy: 320 · Zamieszkałe: 3 100", color: "text-primary" },
  { icon: Users, value: "26", label: "Pracownicy", color: "text-purple-500" },
  { icon: CheckCircle, value: "2 980", label: "Odebrane", color: "text-success" },
  { icon: AlertTriangle, value: "14", label: "Powiadomienia", color: "text-warning" },
];

export function Dashboard() {
  return (
    <section id="panel" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Podgląd aplikacji
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Podgląd panelu administratora i pracownika
          </h2>
          <p className="text-lg text-muted-foreground">
            Poniżej przykładowe widoki prezentujące wygląd kluczowych ekranów.
            Na prezentacji pokazujemy realne dane oraz pełny przepływ pracy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Admin Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card border border-border shadow-soft overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-border bg-muted/50">
              <h3 className="font-semibold">Panel administratora</h3>
              <p className="text-sm text-muted-foreground">Przegląd systemu i raporty</p>
            </div>
            
            <div className="p-6 space-y-4">
              {/* Stats Grid */}
              <div className="grid grid-cols-5 gap-3">
                {adminStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-3 rounded-xl bg-muted/50 text-center"
                  >
                    <stat.icon className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
                    <p className="text-lg font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Progress Card */}
              <div className="p-4 rounded-xl bg-muted/50">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium">Postęp dzisiejszych tras</h4>
                    <p className="text-sm text-muted-foreground">2 980 z 3 420 adresów</p>
                  </div>
                  <span className="text-2xl font-bold text-primary">87%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "87%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-hero-gradient rounded-full"
                  />
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-muted/50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Aktywne trasy</p>
                    <p className="text-xl font-bold">18</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-muted/50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Zakończone</p>
                    <p className="text-xl font-bold">42</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Worker Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card border border-border shadow-soft overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-border bg-muted/50">
              <h3 className="font-semibold">Panel pracownika</h3>
              <p className="text-sm text-muted-foreground">Podsumowanie dnia i zadania w terenie</p>
            </div>
            
            <div className="p-6 space-y-4">
              {/* Worker Info */}
              <div className="p-4 rounded-xl bg-muted/50 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-hero-gradient flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pracownik</p>
                  <p className="text-lg font-semibold">Jan Kowalski</p>
                </div>
              </div>

              {/* Day Progress */}
              <div className="p-4 rounded-xl bg-muted/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Postęp dnia</p>
                  <span className="text-2xl font-bold text-primary">72%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "72%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-hero-gradient rounded-full"
                  />
                </div>
              </div>

              {/* Worker Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-success/5 border border-success/20 text-center">
                  <CheckCircle className="w-6 h-6 text-success mx-auto mb-2" />
                  <p className="text-2xl font-bold">186</p>
                  <p className="text-sm text-muted-foreground">Odebrane</p>
                </div>
                <div className="p-4 rounded-xl bg-warning/5 border border-warning/20 text-center">
                  <AlertTriangle className="w-6 h-6 text-warning mx-auto mb-2" />
                  <p className="text-2xl font-bold">54</p>
                  <p className="text-sm text-muted-foreground">Pozostało</p>
                </div>
              </div>

              {/* Total Addresses */}
              <div className="p-4 rounded-xl bg-muted/50 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Łącznie adresów</p>
                  <p className="text-lg font-semibold">240</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-6 rounded-2xl bg-hero-gradient text-primary-foreground text-center"
        >
          <p className="text-lg font-medium">
            💡 Możemy przygotować makiety na Waszych danych i pokazać je w trakcie spotkania.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
