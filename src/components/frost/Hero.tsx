import { MessageCircle, MapPin } from "lucide-react";
import { waLink, AREA } from "./data";
import heroImg from "@/assets/hero-tecnico.jpg";

export function Hero() {
  return (
    <section id="topo" className="bg-navy-deep pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold">
            <MapPin className="size-3.5" />
            {AREA}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
            Instalação e manutenção de{" "}
            <span className="text-gold">ar-condicionado</span> com técnicos certificados
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/75">
            Atendimento residencial e comercial em Brasília. Serviço rápido, limpo e com
            garantia — preservando a garantia do fabricante do seu aparelho.
          </p>
          <a
            href={waLink(
              "Olá! Gostaria de solicitar um orçamento de ar-condicionado em Brasília.",
            )}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-5" />
            Falar no WhatsApp
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-primary-foreground/10 shadow-2xl">
          <img
            src={heroImg}
            alt="Técnico instalando ar-condicionado split"
            width={1200}
            height={1408}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
