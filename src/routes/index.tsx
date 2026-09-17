import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/frost/Header";
import { Hero } from "@/components/frost/Hero";
import { Servicos } from "@/components/frost/Servicos";
import { Garantias } from "@/components/frost/Garantias";
import { Equipamentos } from "@/components/frost/Equipamentos";
import { Marcas } from "@/components/frost/Marcas";
import { Sobre } from "@/components/frost/Sobre";
import { Contato } from "@/components/frost/Contato";
import { Footer } from "@/components/frost/Footer";
import { WhatsAppFloat } from "@/components/frost/WhatsAppFloat";

const title = "Frost Clima — Instalação e Manutenção de Ar-Condicionado em Brasília";
const description =
  "Instalação, manutenção e limpeza de ar-condicionado em Brasília. Técnicos certificados, 90 dias de garantia e orçamento rápido pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Garantias />
        <Equipamentos />
        <Marcas />
        <Sobre />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
