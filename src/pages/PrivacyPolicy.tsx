export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Polityka prywatności</h1>
          <p className="text-muted-foreground">
            Dokument określa zasady przetwarzania danych osobowych i korzystania z serwisu
            e-odpady.pl.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Administrator danych</h2>
          <p>
            Administratorem danych jest spółka:
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Forma prawna: Spółka z ograniczoną odpowiedzialnością</li>
            <li>Adres siedziby: ul. Edwarda Horoszkiewicza 1, 63-300 Pleszew, Polska</li>
            <li>KRS: 0000996483</li>
            <li>NIP: 6080121713</li>
            <li>REGON: 523373992</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            Kontakt: telefon 575 730 760 lub formularz kontaktowy na stronie.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Zakres danych</h2>
          <p className="text-sm text-muted-foreground">
            Przetwarzamy dane podawane w formularzu kontaktowym lub widżecie kontaktu,
            w szczególności: imię i nazwisko, nazwa organizacji, numer telefonu, adres e-mail
            służbowy, treść wiadomości oraz metadane techniczne związane z przesłaniem
            formularza.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Cele i podstawy prawne</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Kontakt handlowy i obsługa zapytań – art. 6 ust. 1 lit. a i f RODO.</li>
            <li>Realizacja obowiązków prawnych – art. 6 ust. 1 lit. c RODO.</li>
            <li>Ustalenie, dochodzenie lub obrona roszczeń – art. 6 ust. 1 lit. f RODO.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Odbiorcy danych</h2>
          <p className="text-sm text-muted-foreground">
            Dane mogą być przekazywane podmiotom wspierającym obsługę systemu (np. hosting,
            utrzymanie infrastruktury IT) oraz podmiotom świadczącym usługi niezbędne do
            realizacji kontaktu. Dane nie są sprzedawane.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Okres przechowywania</h2>
          <p className="text-sm text-muted-foreground">
            Dane przechowujemy przez czas niezbędny do realizacji celu, a następnie do czasu
            przedawnienia ewentualnych roszczeń lub zgodnie z obowiązującymi przepisami.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Prawa osoby, której dane dotyczą</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Dostęp do danych, sprostowanie, usunięcie, ograniczenie przetwarzania.</li>
            <li>Wniesienie sprzeciwu wobec przetwarzania.</li>
            <li>Przenoszenie danych, jeśli ma zastosowanie.</li>
            <li>Cofnięcie zgody w dowolnym momencie.</li>
            <li>Wniesienie skargi do Prezesa UODO.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Pliki cookies</h2>
          <p className="text-sm text-muted-foreground">
            Serwis może używać plików cookies w celach technicznych, statystycznych i
            funkcjonalnych. Użytkownik może zarządzać plikami cookies w ustawieniach
            przeglądarki.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Kontakt</h2>
          <p className="text-sm text-muted-foreground">
            W sprawach związanych z ochroną danych osobowych skontaktuj się telefonicznie
            pod numerem 575 730 760 lub poprzez formularz kontaktowy.
          </p>
        </section>
      </div>
    </div>
  );
}
