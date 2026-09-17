import { MARCAS } from "./data";

export function Marcas() {
  return (
    <section id="marcas" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            Marcas atendidas
          </h2>
          <p className="mt-3 text-muted-foreground">
            Assistência para as principais fabricantes do mercado.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {MARCAS.map((marca) => (
            <div
              key={marca}
              className="rounded-xl border border-border bg-card px-3 py-5 text-center text-sm font-semibold uppercase tracking-wide text-foreground/75"
            >
              {marca}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
