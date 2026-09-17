import { CreditCard, ShieldCheck, UserCheck, BadgeCheck } from "lucide-react";

const ITENS = [
  {
    Icon: CreditCard,
    titulo: "Em até 10x sem juros",
    texto: "(Consulte condições)",
  },
  { Icon: ShieldCheck, titulo: "90 dias de garantia", texto: "em todos os serviços" },
  { Icon: UserCheck, titulo: "Equipe Técnica", texto: "Certificada" },
  { Icon: BadgeCheck, titulo: "Preservamos", texto: "a garantia do fabricante" },
];

export function Garantias() {
  return (
    <section className="bg-surface py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 rounded-2xl bg-card p-8 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {ITENS.map(({ Icon, titulo, texto }) => (
            <div key={titulo} className="flex items-start gap-3">
              <Icon className="size-8 shrink-0 text-gold" />
              <div>
                <p className="font-bold text-foreground">{titulo}</p>
                <p className="text-sm text-muted-foreground">{texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
