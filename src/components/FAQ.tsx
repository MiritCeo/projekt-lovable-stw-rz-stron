import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Jak szybko można wdrożyć system?",
    answer: "Standardowe wdrożenie trwa 10-14 dni roboczych, zależnie od jakości danych źródłowych i zakresu funkcji.",
  },
  {
    question: "Czy obsługujemy import danych z Radix?",
    answer: "Tak, przygotowaliśmy gotowe importy oraz walidacje pod strukturę danych z Radix. To znacząco przyspiesza proces wdrożenia.",
  },
  {
    question: "Czy aplikacja działa na tabletach w terenie?",
    answer: "Tak, interfejs jest w pełni responsywny i przystosowany do pracy mobilnej w przeglądarce. Nie wymagamy dedykowanej aplikacji mobilnej.",
  },
  {
    question: "Czy można dostosować moduły do specyfiki gminy?",
    answer: "Tak, każdy moduł można rozbudować o dodatkowe pola, statusy i raporty. System jest elastyczny i dopasowuje się do potrzeb.",
  },
  {
    question: "Jak wygląda wsparcie po wdrożeniu?",
    answer: "Zapewniamy opiekę powdrożeniową, regularne szkolenia oraz wsparcie w ramach umowy SLA. Jesteśmy dostępni w godzinach pracy.",
  },
  {
    question: "Jakie są koszty wdrożenia i utrzymania?",
    answer: "Koszty zależą od wielkości gminy i zakresu modułów. Podczas prezentacji przygotujemy indywidualną wycenę dopasowaną do Państwa potrzeb.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Najczęstsze pytania
          </h2>
          <p className="text-lg text-muted-foreground">
            Odpowiedzi na pytania, które najczęściej słyszymy od samorządów.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-soft transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
