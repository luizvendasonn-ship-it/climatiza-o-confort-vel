import split from "@/assets/eq-split.jpg";
import inverter from "@/assets/eq-inverter.jpg";
import pisoTeto from "@/assets/eq-piso-teto.jpg";
import cassete from "@/assets/eq-cassete.jpg";
import cortina from "@/assets/eq-cortina.jpg";
import janela from "@/assets/eq-janela.jpg";

const EQUIPAMENTOS = [
  { nome: "Split | Multi Split", img: split },
  { nome: "Tecnologia Inverter ou Convencional", img: inverter },
  { nome: "Piso Teto", img: pisoTeto },
  { nome: "Cassete", img: cassete },
  { nome: "Cortina de Ar", img: cortina },
  { nome: "Janela", img: janela },
];

export function Equipamentos() {
  return (
    <section id="equipamentos" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            Equipamentos que atendemos
          </h2>
          <p className="mt-3 text-muted-foreground">
            Trabalhamos com todos os principais tipos de ar-condicionado.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EQUIPAMENTOS.map((eq) => (
            <div
              key={eq.nome}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <img
                src={eq.img}
                alt={eq.nome}
                loading="lazy"
                width={944}
                height={704}
                className="h-52 w-full object-contain p-4"
              />
              <p className="border-t border-border px-4 py-4 text-center text-sm font-bold uppercase tracking-wide text-foreground">
                {eq.nome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
