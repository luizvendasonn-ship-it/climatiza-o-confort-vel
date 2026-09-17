import { Cog, Wrench, SprayCan, Check, MessageCircle } from "lucide-react";
import { SERVICOS, waLink } from "./data";

const ICONS = [Cog, Wrench, SprayCan];

export function Servicos() {
  return (
    <section id="servicos" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            Nossos serviços
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tudo que o seu ar-condicionado precisa, do projeto à manutenção periódica.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICOS.map((servico, i) => {
            const Icon = ICONS[i] ?? Cog;
            return (
              <article
                key={servico.id}
                className="flex flex-col rounded-2xl border border-border bg-card p-8 text-center shadow-sm"
              >
                <Icon className="mx-auto size-10 text-gold" />
                <h3 className="mt-5 text-xl font-bold text-foreground">{servico.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {servico.descricao}
                </p>
                <ul className="mt-6 space-y-2.5 text-left">
                  {servico.itens.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-foreground/80">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(
                    `Olá! Gostaria de um orçamento de ${servico.titulo.toLowerCase()} de ar-condicionado.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gold px-5 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-accent-foreground"
                >
                  <MessageCircle className="size-4" />
                  Solicitar Orçamento
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
