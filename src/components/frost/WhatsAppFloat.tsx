import { MessageCircle } from "lucide-react";
import { waLink } from "./data";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Olá! Gostaria de falar com a Frost Clima.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex size-14 items-center justify-center rounded-full bg-gold shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="size-7 text-accent-foreground" />
    </a>
  );
}
