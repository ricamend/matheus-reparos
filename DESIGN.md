# Design System: Matheus Reparos Website
> **Origem:** Stitch Project `projects/16876539907734816657`  
> **Nome do Design:** Precision Tech & Care  
> **Estilo:** Modern Precision Engineering with Human Warmth

---

## 1. Paleta de Cores (Color Palette)

### Cores Principais da Marca & Aplicação

| Papel | Nome da Cor | Hex | Uso / Aplicação |
| :--- | :--- | :--- | :--- |
| **Primary** | Slate Obsidian | `#0F172A` | Títulos principais, barras de navegação, badges de autoridade e blocos estruturais. |
| **Secondary** | Precision Electric Blue | `#2563EB` | Links interativos, indicadores de status ativo, anéis de foco, barras de progresso. |
| **Accent** | Cyan Diagnostic | `#06B6D4` | Indicadores de microchips, tags de diagnóstico e pips técnicos de destaque. |
| **Tertiary** | WhatsApp Green | `#16A34A` | Ações de conversão imediata, botão de WhatsApp, status online (Hover: `#22C55E`). |
| **Surface Base** | Pure White | `#FFFFFF` | Cartões, gavetas e fundos de componentes elevados. |
| **Surface Canvas** | Subdued Canvas | `#F8FAFC` | Fundo geral da página (Level 0). |
| **Surface Subtle** | Slate Light | `#F1F5F9` | Fundo de hover, áreas de entrada sutis. |
| **Border Subtle** | Border Gray | `#E2E8F0` | Linhas delimitadoras sutis e microbordas estruturais. |
| **Text Main** | Deep Charcoal | `#0F172A` | Texto primário, títulos e corpo em alto contraste. |
| **Text Subdued** | Slate Muted | `#64748B` | Subtítulos, legendas e textos auxiliares. |

### Tokens do Sistema (Design Tokens)

```yaml
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002109'
  on-tertiary-container: '#009842'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#7ffc97'
  tertiary-fixed-dim: '#62df7d'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005320'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
```

---

## 2. Tipografia (Typography)

### Famílias Tipográficas

- **Títulos & Headlines:** `Plus Jakarta Sans` — Geometria moderna, presença executiva e clareza visual.
- **Corpo de Texto & UI:** `Inter` — Legibilidade superior em dados densos, formulários e textos descritivos.
- **Especificações Técnicas / Seriais:** `JetBrains Mono` — Números de série, modelos de aparelhos e diagnósticos técnicos.

### Escala Tipográfica

| Token | Família | Tamanho | Peso (Weight) | Altura de Linha (Line-Height) | Uso Recomendado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-hero` | Plus Jakarta Sans | 48px | 800 (Extra Bold) | 56px | Títulos de impacto no Hero (Desktop) |
| `display-hero-mobile` | Plus Jakarta Sans | 34px | 800 (Extra Bold) | 40px | Títulos do Hero (Mobile) |
| `headline-xl` | Plus Jakarta Sans | 36px | 700 (Bold) | 44px | Títulos de seções primárias (Desktop) |
| `headline-xl-mobile` | Plus Jakarta Sans | 28px | 700 (Bold) | 34px | Títulos de seções (Mobile) |
| `headline-lg` | Plus Jakarta Sans | 24px | 700 (Bold) | 32px | Subseções e cabeçalhos de cards grandes |
| `headline-md` | Plus Jakarta Sans | 20px | 600 (Semi Bold) | 28px | Títulos de serviços e cards |
| `title-sm` | Plus Jakarta Sans | 16px | 600 (Semi Bold) | 24px | Rótulos destacados e subtítulos de cards |
| `body-lg` | Inter | 18px | 400 (Regular) | 28px | Parágrafos de destaque / intro |
| `body-md` | Inter | 15px | 400 (Regular) | 24px | Texto padrão de leitura |
| `body-sm` | Inter | 13px | 400 (Regular) | 20px | Descrições secundárias e notas de rodapé |
| `label-md` | Inter | 13px | 600 (Semi Bold) | 16px | Botões, badges, chips e tabs |
| `label-sm` | Inter | 11px | 600 (Semi Bold) | 14px | Microlegendas e timestamps |
| `code-spec` | JetBrains Mono | 12px | 500 (Medium) | 16px | Modelos de hardware, serial IDs e códigos |

---

## 3. Espaçamento e Bordas (Spacing & Shapes)

### Border Radius
- **`rounded-sm`**: `0.25rem` (4px)
- **`rounded-DEFAULT` / `rounded-md`**: `0.5rem` (8px) — Inputs, chips, botões secundários
- **`rounded-lg`**: `1rem` (16px) — Cards de serviço, tabelas
- **`rounded-xl`**: `1.5rem` (24px) — Seções em destaque, hero containers
- **`rounded-full`**: `9999px` — Badges de status, avatares, CTAs principais

### Escala de Espaçamento
- `space-xxs`: `0.25rem` (4px)
- `space-xs`: `0.5rem` (8px)
- `space-sm`: `0.75rem` (12px)
- `space-md`: `1rem` (16px)
- `space-lg`: `1.5rem` (24px)
- `space-xl`: `2rem` (32px)
- `space-2xl`: `3rem` (48px)
- `space-3xl`: `4rem` (64px)
- `space-4xl`: `6rem` (96px)
- `container-max`: `1240px`
- `gutter-mobile`: `1rem` (16px)
- `gutter-desktop`: `2rem` (32px)

---

## 4. Elevação & Sombras (Elevation)

- **Level 0 (Base Canvas):** Background `#F8FAFC`. Zero elevação.
- **Level 1 (Cards & Módulos):** Background `#FFFFFF`. Border: `1px solid #E2E8F0`. Shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`.
- **Level 2 (Hover Interativo):** Background `#FFFFFF`. Border: `1px solid #CBD5E1`. Shadow: `0 10px 25px -5px rgba(15, 23, 42, 0.06), 0 8px 10px -6px rgba(15, 23, 42, 0.03)`.
- **Level 3 (Gavetas & Modais):** Background `#FFFFFF`. Border: `1px solid rgba(226, 232, 240, 0.8)`. Shadow: `0 20px 35px -10px rgba(15, 23, 42, 0.12), 0 1px 3px 0 rgba(15, 23, 42, 0.04)`.
- **Level 4 (Sticky WhatsApp CTA):** Glow dinâmico: `box-shadow: 0 4px 14px 0 rgba(22, 163, 74, 0.35)`.
