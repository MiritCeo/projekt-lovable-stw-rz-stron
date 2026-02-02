import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "/logo.svg";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#funkcje", label: "Funkcje" },
  { href: "#panel", label: "Panele" },
  { href: "#korzysci", label: "Korzyści" },
  { href: "#wdrozenie", label: "Wdrożenie" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 md:h-24">
          {/* Logo */}
          <a href="#" className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center overflow-hidden">
              <img src={logo} alt="e-odpady.pl" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <p className="text-base md:text-lg font-semibold text-foreground">e-odpady.pl</p>
              <p className="text-sm text-muted-foreground">System kontroli PSZOK</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <Button asChild className="hidden sm:inline-flex text-base px-5 py-2.5">
              <a href="#kontakt">Umów demo</a>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2">
                <a href="#kontakt" onClick={() => setIsMenuOpen(false)}>
                  Umów demo
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
