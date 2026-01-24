import { motion } from "framer-motion";
import { Check, Zap, Settings, Wrench, Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Feature {
  name: string;
  description: string;
}

const plans = [
  {
    name: "Standardowy",
    description: "Gotowe rozwiązanie dla przedsiębiorstw komunalnych",
    icon: Zap,
    popular: false,
    features: [
      { name: "Ewidencja nieruchomości i pojemników", description: "Kompletna baza danych nieruchomości z przypisanymi pojemnikami, statusami deklaracji i historią zmian." },
      { name: "Harmonogramy odbiorów", description: "Definiowanie cyklicznych terminów odbioru odpadów z uwzględnieniem frakcji i wyjątków (święta, zmiany)." },
      { name: "Planowanie tras", description: "Automatyczne tworzenie optymalnych tras dla pojazdów z uwzględnieniem pojemności i lokalizacji." },
      { name: "Raporty i analityka odpadów", description: "Statystyki zbiórki, wykrywanie anomalii na trasach, kontrola kosztów segregacji i identyfikacja nieprawidłowości." },
      { name: "Panel administratora", description: "Centralny kokpit z podglądem kluczowych wskaźników, alertów i statusów realizacji." },
      { name: "Aplikacja mobilna dla pracowników", description: "Dedykowana aplikacja na tablet/telefon do potwierdzania odbiorów i zgłaszania uwag w terenie." },
      { name: "Import danych z Radix", description: "Automatyczne mapowanie i import danych z popularnego systemu Radix używanego przez wiele gmin." },
      { name: "Wsparcie techniczne 8/5", description: "Pomoc techniczna dostępna w dni robocze od 8:00 do 16:00 przez telefon i email." },
    ] as Feature[],
    cta: "Zapytaj o wycenę",
  },
  {
    name: "Indywidualny",
    description: "Dostosowany do specyficznych potrzeb Twojej gminy",
    icon: Settings,
    popular: true,
    features: [
      { name: "Wszystko z planu Standardowego", description: "Pełen zakres funkcjonalności z planu Standardowego jako baza do rozbudowy." },
      { name: "Dostosowanie interfejsu i workflow", description: "Modyfikacja wyglądu i przepływów pracy zgodnie z wewnętrznymi procedurami gminy." },
      { name: "Zaawansowana analityka i wykrywanie anomalii", description: "Szczegółowe raporty o nadwyżkach kosztów, nieprawidłowościach w deklaracjach, porzuconych odpadach z innych gmin." },
      { name: "Integracje z systemami urzędowymi", description: "Połączenie z systemami księgowymi, eBOK, ePUAP i innymi używanymi w urzędzie." },
      { name: "Dedykowane szkolenia dla zespołu", description: "Szkolenia on-site lub online dla administratorów, pracowników biurowych i ekip terenowych." },
      { name: "Priorytetowe wsparcie techniczne", description: "Skrócony czas reakcji na zgłoszenia i dedykowany opiekun klienta." },
      { name: "Konsultacje wdrożeniowe", description: "Analiza procesów i doradztwo w optymalizacji gospodarki odpadami przed wdrożeniem." },
      { name: "SLA z gwarantowanym czasem reakcji", description: "Umowa gwarantująca maksymalny czas reakcji na krytyczne awarie (np. 4h)." },
    ] as Feature[],
    cta: "Umów konsultację",
  },
  {
    name: "Na zamówienie",
    description: "System szyty na miarę od podstaw",
    icon: Wrench,
    popular: false,
    features: [
      { name: "Budowa systemu od zera", description: "Projektowanie i implementacja całkowicie nowego systemu dopasowanego do unikalnych potrzeb." },
      { name: "Pełna analiza procesów biznesowych", description: "Szczegółowy audyt obecnych procedur i identyfikacja obszarów do optymalizacji." },
      { name: "Architektura dopasowana do potrzeb", description: "Wybór technologii i struktury systemu optymalnej dla skali i wymagań projektu." },
      { name: "Unikalne funkcjonalności", description: "Implementacja specyficznych modułów niedostępnych w rozwiązaniach standardowych." },
      { name: "Integracje z dowolnymi systemami", description: "Możliwość połączenia z każdym zewnętrznym systemem poprzez API lub dedykowane konektory." },
      { name: "Dedykowany zespół projektowy", description: "Przydzielony project manager, analityk i zespół developerów na czas realizacji." },
      { name: "Pełna dokumentacja techniczna", description: "Kompletna dokumentacja kodu, API i procesów dla zespołu IT klienta." },
      { name: "Wsparcie 24/7 i rozwój systemu", description: "Całodobowe wsparcie, monitoring oraz ciągły rozwój i aktualizacje systemu." },
    ] as Feature[],
    cta: "Porozmawiajmy",
  },
];

const aiAddon = {
  name: "Moduł AI",
  subtitle: "Opcjonalny dodatek do każdego pakietu",
  description: "Modele sztucznej inteligencji szyte na miarę pod wymagania Twojej gminy",
  icon: Brain,
  features: [
    { name: "Brak gotowych modeli AI", description: "Nie oferujemy gotowych, uniwersalnych rozwiązań. Każdy model AI jest projektowany i trenowany indywidualnie pod specyfikę Twojej gminy." },
    { name: "Wykrywanie anomalii wagowych", description: "Model AI analizujący historyczne dane wagowe i identyfikujący nietypowe wzorce wskazujące na nieprawidłowości." },
    { name: "Analiza wzorców deklaracji", description: "Automatyczne wykrywanie rozbieżności między deklaracjami a rzeczywistą produkcją odpadów." },
    { name: "Predykcja wolumenów odpadów", description: "Prognozowanie ilości odpadów na podstawie historii, sezonowości i czynników zewnętrznych." },
    { name: "Optymalizacja tras z ML", description: "Uczenie maszynowe do ciągłego doskonalenia tras na podstawie rzeczywistych danych operacyjnych." },
    { name: "Identyfikacja podrzucania odpadów", description: "Algorytmy wykrywające odpady spoza obsługiwanego terenu na podstawie charakterystyki i lokalizacji." },
    { name: "Automatyczna klasyfikacja zgłoszeń", description: "AI kategoryzujące i priorytetyzujące zgłoszenia od pracowników terenowych." },
    { name: "Ciągłe doskonalenie modeli", description: "Regularne retrenowanie modeli na nowych danych, aby zwiększać skuteczność wykrywania." },
  ] as Feature[],
  cta: "Zapytaj o wdrożenie AI",
};

export function Pricing() {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <TooltipProvider delayDuration={200}>
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
                        <Tooltip key={feature.name}>
                          <TooltipTrigger asChild>
                            <li className="flex items-start gap-3 cursor-help group">
                              <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                              <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200 border-b border-dashed border-muted-foreground/30 group-hover:border-primary/50">
                                {feature.name}
                              </span>
                            </li>
                          </TooltipTrigger>
                          <TooltipContent 
                            side="top" 
                            className="max-w-xs bg-popover/95 backdrop-blur-sm border-border shadow-xl p-3"
                            sideOffset={8}
                          >
                            <motion.p
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2 }}
                              className="text-sm leading-relaxed"
                            >
                              {feature.description}
                            </motion.p>
                          </TooltipContent>
                        </Tooltip>
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

          {/* AI Addon Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <Card className="border-2 border-dashed border-primary/30 bg-gradient-to-br from-accent/50 to-background overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-hero-gradient opacity-5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <CardHeader className="text-center pb-6 relative">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Opcjonalny dodatek
                  </span>
                </div>
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 bg-hero-gradient flex items-center justify-center">
                  <aiAddon.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-3xl">{aiAddon.name}</CardTitle>
                <CardDescription className="text-lg mt-2">
                  {aiAddon.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="grid md:grid-cols-2 gap-4">
                  {aiAddon.features.map((feature) => (
                    <Tooltip key={feature.name}>
                      <TooltipTrigger asChild>
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors cursor-help group">
                          <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200 text-sm">
                            {feature.name}
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent 
                        side="top" 
                        className="max-w-xs bg-popover/95 backdrop-blur-sm border-border shadow-xl p-3"
                        sideOffset={8}
                      >
                        <motion.p
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm leading-relaxed"
                        >
                          {feature.description}
                        </motion.p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
                <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    <Brain className="w-4 h-4 inline-block mr-2 text-primary" />
                    Każdy model AI jest tworzony indywidualnie po analizie danych i procesów Twojej gminy. 
                    Nie stosujemy gotowych rozwiązań – dopasowujemy algorytmy do Twoich unikalnych potrzeb.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="pt-6 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="bg-hero-gradient hover:opacity-90"
                  size="lg"
                >
                  {aiAddon.cta}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

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
    </TooltipProvider>
  );
}
