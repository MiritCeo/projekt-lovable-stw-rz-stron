import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

export default function Rodo() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-28 space-y-8">
        <div className="space-y-2">
          <Link to="/" className="text-sm text-primary hover:underline">
            ← Powrót do strony głównej
          </Link>
          <h1 className="text-3xl font-bold">Informacja RODO</h1>
          <p className="text-muted-foreground">
            Klauzula informacyjna dotycząca przetwarzania danych osobowych w związku z
            kontaktem i obsługą zapytań.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Administrator danych</h2>
          <p className="text-sm text-muted-foreground">
            Administratorem danych jest spółka z ograniczoną odpowiedzialnością z siedzibą
            przy ul. Edwarda Horoszkiewicza 1, 63-300 Pleszew, Polska, KRS 0000996483,
            NIP 6080121713, REGON 523373992.
          </p>
          <p className="text-sm text-muted-foreground">
            Kontakt: telefon 575 730 760 lub formularz kontaktowy na stronie.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Cele przetwarzania</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Udzielenie odpowiedzi na zapytania i prowadzenie korespondencji.</li>
            <li>Przedstawienie oferty i kontakt handlowy.</li>
            <li>Ustalenie, dochodzenie lub obrona roszczeń.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Podstawa prawna</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Art. 6 ust. 1 lit. a RODO – zgoda (kontakt handlowy).</li>
            <li>Art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes.</li>
            <li>Art. 6 ust. 1 lit. c RODO – obowiązki prawne administratora.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Odbiorcy danych</h2>
          <p className="text-sm text-muted-foreground">
            Odbiorcami danych mogą być podmioty świadczące usługi IT, hostingowe oraz inne
            podmioty, którym powierzyliśmy przetwarzanie danych w niezbędnym zakresie.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Okres przechowywania</h2>
          <p className="text-sm text-muted-foreground">
            Dane przechowujemy przez czas niezbędny do realizacji celu, a następnie zgodnie
            z obowiązującymi przepisami lub do czasu przedawnienia roszczeń.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Prawa osoby, której dane dotyczą</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Prawo dostępu do danych i otrzymania ich kopii.</li>
            <li>Prawo do sprostowania, usunięcia lub ograniczenia przetwarzania.</li>
            <li>Prawo do sprzeciwu wobec przetwarzania.</li>
            <li>Prawo do przenoszenia danych (jeśli ma zastosowanie).</li>
            <li>Prawo do cofnięcia zgody w dowolnym momencie.</li>
            <li>Prawo do wniesienia skargi do Prezesa UODO.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Źródło danych</h2>
          <p className="text-sm text-muted-foreground">
            Dane pochodzą bezpośrednio od użytkowników wprowadzających je do formularza
            kontaktowego lub widżetu kontaktowego.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Informacje dodatkowe</h2>
          <p className="text-sm text-muted-foreground">
            Szczegółowe zasady przetwarzania danych opisuje{" "}
            <a href="/polityka-prywatnosci" className="text-primary hover:underline">
              polityka prywatności
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
