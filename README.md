# EuVerso — Website Institucional, Comercial e de Conversão (Comic Tech)

Website oficial do **EuVerso** construído em **Next.js (App Router · SSG/SSR)**, **React 19**, **TypeScript** e **Tailwind CSS v4**, completamente isolado da aplicação SaaS interna (`frontend/euverso-web`).

---

## Como Executar Localmente

```powershell
# 1. Instalar dependências (caso ainda não instaladas)
npm --prefix frontend/euverso-site install

# 2. Copiar variáveis de ambiente e preencher NEXT_PUBLIC_WHATSAPP_NUMBER quando aprovado
Copy-Item frontend/euverso-site/.env.example frontend/euverso-site/.env.local

# 3. Rodar em desenvolvimento (http://localhost:3005)
npm --prefix frontend/euverso-site run dev

# 4. Validar TypeScript + Build de produção SSG/SSR
npm --prefix frontend/euverso-site run typecheck
npm --prefix frontend/euverso-site run build

# 5. Subir servidor de produção local (http://localhost:3005)
npm --prefix frontend/euverso-site run start
```

Para gerar exportação 100% estática (`out/`):

```powershell
$env:NEXT_STATIC_EXPORT="true"
npm --prefix frontend/euverso-site run build
```

---

## Onde Editar Configurações Comerciais e de Produto

- **WhatsApp e mensagens por origem**: [`src/config/site.ts`](src/config/site.ts) + `.env.local` (`NEXT_PUBLIC_WHATSAPP_NUMBER`)
- **Quatro planos editáveis (`Essencial`, `Pro`, `Business`, `Enterprise`)**: [`src/config/plans.ts`](src/config/plans.ts)
- **Controle de disponibilidade e Matriz `P1/P2/P3`**: [`src/config/availability.ts`](src/config/availability.ts)
- **Rastreamento de conversão LGPD**: [`src/config/analytics.ts`](src/config/analytics.ts)
- **Assets oficiais preservados**:
  - `public/brand/` — 8 logos masters PNG + cutouts otimizados WebP
  - `public/illustrations/` — 3 ilustrações oficiais (`01-hero-mundos-conectados`, `02-pulse-orbital`, `03-automacoes-conexoes`) em PNG master + WebP responsivo (`640w` e `1024w`) + originais em `masters/`

---

## Rotas SEO Pré-Renderizadas (SSG)

- `/` — Home completa (11 dobras narrativas: Hero, Dor, Virada, Demonstração, Pulse, Especialistas, Workspaces, Meu Dia S7, Mission Control, IA Flexível & Segurança, Conversão/FAQ)
- `/funcionalidades` — Matriz completa `P1/P2/P3` com filtro de disponibilidade
- `/pulse` — IA contextual e presença orbital
- `/workspaces` — Isolamento multi-workspace e RBAC
- `/agentes-de-ia` — Agentes supervisionados, permissões e transparência S7
- `/automacoes-com-ia` — Da conversa à execução e Mission Control
- `/workflow-studio` — Editor visual de workflows, validação e Dry-Run
- `/ia-para-produtividade` — Solução para rotina pessoal e empreendedores
- `/ia-para-empresas` — Solução para pequenas empresas, equipes e governança BYOK
- `/planos` — Quatro planos editáveis + tabela comparativa + FAQ
- `/contato` — Compositor de conversa comercial para WhatsApp
- `/sitemap.xml`, `/robots.txt` e página `404` personalizada

---

## Checklist Pré-Publicação

1. **Definir número oficial do WhatsApp**: configurar `NEXT_PUBLIC_WHATSAPP_NUMBER` (formato `55DDDNUMERO`) em produção.
2. **Aprovar proposta comercial dos 4 planos**: substituir `R$ XXX` e ajustar benefícios/limites aprovados em `src/config/plans.ts` antes de publicar como oferta final.
3. **Atualizar status da S6**: quando `Workflow Studio` e `Mission Control` concluírem o rollout produtivo, alterar o status de `em_validacao` para `disponivel` em `src/config/availability.ts` e `src/data/seo-pages.ts`.
4. **Confirmar domínio canônico**: definir `NEXT_PUBLIC_SITE_URL=https://euverso.com` (ou domínio final) para `canonical`, `sitemap.xml`, `robots.txt` e Open Graph.
5. **Validar Core Web Vitals em produção**: medir `LCP <= 2,5s`, `INP <= 200ms` e `CLS <= 0,1` no PageSpeed Insights / Lighthouse após o deploy no domínio real.
6. **Validar palavras-chave SEO com Search Console**: monitorar impressões e cliques das hipóteses de palavras-chave após indexação no Google Search Console.
7. **Revisar política de privacidade / termos**: vincular páginas jurídicas oficiais (Termos de Uso e Política de Privacidade LGPD) quando redigidas.
