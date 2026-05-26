# Plataforma Ativa — Site Institucional

Site institucional e de captação de leads da **Plataforma Ativa**, consultoria brasileira de educação e tecnologia especializada em desenvolvimento de plataformas, projetos educacionais, consultoria em Inteligência Artificial, automação educacional e mentoria em IA.

A versão de produção atende em **<https://plataformaativa.com.br>**.

---

## Sobre o produto

A Plataforma Ativa atende instituições de ensino, educadores e profissionais que querem incorporar tecnologia (especialmente IA) em seus processos pedagógicos.

A landing page apresenta:

- **Hero** — proposta de valor + CTA principal (WhatsApp)
- **Serviços** — desenvolvimento de plataformas, projetos educacionais, consultoria
- **Consultoria em IA** — processo em 4 etapas (Análise → Estratégia → Implementação → Capacitação)
- **Automação Educacional** — Diagnóstico → Planejamento → Automação → Otimização
- **Mentoria em IA** — trilha de 4 módulos para educadores
- **Diferenciais** — equipe especialista, abordagem personalizada, inovação, suporte contínuo
- **Contato** — formulário que abre o WhatsApp pré-preenchido + canais diretos
- **Botão flutuante** de WhatsApp em todas as telas

**Público-alvo:** gestores educacionais, coordenadores pedagógicos, educadores autônomos e EdTechs.

**Conversão principal:** WhatsApp `(81) 99807-3496`.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) com Turbopack |
| Linguagem | TypeScript 5 |
| UI runtime | React 19 |
| Estilização | [Tailwind CSS v4](https://tailwindcss.com/) com `@theme` em CSS |
| Animações | [Framer Motion 11](https://www.framer.com/motion/) |
| Ícones | [Lucide React](https://lucide.dev/) |
| Variantes de componente | `class-variance-authority` + `clsx` + `tailwind-merge` |
| Lint | ESLint 9 (`next/core-web-vitals` + `next/typescript`) |
| Fontes | Inter (corpo) e Manrope (display) via `next/font/google` |

**Por que essa stack:** SSR/SSG nativos, fontes self-hosted, ótimo Lighthouse, deploy trivial na Vercel, e — não menos importante — coerência com o que a empresa vende (desenvolvimento moderno de plataformas).

---

## Identidade visual

Cores extraídas e refinadas a partir da versão anterior do site:

- **Brand 800** `#013180` — azul profundo (primária)
- **Accent / Brand 400** `#609DFF` — azul mais claro (CTAs secundários, destaques)
- **Background** `#FFFFFF`
- **Foreground** `#0C1426`
- **Muted** `#5A6478`

Tokens definidos em [`app/globals.css`](app/globals.css) via diretiva `@theme` do Tailwind v4.

---

## Como rodar localmente

**Requisitos:** Node.js 20+ e npm 10+.

```bash
# instalar dependências
npm install

# subir o servidor de desenvolvimento (Turbopack)
npm run dev
```

A aplicação inicia em [http://localhost:3000](http://localhost:3000) (ou na próxima porta livre se a 3000 estiver ocupada).

### Scripts disponíveis

```bash
npm run dev     # dev server com Turbopack
npm run build   # build de produção
npm run start   # serve o build de produção
npm run lint    # ESLint
```

---

## Estrutura do projeto

```
.
├── app/
│   ├── globals.css        # tokens de tema (Tailwind v4 @theme) e utilitários
│   ├── layout.tsx         # root layout, fontes, metadata global e SEO
│   └── page.tsx           # composição da landing page
├── components/
│   ├── ui/
│   │   ├── button.tsx     # primitive Button com variantes
│   │   └── reveal.tsx     # animação de reveal on scroll
│   ├── header.tsx         # header sticky com menu mobile
│   ├── hero.tsx           # hero com gradient text e badges
│   ├── services.tsx       # grid de serviços
│   ├── ai-consulting.tsx  # 4 etapas de consultoria em IA
│   ├── automation.tsx     # seção dark de automação
│   ├── mentorship.tsx     # trilha de 4 módulos de mentoria
│   ├── differentials.tsx  # diferenciais da empresa
│   ├── contact.tsx        # cards de contato + formulário → WhatsApp
│   ├── footer.tsx         # footer com navegação e contatos
│   └── whatsapp-fab.tsx   # botão flutuante de WhatsApp
├── lib/
│   └── utils.ts           # cn() e gerador de URL WhatsApp
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── tsconfig.json
└── package.json
```

**Aliases:** o import alias `@/*` mapeia para a raiz do projeto (configurado em `tsconfig.json`).

---

## SEO e metadata

A configuração de SEO está centralizada em [`app/layout.tsx`](app/layout.tsx) e cobre:

- `title` (template) e `description`
- `keywords` relacionadas a EdTech, IA e educação
- Open Graph completo (`og:title`, `og:description`, `og:type`, `og:locale=pt_BR`, `og:url`)
- Twitter Card `summary_large_image`
- `robots: index, follow`
- `canonical` apontando para o domínio de produção
- `viewport` com `themeColor: #013180`

> Para imagem social (`og:image`), basta adicionar `app/opengraph-image.png` (1200×630) — o Next.js gera automaticamente as metatags.

---

## Convenções

- **Server Components por padrão**, `"use client"` apenas quando há estado, efeito ou animação interativa
- **Cores** consumidas via classes Tailwind (`bg-brand-800`, `text-accent` etc.) — nada de hex inline
- **Acessibilidade** — landmarks semânticos (`<header>`, `<main>`, `<section>`, `<footer>`), `aria-label` nos botões só com ícone, focus states visíveis
- **Mobile-first** — todos os componentes são responsivos com breakpoints `sm`, `md`, `lg`
- **Animações** via `<Reveal>` ([components/ui/reveal.tsx](components/ui/reveal.tsx)) para `whileInView` consistente

---

## Roadmap

- [ ] Logo definitivo (placeholder atual: "PA")
- [ ] Favicon e `opengraph-image.png` próprios
- [ ] Seção de **cases e depoimentos** (prova social)
- [ ] **Blog/Insights** para SEO orgânico (Markdown ou CMS — Sanity/Payload)
- [ ] Página de mentoria com checkout integrado (Stripe ou Hotmart)
- [ ] Chatbot com IA própria na home (demonstração viva do serviço)
- [ ] Conformidade LGPD: política de privacidade, banner de cookies
- [ ] Versão em inglês

---

## Deploy

Recomendação: **Vercel** (criadora do Next.js, free tier suficiente).

```bash
# uma vez
npm i -g vercel

# deploy
vercel

# promover para produção
vercel --prod
```

Alternativas: Cloudflare Pages, Netlify, Railway. Em qualquer um basta apontar para o repositório — o build é `npm run build` e o output é o padrão Next.js.

---

## Contato

- **WhatsApp:** [(81) 99807-3496](https://wa.me/5581998073496)
- **E-mail:** contato@plataformaativa.com.br
- **Atendimento:** Seg–Sex, 8h–18h
