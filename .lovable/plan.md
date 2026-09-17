# Site Frost Clima — instalação e manutenção de ar-condicionado

Página única, moderna, com a identidade atual (azul escuro + dourado), atendendo Brasília.
Contato: WhatsApp (61) 9 9132-1529 e contato@frostclima.com.br.

## Seções da página

1. **Topo fixo** — logo Frost Clima, links de rolagem (Serviços, Equipamentos, Marcas, Sobre, Contato) e botão dourado "Orçamento no WhatsApp".
2. **Destaque inicial** — título forte sobre instalação e manutenção em Brasília, texto curto, botão de WhatsApp e foto de técnico/ar-condicionado.
3. **Três serviços** — Instalação, Manutenção e Limpeza, cada um com ícone dourado, descrição, lista de itens inclusos e botão "Solicitar Orçamento" que abre o WhatsApp (mesma estrutura da referência enviada).
4. **Faixa de garantias** — "Em até 10x sem juros (consulte condições)", "90 dias de garantia", "Equipe Técnica Certificada", "Preservamos a garantia do fabricante".
5. **Tipos de equipamento** — seis cartões: Split | Multi Split, Tecnologia Inverter ou Convencional, Piso Teto, Cassete, Cortina de Ar, Janela, cada um com imagem do aparelho.
6. **Marcas atendidas** — grade com os nomes das marcas da referência (Carrier, Brastemp, Bosch, Electrolux, Consul, York, Rheem, Midea, LG, Springer, Samsung, Suryha, Gree, Fujitsu, Elgin, Komeco, Hitachi, Daikin).
7. **Por que a Frost Clima** — bloco curto de confiança com números/diferenciais e foto de trabalho.
8. **Contato** — formulário simples (nome, telefone, serviço, mensagem) que envia a mensagem pronta para o WhatsApp, mais telefone, e-mail e área atendida (Brasília e região).
9. **Rodapé** — logo, contatos, links das seções e direitos reservados.
10. **Botão flutuante de WhatsApp** visível em toda a rolagem.

## Visual

- Azul escuro profundo como base, dourado como cor de destaque em botões, ícones e detalhes; branco e cinza claro nas seções de conteúdo.
- Tipografia moderna e legível, cantos arredondados suaves e sombras leves, como nas referências.
- Totalmente adaptado para celular.

## Imagens

- Logo e foto já enviados serão publicados como arquivos do site.
- As imagens dos seis tipos de equipamento e a foto do bloco de confiança serão geradas em estilo limpo, fundo branco, coerentes entre si.
- As telas de referência enviadas servem apenas como guia de conteúdo e layout, não entram no site.
- As marcas aparecem como texto estilizado (não uso os logotipos das fabricantes para evitar problema de direitos).

## Detalhes técnicos

- Página construída em `src/routes/index.tsx` (substitui o conteúdo inicial), com componentes em `src/components/frost/` (Header, Hero, Servicos, Garantias, Equipamentos, Marcas, Sobre, Contato, Footer, WhatsAppFloat).
- Cores e fontes definidas como tokens em `src/styles.css`; nenhuma cor fixa direto nos componentes.
- Formulário sem backend: monta o texto e abre `wa.me/5561991321529`.
- Título, descrição e dados de compartilhamento próprios da página inicial.
