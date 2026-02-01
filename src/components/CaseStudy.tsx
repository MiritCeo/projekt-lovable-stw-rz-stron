import { motion } from "framer-motion";
import { 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle2, 
  Building2,
  MapPin,
  Calendar
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const caseStudies = [
  {
    title: "Wykrycie nielegalnego podrzucania odpadów",
    location: "PSZOK 1",
    period: "6 miesięcy analizy",
    problem: "Nagły wzrost ilości odpadów zmieszanych w 3 punktach odbioru przekraczający deklaracje mieszkańców o 40%.",
    solution: "System wykrył anomalię na podstawie porównania deklaracji z rzeczywistą wagą odbieranych odpadów. Analiza tras wykazała wzorzec – nadwyżki pojawiały się w poniedziałki po weekendach.",
    result: "Identyfikacja 12 przypadków podrzucania odpadów z sąsiedniej gminy. Wdrożenie monitoringu i uszczelnienie systemu.",
    savings: "78 000 zł",
    savingsLabel: "rocznie zaoszczędzone na utylizacji",
    icon: AlertTriangle,
    color: "text-orange-500",
  },
  {
    title: "Optymalizacja tras i redukcja kosztów paliwa",
    location: "PSZOK 2",
    period: "3 miesiące wdrożenia",
    problem: "Nieefektywne trasy odbioru powodowały nadmierne zużycie paliwa i opóźnienia w harmonogramach.",
    solution: "Analiza danych GPS i czasów przejazdu pozwoliła na reorganizację 8 tras. System zasugerował zmianę kolejności punktów i eliminację zbędnych przejazdów.",
    result: "Redukcja dziennego przebiegu o 15% przy zachowaniu wszystkich punktów odbioru. Skrócenie czasu pracy kierowców.",
    savings: "124 000 zł",
    savingsLabel: "rocznie oszczędności na paliwie",
    icon: TrendingDown,
    color: "text-primary",
  },
  {
    title: "Uszczelnienie systemu deklaracji śmieciowych",
    location: "PSZOK 3",
    period: "12 miesięcy monitoringu",
    problem: "Rozbieżności między zadeklarowaną liczbą osób w gospodarstwach a rzeczywistą ilością generowanych odpadów.",
    solution: "Algorytm porównujący średnią produkcję odpadów na osobę z deklaracjami. Flagowanie gospodarstw z nietypowo niskimi deklaracjami przy wysokiej produkcji odpadów.",
    result: "Weryfikacja 340 deklaracji, korekta 89 przypadków zaniżonych danych. Wzrost wpływów z opłat śmieciowych o 12%.",
    savings: "210 000 zł",
    savingsLabel: "dodatkowych wpływów rocznie",
    icon: CheckCircle2,
    color: "text-green-500",
  },
];

export function CaseStudy() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Przykłady wdrożeń
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Realne przypadki i oszczędności
          </h2>
          <p className="text-lg text-muted-foreground">
            Zobacz, jak nasz system pomógł przedsiębiorstwom komunalnym wykryć nieprawidłowości 
            i zoptymalizować koszty zarządzania odpadami.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="h-full border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-accent flex items-center justify-center ${study.color}`}>
                      <study.icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{study.savings}</p>
                      <p className="text-xs text-muted-foreground">{study.savingsLabel}</p>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-snug">{study.title}</CardTitle>
                  <div className="flex flex-wrap gap-3 mt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      {study.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {study.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-destructive mb-1">Problem</h4>
                    <p className="text-sm text-muted-foreground">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-1">Rozwiązanie</h4>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-1">Rezultat</h4>
                    <p className="text-sm text-muted-foreground">{study.result}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Każde wdrożenie analizujemy indywidualnie, dostosowując system do specyfiki Twojej organizacji.
          </p>
          <a 
            href="#kontakt" 
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Porozmawiaj z nami o Twoim przypadku
            <MapPin className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
