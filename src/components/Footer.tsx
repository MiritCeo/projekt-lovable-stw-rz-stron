import { motion } from "framer-motion";

const footerLinks = [
  { href: "#funkcje", label: "Funkcje" },
  { href: "#funkcje-szczegoly", label: "Wszystkie funkcje" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-hero-gradient flex items-center justify-center text-primary-foreground font-bold text-sm">
                WR
              </div>
              <span className="font-semibold">Waste Route Manager</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Nowoczesne narzędzie dla samorządów.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>© 2026 Waste Route Manager</span>
            <span>•</span>
            <span>Polska</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
