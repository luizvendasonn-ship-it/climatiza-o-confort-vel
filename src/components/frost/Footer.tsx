import { Snowflake } from "lucide-react";
import { NAV, PHONE_DISPLAY, EMAIL, AREA } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-navy-deep py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Snowflake className="size-6 text-gold" />
            <span className="text-lg font-extrabold uppercase tracking-wide text-primary-foreground">
              Frost<span className="text-gold">Clima</span>
            </span>
          </div>
          <p className="mt-3 text-sm text-primary-foreground/65">
            Instalação, manutenção e limpeza de ar-condicionado em {AREA}.
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-primary-foreground/70 hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="space-y-2 text-sm text-primary-foreground/70">
          <p>{PHONE_DISPLAY}</p>
          <p>{EMAIL}</p>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Frost Clima. Todos os direitos reservados.
      </p>
    </footer>
  );
}
