# 🍽️ Brasilo Restaurante — Bio Links

> Página de bio links (estilo Linktree) para o **Brasilo Restaurante**, construída com Next.js 16, Tailwind CSS v4 e hospedada na Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pedrofalconi-ux/brasilio-redirecionador)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)

---

## 📋 Sobre o projeto

Página única mobile-first que centraliza os principais pontos de contato do restaurante:

| Link | Destino |
|------|---------|
| 💬 Comunidade WhatsApp | Grupo de clientes no WhatsApp |
| ⭐ Avalie no Google | Página de avaliações no Google |
| 📷 Siga no Instagram | [@brasiliorestaurante](https://www.instagram.com/brasiliorestaurante) |
| 🍽️ Nosso Cardápio | PDF do cardápio (abre em nova aba) |

---

## 🛠️ Stack

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| [Next.js](https://nextjs.org) | 16 | Framework React com App Router |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Estilização utilitária |
| [TypeScript](https://www.typescriptlang.org) | 5 | Tipagem estática |
| [next/font](https://nextjs.org/docs/app/api-reference/components/font) | — | Otimização de fontes Google |
| [next/image](https://nextjs.org/docs/app/api-reference/components/image) | — | Otimização de imagens |
| [Material Symbols](https://fonts.google.com/icons) | — | Ícones |
| [Vercel](https://vercel.com) | — | Hospedagem e deploy |

---

## 🚀 Como rodar localmente

### Pré-requisitos

- Node.js ≥ 18
- npm ≥ 9

### Instalação

```bash
# Clone o repositório
git clone https://github.com/pedrofalconi-ux/brasilio-redirecionador.git
cd brasilio-redirecionador

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Outros comandos

```bash
# Build de produção
npm run build

# Iniciar servidor de produção (após build)
npm start

# Verificar tipos TypeScript
npx tsc --noEmit

# Lint
npm run lint
```

---

## 📁 Estrutura do projeto

```
brasilio-redirecionador/
├── public/
│   ├── logo.jpg                      # Logo do restaurante
│   ├── chef-special.jpg              # Foto da sugestão do chef
│   └── cardapio_gráfica_cropped.pdf  # Cardápio em PDF
├── src/
│   └── app/
│       ├── globals.css               # Tokens de design (Tailwind @theme)
│       ├── layout.tsx                # Layout raiz com fontes e metadados
│       └── page.tsx                  # Página principal (linktree)
├── postcss.config.mjs                # Config do Tailwind v4
├── next.config.ts                    # Config do Next.js
├── tsconfig.json                     # Config do TypeScript
└── package.json
```

---

## 🎨 Design

O design foi gerado via **Google Stitch** e convertido para componentes React. Utiliza o sistema de cores do Material Design 3 com a identidade visual do Brasilo Restaurante.

### Paleta de cores

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-primary` | `#ff3b30` | Cor principal (vermelho) |
| `--color-on-primary` | `#ffffff` | Texto sobre primário |
| `--color-secondary` | `#5f5e5e` | Texto secundário |
| `--color-surface` | `#fbf9f8` | Fundo das superfícies |
| `--color-on-surface` | `#1b1c1c` | Texto principal |

### Tipografia

- **Headings:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (400–700)
- **Body:** [Work Sans](https://fonts.google.com/specimen/Work+Sans) (400–600)

---

## ☁️ Deploy na Vercel

```bash
# Instalar Vercel CLI (caso não tenha)
npm i -g vercel

# Deploy
vercel

# Deploy em produção
vercel --prod
```

Ou conecte o repositório diretamente no [dashboard da Vercel](https://vercel.com/dashboard) para CI/CD automático a cada push na branch `main`.

---

## 📄 Licença

Projeto privado — Brasilo Restaurante © 2025. Todos os direitos reservados.
