import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { createLead } from "@/lib/leads";

export function LeadWidget() {
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
        source: "floating_widget",
        organization: String(formData.get("organization") || "").trim() || undefined,
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        phone: String(formData.get("phone") || "").trim() || undefined,
        message: String(formData.get("message") || "").trim() || undefined,
        consent: true,
      });

      toast.success("Dziękujemy! Skontaktujemy się wkrótce.");
      e.currentTarget.reset();
      setAgreed(false);
    } catch (error) {
      toast.error("Nie udało się wysłać zgłoszenia. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-full shadow-soft h-12 w-12 p-0 bg-hero-gradient hover:opacity-90">
            <MessageCircle className="h-5 w-5 text-primary-foreground" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Poproś o kontakt</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="lead-organization">Nazwa organizacji</Label>
              <Input
                id="lead-organization"
                name="organization"
                placeholder="np. ZGK Pleszew"
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="lead-name">Osoba kontaktowa</Label>
              <Input
                id="lead-name"
                name="name"
                placeholder="Imię i nazwisko"
                required
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="lead-email">Email służbowy</Label>
              <Input
                id="lead-email"
                name="email"
                type="email"
                placeholder="imie@nazwa.pl"
                required
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="lead-phone">Telefon</Label>
              <Input
                id="lead-phone"
                name="phone"
                type="tel"
                placeholder="+48 123 456 789"
                required
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="lead-message">Wiadomość</Label>
              <Textarea
                id="lead-message"
                name="message"
                placeholder="Krótko opisz potrzeby..."
                rows={3}
                className="mt-1.5"
              />
            </div>
            <div className="flex items-start gap-3">
              <Checkbox
                id="lead-consent"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
              />
              <Label htmlFor="lead-consent" className="text-sm text-muted-foreground leading-relaxed">
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
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Wysyłanie..." : "Wyślij"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
