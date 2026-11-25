# EuVerso Institucional — Inventário Forense & Baseline (`Gate W0`)

**Repositório:** `https://github.com/Mubv/EuVersoInstitucional.git` (independente do repositório `Mubv/EuVerso` e isolado da branch S7)  
**Branch de refatoração:** `feat/site-storytelling-refactor-2026-11`  
**Branch `main` congelada (intacta):** `dc89271` (`feat: add Entrar CTA in header and footer linking to https://app.euverso.com`)  
**Domínio canônico:** `https://euverso.com`  
**Serviço Cloud Run:** `euverso-landing` (`southamerica-east1`, projeto GCP `euverso`, revisão ativa `euverso-landing-00003-l2c`)  
**Pipeline oficial de CI/CD:** `.github/workflows/deploy-cloudrun.yml` (GitHub Actions + Workload Identity Federation `euverso-build-sa@euverso.iam.gserviceaccount.com`, disparado apenas em `push` para `main` ou `workflow_dispatch`)  
**Framework & Stack:** `Next.js 15.5.29` (App Router, SSG/SSR standalone), `React 19.1.0`, `TypeScript 5.8.3`, `Tailwind CSS v4.1.14`, `lucide-react`, `@fontsource/bricolage-grotesque`, `@fontsource/ibm-plex-sans`, `@fontsource/ibm-plex-mono`  
**Data do inventário:** `2026-11-25`  
**Observação sobre referência externa (`EuVerso_Pitch_Socios_Original.pptx.pdf`):** O arquivo PDF original não está montado no workspace local; conforme Seção 1 do Prompt Master, utilizou-se o brief integral consolidado (páginas 1–15) + Adendo Definitivo de `25/11/2026`.

---

## 1. Inventário Real de Rotas, SEO, Analytics e Conversão

- **Rotas pré-renderizadas (SSG — `13/13` retornando HTTP `200` em Playwright local):**
  - `/` (Home institucional)
  - `/funcionalidades`, `/pulse`, `/workspaces`, `/agentes-de-ia`, `/automacoes-com-ia`, `/workflow-studio`
  - `/ia-para-produtividade`, `/ia-para-empresas`, `/planos`, `/contato`
  - `/sitemap.xml`, `/robots.txt`, `/icon.png`, `/apple-icon.png`, `/_not-found`
- **Header (`SiteHeader.tsx`):** Logo horizontal Light cutout WebP/PNG + 6 links (`Funcionalidades`, `Pulse`, `Workspaces`, `Automações`, `Planos`, `Contato`) + CTA secundário `Entrar` (`https://app.euverso.com`) + CTA escuro `Conhecer pelo WhatsApp` + drawer mobile acessível.
- **Footer (`SiteFooter.tsx`):** Logo Dark cutout WebP/PNG + tagline + nota de transparência comercial + grupos `Produto & Funcionalidades` (6 links) e `Soluções & Comercial` (4 links + `app.euverso.com`).
- **Fluxo real de conversão (`WhatsAppProvider.tsx`, `WhatsAppButton.tsx`, `ConversionShell.tsx`):**
  - Quando `NEXT_PUBLIC_WHATSAPP_NUMBER` está configurado (≥ 10 dígitos), abre `https://wa.me/{numero}?text=...` com mensagem contextual por `origin`.
  - Sem número configurado (ex.: build local), abre modal de prévia com mensagem copiável e acesso à página `/contato`.
  - Consentimento LGPD opt-in (`euverso_site_consent_v1`) antes de enviar eventos (`hero_cta_click`, `hero_demo_interaction`, `feature_click`, `plan_click`, `whatsapp_click`, `scroll_depth`) para `window.dataLayer`.
- **SEO & Dados Estruturados (`src/lib/seo.ts`):** `Organization` JSON-LD, `SoftwareApplication` JSON-LD, `FAQPage` JSON-LD na home, `canonical`, `OpenGraph`, `Twitter Card`, `robots: index, follow`, `sitemap.xml`.

---

## 2. Ativos Visuais e Componentes Preservados (Reutilização Máxima)

| Tipo | Caminho / Componente | Status no Refactor |
|---|---|---|
| Logo Light/Dark & Ícone | `public/brand/euverso-logo-horizontal-*-cutout.{webp,png}`, `src/app/icon.png`, `src/app/apple-icon.png` | **MANTER INTEGRALMENTE** |
| Ilustração 01 — Mundos Conectados | `public/illustrations/01-hero-mundos-conectados.{webp,png}` (`ResponsiveIllustration variant="hero"`) | **MANTER na Dobra 01 (Hero)** |
| Ilustração 02 — Pulse Orbital | `public/illustrations/02-pulse-orbital.{webp,png}` (`ResponsiveIllustration variant="pulse"`) | **MANTER na Dobra 05 (Pulse)** |
| Ilustração 03 — Automações & Conexões | `public/illustrations/03-automacoes-conexoes.{webp,png}` (`ResponsiveIllustration variant="automacoes"`) | **REAPROVEITAR na camada expansível / Dobra 05 ou Dobra 09** |
| Design Tokens & Classes Comic Tech | `src/app/globals.css` (`#FDC616`, `#080808`, `#FFF9EC`, `#7654E8`, `#5BD8B6`, `#FF8169`, `.comic-panel*`, `.comic-btn*`, `.comic-highlight`, halftones, `prefers-reduced-motion`) | **MANTER INTEGRALMENTE** *(corrigir bug de contraste na barra inferior do card da Hero)* |
| Demo Interativa Tabulada | `src/components/home/HeroInteractiveDemo.tsx` | **MOVER para Dobra 04 & ADAPTAR** (cenários Financeiro, E-mail, Agenda + Projetos/Automações com `Demonstração ilustrativa` e teclado/ARIA) |
| Seção Pulse Interativa | `src/components/home/PulseDemoSection.tsx` | **MOVER para Dobra 05 & ADAPTAR** (recebe PUV reposicionada + `Conhece → Entende → Aciona → Acompanha` + detalhes técnicos expansíveis) |
| Mission Control Interativo | `src/components/home/MissionControlShowcase.tsx` | **MANTER na Dobra 09 & REESCREVER COPY** (título `"Delegar não é perder o controle."`, status honesto S6) |
| Workflow Studio Interativo | `src/components/home/WorkflowStudioShowcase.tsx` | **PRESERVAR na página `/workflow-studio` e referenciar via link/camada expansível** (evita excesso de 15 dobras na home) |
| Planos & FAQ | `src/components/shared/PlansGrid.tsx`, `src/components/shared/FaqAccordion.tsx` | **MANTER** (`PlansGrid` preservado na rota `/planos` e resumo/link contextual; `FaqAccordion` na Dobra 11 com as 6 perguntas obrigatórias) |

---

## 3. Matriz Forense: 15 Dobras Atuais (`BEFORE`) → 11 Dobras Aprovadas (`AFTER`)

Medição real no baseline (`before-audit.json`):
- **Desktop `1440×900`:** `15` seções, altura `15.622px`, `overflowX: false`, `h1Count: 1`, `consoleErrors: 0`, `pageErrors: 0`.
- **Mobile `390×844`:** `15` seções, altura `30.400px`, `overflowX: false`, `h1Count: 1`, `consoleErrors: 0`, `pageErrors: 0`.

| # Atual | Seção / ID Atual | Mensagem Atual | Asset / Componente | Função Comercial | Decisão | Destino nas 11 Dobras |
|---|---|---|---|---|---|---|
| 01 | Hero (`section-1`) | *"Sua vida. Seu trabalho. Seus projetos. Tudo em um só universo inteligente."* + `HeroInteractiveDemo` embutida | `01-hero-mundos-conectados` + `HeroInteractiveDemo` | Posicionamento inicial + prova | **REESCREVER HERO + SEPARAR DEMO** | **Dobra 01 (Hero Adendo)** + **Dobra 04 (Demo)** |
| 02 | Problema (`#problema`) | *"Sua rotina está em mil lugares. Sua inteligência não precisa estar."* | 4 cards (`PROBLEM_FRAGMENTS`) | Identificação da dor | **REESCREVER** (3 pilares claros + ritmo limpo) | **Dobra 02 — A Dor / Fragmentação** |
| 03 | Como Funciona (`#como-funciona`) | *"Organize → Converse → Delegue → Acompanhe."* | 4 cards (`HOW_IT_WORKS_STEPS`) | Fluxo conceitual | **TRANSFORMAR / FUNDIR** | **Dobra 03 — A Virada (Hoje × Com o EuVerso)** + fluxo migrado para **Dobra 05** |
| 04 | Pulse (`#pulse`) | *"Uma IA que trabalha com o seu contexto."* | `PulseDemoSection` + `02-pulse-orbital` | Explicar o assistente central | **MOVER + REESCREVER** (recebe PUV reposicionada + camada técnica expansível) | **Dobra 05 — Pulse / Como Funciona Sem Jargão** |
| 05 | Workspaces (`#workspaces`) | *"Você tem vários mundos. O EuVerso entende isso."* | 3 cards (`WORKSPACES_WORLDS`) | Isolamento de contextos | **MOVER + EXPANDIR PARA 4 CONTEXTOS** (Pessoal, Trabalho, Projetos, Clientes) | **Dobra 07 — Workspaces / Seus Contextos** |
| 06 | Agentes (`#agentes`) | *"Não faça tudo sozinho. Trabalhe com agentes."* | 5 cards (`AGENTS_SHOWCASE`) | Especialistas supervisionados | **REESCREVER + HONESTIDADE S7** (ativos em prod + catálogo-alvo S7 marcado honestamente) | **Dobra 06 — Catálogo / Agentes Pragmáticos** |
| 07 | Automações (`#automacoes`) | *"Da conversa à execução."* | `03-automacoes-conexoes` + lista 5 passos | Pipeline de automação | **FUNDIR** na camada expansível da Dobra 05 + ponte para `/automacoes-com-ia` | **Integrado na Dobra 05 (segundo nível) & Dobra 09** |
| 08 | Workflow Studio (`#workflow-studio`) | *"Crie automações visualmente..."* | `WorkflowStudioShowcase` | Demo do editor visual | **REMOVER DA HOME / PRESERVAR EM `/workflow-studio`** (reduz ruído técnico na home e mantém rota SEO intacta) | **Link direto em Dobra 05 e Dobra 09 → `/workflow-studio`** |
| 09 | Mission Control (`#mission-control`) | *"Veja o trabalho acontecendo — sem perder o comando."* | `MissionControlShowcase` | Controle e aprovações | **MANTER + REESCREVER COPY** | **Dobra 09 — Mission Control / Governança** |
| 10 | Ecossistema (`#funcionalidades-adicionais`) | *"Tudo conectado no mesmo lugar..."* | 6 cards ícones | Visão ampla de módulos | **FUNDIR** em Dobra 06, Dobra 08 (Meu Dia) e Dobra 10 (IA Flexível) | **Distribuído com precisão (sem repetição)** |
| 11 | Para Quem É (`#para-quem-e`) | *"Comece no seu ritmo..."* | 3 cards personas (`AUDIENCES`) | Segmentação de público | **FUNDIR** em Dobra 07 (Workspaces) e Dobra 11 (Conversão) | **Elimina redundância com Workspaces/Planos** |
| 12 | Segurança (`#seguranca`) | *"Inteligente para executar. Seguro para você decidir."* | 6 cards (`SECURITY_PILLARS`) | Confiança & BYOK | **MOVER + REESCREVER** (IA Flexível + BYOK + disclosure de custos/busca web) | **Dobra 10 — IA Flexível / Integrações / Segurança** |
| 13 | Planos (`#planos`) | *"Quatro formatos pensados..."* | `PlansGrid` completo | Oferta comercial | **CONSOLIDAR NA ROTA `/planos` + CTA na Dobra 11** (evita tabela longa + `R$ XXX` competir com fechamento narrativo, mantendo rota `/planos` 100% íntegra) | **Link e chamada contextual na Dobra 11 → `/planos`** |
| 14 | FAQ (`#faq`) | *"Respostas diretas, sem letra miúda."* | `FaqAccordion` (8 itens) | Quebra de objeções | **FUNDIR COM CTA FINAL + REESCREVER 6 PERGUNTAS OBRIGATÓRIAS** | **Dobra 11 — Conversão / CTA / FAQ** |
| 15 | CTA Final (`section-15`) | *"Chega de só organizar..."* | Painel amarelo halftone | Conversão final | **FUNDIR + REESCREVER** (`"Menos tempo organizando tudo. Mais tempo fazendo o que importa."`) | **Dobra 11 — Conversão / CTA / FAQ** |
| *(Novo)* | **Dobra 08 — Meu Dia** | *(Não existia dedicada na home)* | Novo painel declarativo em estilo Comic Tech (`MeuDiaPreviewSection`) | Clareza diária personalizada | **CRIAR NO DESIGN SYSTEM EXISTENTE** (rotulado honestamente como `Em desenvolvimento / Prévia S7`, sem inventar dados de saúde sensíveis) | **Dobra 08 — Meu Dia / Dashboard Pessoal** |

---

## 4. Riscos Identificados no Baseline

1. **Bug visual real detectado na captura `BEFORE` (`before-desktop-1440-01-hero-above-fold.png`):**
   - A classe `.comic-panel-lg` em `src/app/globals.css` define `background-color: #FFFFFF` fora de `@layer`, sobrescrevendo `bg-[#080808]` no card da ilustração da Hero. Resultado: o rodapé do card fica branco com texto amarelo (`#FDC616`) e cinza claro (`#E4E4E7`), violando contraste WCAG AA. **Correção planejada no Gate W1.**
2. **Sobrecarga de altura e repetição na Home atual:**
   - `15` seções (`15.622px` desktop / `30.400px` mobile) repetem a mesma proposta em Hero, Como Funciona, Pulse, Workspaces, Para Quem É e Ecossistema, além de despejar termos técnicos (`BYOK`, `RBAC`, `MCP`, `Workflow Studio`) antes de o visitante entender o benefício humano.
3. **Alinhamento factual de disponibilidade (S6 × S7):**
   - O site atual ainda marca S6 (`Workflow Studio` / `Mission Control`) como `"Em validação"` pré-certificação, enquanto a S6 já foi certificada em piloto controlado (`15/15` E2E no Temporal) e a S7 (`10` agentes pragmáticos, `60` skills, `Meu Dia` declarativo, busca web governada) está **em desenvolvimento** fora da `main`. O refatoramento atualizará rigorosamente cada rótulo conforme `EUVERSO_SITE_CLAIMS_REGISTER.md`.
4. **Preservação de rotas SEO e conversão:**
   - Nenhuma das 11 rotas internas (`/funcionalidades`, `/pulse`, `/workspaces`, `/agentes-de-ia`, `/automacoes-com-ia`, `/workflow-studio`, `/ia-para-produtividade`, `/ia-para-empresas`, `/planos`, `/contato`) será removida ou quebrada.

---

## 5. Evidências `BEFORE` Capturadas (`Gate W0`)

- Diretório: `docs/marketing/evidence/site-storytelling-2026-11/before/`
- Arquivos: `34` capturas PNG (`before-desktop-1440-*` e `before-mobile-390-*`, cobrindo acima da dobra, página completa e todas as 15 dobras individuais) + manifesto auditado `before-audit.json` com SHA-256 de cada arquivo.

---

## 6. Plano de Execução por Gates (`W0` → `W5`)

| Gate | Escopo | Peso | Acumulado |
|---|---|---:|---:|
| **W0** | Inventário forense, capturas `BEFORE`, baseline e registro de claims | 15% | 15% |
| **W1** | Dobras 01 (Hero Adendo + fix contraste), 02 (Dor) e 03 (Virada) | 25% | 40% |
| **W2** | Dobras 04 (Demonstração tabulada acessível) e 05 (Pulse + PUV reposicionada + camada técnica expansível) | 20% | 60% |
| **W3** | Dobras 06 (Catálogo Agentes com honestidade S7), 07 (Workspaces 4 contextos) e 08 (Meu Dia — prévia S7) | 15% | 75% |
| **W4** | Dobras 09 (Mission Control), 10 (IA Flexível / BYOK / Segurança) e 11 (Conversão / CTA / FAQ + SEO) | 10% | 85% |
| **W5** | Build, typecheck, Playwright `AFTER` desktop+mobile + vídeos `.webm`, links, a11y, manifesto SHA-256 e `EUVERSO_SITE_REFACTOR_REPORT.md` | 15% | 100% |
