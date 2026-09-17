export const WHATSAPP = "5561991321529";
export const PHONE_DISPLAY = "(61) 9 9132-1529";
export const EMAIL = "contato@frostclima.com.br";
export const AREA = "Brasília e região";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { label: "Serviços", href: "#servicos" },
  { label: "Equipamentos", href: "#equipamentos" },
  { label: "Marcas", href: "#marcas" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export const SERVICOS = [
  {
    id: "instalacao",
    titulo: "Instalação",
    descricao:
      "Instalação e desinstalação completa de todos os modelos de Ar-Condicionado.",
    itens: [
      "Técnicos Certificados",
      "Suporte técnico antes e após o serviço",
      "3 meses de Garantia",
    ],
  },
  {
    id: "manutencao",
    titulo: "Manutenção",
    descricao:
      "Garantimos o bom funcionamento do seu Ar-Condicionado com manutenção técnica.",
    itens: [
      "Correção de falhas",
      "Ajustes de funcionamento e testes",
      "Teste de recarga de gás e performance",
    ],
  },
  {
    id: "limpeza",
    titulo: "Limpeza",
    descricao:
      "Limpeza profissional de Evaporadora e Condensadora. Produtos de Qualidade.",
    itens: [
      "Limpeza com alta pressão",
      "Desobstrução do dreno",
      "Aplicação de antibactericida e aromatizante",
    ],
  },
];

export const MARCAS = [
  "Carrier",
  "Brastemp",
  "Bosch",
  "Electrolux",
  "Consul",
  "York",
  "Rheem",
  "Midea",
  "LG",
  "Springer",
  "Samsung",
  "Suryha",
  "Gree",
  "Fujitsu",
  "Elgin",
  "Komeco",
  "Hitachi",
  "Daikin",
];
