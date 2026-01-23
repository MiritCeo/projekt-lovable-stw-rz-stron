import { motion } from "framer-motion";
import { Check, Zap, Settings, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Standardowy",
    description: "Gotowe rozwiązanie dla typowych potrzeb JST",
    icon: Zap,
    popular: false,
    features: [
      "Ewidencja nieruchomości i pojemników",
      "Harmonogramy odbiorów",
      "Planowanie tras",
      "Raporty i eksporty CSV/XLSX",
      "Panel administratora",
      "Aplikacja mobilna dla pracowników",
      "Import danych z Radix",
      "Wsparcie techniczne 8/5",
    ],
    cta: "Zapytaj o wycenę",
  },
  {
    name: "Indywidualny",
    description: "Dostosowany do specyficznych potrzeb Twojej gminy",
    icon: Settings,
    popular: true,
    features: [
      "Wszystko z planu Standardowego",
      "Dostosowanie interfejsu i workflow",
      "Niestandardowe raporty i zestawienia",
      "Integracje z systemami JST",
      "Dedykowane szkolenia dla zespołu",
      "Priorytetowe wsparcie techniczne",
      "Konsultacje wdrożeniowe",
      "SLA z gwarantowanym czasem reakcji",
    ],
    cta: "Umów konsultację",
  },
  {
    name: "Na zamówienie",
    description: "System szyty na miarę od podstaw",
    icon: Wrench,
    popular: false,
    features: [
      "Budowa systemu od zera",
      "Pełna analiza procesów biznesowych",
      "Architektura dopasowana do potrzeb",
      "Unikalne funkcjonalności",
      "Integracje z dowolnymi systemami",
      "Dedykowany zespół projektowy",
      "Pełna dokumentacja techniczna",
      "Wsparcie 24/7 i rozwój systemu",
    ],
    cta: "Porozmawiajmy",
  },
];

export function Pricing() {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cennik" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Plany wdrożenia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wybierz model współpracy dopasowany do potrzeb
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferujemy elastyczne opcje wdrożenia – od gotowego systemu po rozwiązania 
            budowane całkowicie od podstaw.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-hero-gradient text-primary-foreground text-sm font-medium px-4 py-1 rounded-full shadow-lg">
                    Najpopularniejszy
                  </span>
                </div>
              )}
              <Card 
                className={`h-full flex flex-col transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? "border-primary/50 shadow-lg scale-105 bg-card" 
                    : "border-border hover:border-primary/30"
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    plan.popular ? "bg-hero-gradient" : "bg-accent"
                  }`}>
                    <plan.icon className={`w-7 h-7 ${
                      plan.popular ? "text-primary-foreground" : "text-primary"
                    }`} />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button 
                    onClick={scrollToContact}
                    className={`w-full ${
                      plan.popular 
                        ? "bg-hero-gradient hover:opacity-90" 
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto"
        >
          Wszystkie wyceny są indywidualne i zależą od wielkości gminy, liczby nieruchomości 
          oraz zakresu wymaganych funkcjonalności. Skontaktuj się z nami, aby otrzymać 
          szczegółową ofertę.
        </motion.p>
      </div>
    </section>
  );
}
