"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#ia", label: "IA" },
  { href: "#automacao", label: "Automação" },
  { href: "#mentoria", label: "Mentoria" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="#top" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand-800 text-white font-display font-bold text-lg shadow-[var(--shadow-soft)] group-hover:rotate-3 transition-transform">
            PA
          </span>
          <span className="font-display font-bold text-base tracking-tight text-foreground">
            Plataforma <span className="text-brand-800">Ativa</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-muted hover:text-brand-800 rounded-lg hover:bg-subtle transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="sm">
              <MessageCircle className="w-4 h-4" />
              Fale conosco
            </Button>
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-foreground"
          aria-label="Abrir menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container-page py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-base font-medium text-foreground hover:bg-subtle rounded-lg"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2"
            >
              <Button variant="primary" size="md" className="w-full">
                <MessageCircle className="w-4 h-4" />
                Fale conosco no WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
