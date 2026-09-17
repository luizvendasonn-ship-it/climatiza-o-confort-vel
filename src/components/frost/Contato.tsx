import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { waLink, PHONE_DISPLAY, EMAIL, AREA, SERVICOS } from "./data";

export function Contato() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState(SERVICOS[0].titulo);
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const texto = `Olá, Frost Clima!\nNome: ${nome}\nTelefone: ${telefone}\nServiço: ${servico}\nMensagem: ${mensagem}`;
    window.open(waLink(texto), "_blank", "noopener");
  }

  return (
    <section id="contato" className="bg-navy-deep py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">
            Peça seu orçamento
          </h2>
          <p className="mt-4 text-primary-foreground/75">
            Responda em poucos campos e a conversa abre direto no WhatsApp com os dados
            preenchidos.
          </p>

          <div className="mt-8 space-y-4 text-primary-foreground/85">
            <p className="flex items-center gap-3">
              <Phone className="size-5 text-gold" /> {PHONE_DISPLAY}
            </p>
            <p className="flex items-center gap-3">
              <Mail className="size-5 text-gold" /> {EMAIL}
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="size-5 text-gold" /> {AREA}
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl bg-card p-7 shadow-xl"
        >
          <div>
            <label className="text-sm font-medium text-foreground" htmlFor="nome">
              Nome
            </label>
            <input
              id="nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground" htmlFor="telefone">
              Telefone
            </label>
            <input
              id="telefone"
              required
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
              placeholder="(61) 9 0000-0000"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground" htmlFor="servico">
              Serviço
            </label>
            <select
              id="servico"
              value={servico}
              onChange={(e) => setServico(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
            >
              {SERVICOS.map((s) => (
                <option key={s.id}>{s.titulo}</option>
              ))}
              <option>Outro</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground" htmlFor="mensagem">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              rows={4}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
              placeholder="Conte o modelo do aparelho e o endereço"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-4" />
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
