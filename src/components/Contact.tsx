import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { createLead } from "@/lib/leads";

const contactInfo = [
  { icon: Phone, label: "Telefon", value: "575 730 760" },
  { icon: MapPin, label: "Adres", value: "ul. Edwarda Horoszkiewicza 1, 63-300 Pleszew" },
  { icon: Clock, label: "Godziny", value: "pn-pt 9:00-16:00" },
];


export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!agreed) {
      toast.error("Proszę zaakceptować zgodę na przetwarzanie danych.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      await createLead({
        source: "contact_form",
        organization: String(formData.get("unit") || "").trim() || undefined,
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        phone: String(formData.get("phone") || "").trim() || undefined,
        message: String(formData.get("message") || "").trim() || undefined,
        consent: true,
      });

      toast.success("Dziękujemy! Odezwiemy się w ciągu 24 godzin roboczych.");

      // Reset form
      (e.target as HTMLFormElement).reset();
      setAgreed(false);
    } catch (error) {
      toast.error("Nie udało się wysłać formularza. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Porozmawiajmy o wdrożeniu
          </h2>
          <p className="text-lg text-muted-foreground">
            Napisz do nas lub zostaw kontakt. Odpowiemy w ciągu 24 godzin roboczych.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              id="formularz"
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-card border border-border shadow-soft space-y-6"
            >
              <h3 className="text-xl font-semibold mb-2">Formularz kontaktowy</h3>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="unit">Nazwa organizacji</Label>
                  <Input
                    id="unit"
                    name="unit"
                    placeholder="np. ZGK Pleszew, Gmina Kalisz"
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="name">Osoba kontaktowa</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Imię i nazwisko"
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email służbowy</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="imie@nazwa.pl"
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+48 123 456 789"
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Wiadomość</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Opisz krótko potrzeby organizacji..."
                    rows={4}
                    className="mt-1.5"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                    Wyrażam zgodę na kontakt w sprawie oferty zgodnie z{" "}
                    <a href="/rodo" className="text-primary hover:underline">
                      RODO
                    </a>{" "}
                    oraz{" "}
                    <a href="/polityka-prywatnosci" className="text-primary hover:underline">
                      polityką prywatności
                    </a>
                    .
                  </Label>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Wysyłanie..." : "Wyślij zapytanie"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Formularz jest zabezpieczony. Twoje dane są chronione.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
