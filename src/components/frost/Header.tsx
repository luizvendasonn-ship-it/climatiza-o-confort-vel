import { useState } from "react";
import { Menu, X, Snowflake, MessageCircle } from "lucide-react";
import { NAV, waLink } from "./data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-foreground/10 bg-navy-deep/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#topo" className="flex items-center gap-2">
          <Snowflake className="size-7 text-gold" />
          <span className="text-lg font-extrabold uppercase tracking-wide text-primary-foreground">
            Frost<span className="text-gold">Clima</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink("Olá! Gostaria de solicitar um orçamento com a Frost Clima.")}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          <MessageCircle className="size-4" />
          Orçamento no WhatsApp
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="text-primary-foreground md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-primary-foreground/10 px-5 pb-5 md:hidden">
          <nav className="flex flex-col gap-1 py-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-primary-foreground/85"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={waLink("Olá! Gostaria de solicitar um orçamento com a Frost Clima.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-accent-foreground"
          >
            <MessageCircle className="size-4" />
            Orçamento no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
