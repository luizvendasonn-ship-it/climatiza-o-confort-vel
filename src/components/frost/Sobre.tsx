import { Check } from "lucide-react";
import equipe from "@/assets/sobre-equipe.jpg";

const PONTOS = [
  "Atendimento residencial, comercial e corporativo em Brasília",
  "Técnicos treinados, uniformizados e com ferramentas próprias",
  "Orçamento sem compromisso pelo WhatsApp",
  "Serviço limpo, organizado e no horário combinado",
];

export function Sobre() {
  return (
    <section id="sobre" className="bg-background py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
          <img
            src={equipe}
            alt="Equipe Frost Clima realizando limpeza de condensadora"
            loading="lazy"
            width={1200}
            height={912}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            Por que a Frost Clima
          </h2>
          <p className="mt-4 text-muted-foreground">
            Somos especialistas em climatização em Brasília. Cuidamos do seu
            ar-condicionado do início ao fim, com transparência no orçamento e garantia
            no serviço.
          </p>
          <ul className="mt-7 space-y-3">
            {PONTOS.map((ponto) => (
              <li key={ponto} className="flex gap-3 text-sm text-foreground/80">
                <Check className="mt-0.5 size-5 shrink-0 text-gold" />
                {ponto}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
