# AgentArena

**AI Agent Evaluation Benchmarks for UI Grounding, Web Navigation, and Task Automation**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![Static Export](https://img.shields.io/badge/Deploy-Static-green)](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

AgentArena is a collection of reproducible benchmarks designed for evaluating AI agents on real-world UI tasks. Each benchmark provides static, deterministic environments that enable consistent evaluation across different models and approaches.

---

## UIArena v1 — Static UI Grounding Benchmark

The first benchmark in AgentArena focuses on **UI element grounding**: the ability of an AI agent to locate and identify interactive elements in web interfaces.

### Design Philosophy

UIArena v1 uses an **orthogonal design** across three dimensions to enable precise diagnosis of agent capabilities:

| Dimension | Values | Purpose |
|-----------|--------|---------|
| **Visual** | `styled` / `mincss` | Tests reliance on CSS styling |
| **DOM** | `clean` / `noisy` | Tests robustness to DOM complexity |
| **Accessibility** | `full` / `none` | Tests reliance on ARIA attributes |

### Variant Codes

| Code | Name | Visual | DOM | A11y | Difficulty |
|------|------|--------|-----|------|------------|
| `c0` | Baseline | styled | clean | full | Easy |
| `c1` | No-Visual | mincss | clean | full | Medium |
| `c2` | No-A11y | styled | clean | none | Medium |
| `c3` | Noisy-DOM | styled | noisy | full | Medium |
| `c4` | Hard | mincss | noisy | none | Hard |

### Environments (15 total)

UIArena v1 includes **15 environments** across 3 page types × 5 variants:

| Page | Variants | Description |
|------|----------|-------------|
| **Search** | c0, c1, c2, c3, c4 | Search engine interface (Google-like) |
| **E-commerce** | c0, c1, c2, c3, c4 | Product listing with filters and cart |
| **Dashboard** | c0, c1, c2, c3, c4 | Email inbox with sidebar navigation |

### URL Structure

```
/v1/arena/{page}/{variant}

Examples:
/v1/arena/search/c0      # Search page, baseline variant
/v1/arena/ecommerce/c1   # E-commerce, no-visual variant
/v1/arena/dashboard/c4   # Dashboard, hard variant
```

---

## Use Cases

- **Vision-Language Model Evaluation**: Test VLMs on UI element detection and localization
- **Web Agent Benchmarking**: Evaluate agents that navigate and interact with web pages
- **Grounding Research**: Study how models ground natural language to UI elements
- **Reproducible Comparisons**: Static snapshots ensure consistent evaluation across runs
- **Agent Development**: Iterate on agent capabilities using orthogonal test dimensions

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/your-org/AgentArena.git
cd AgentArena
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000/v1](http://localhost:3000/v1) to explore the benchmark.

### Build for Production

```bash
npm run build
```

The static site will be exported to the `/out` directory, ready for deployment on any static hosting service.

---

## Project Structure

```
AgentArena/
├── public/v1/arena/          # Static HTML environments
│   ├── search/
│   │   ├── c0/               # index.html, style.css, metadata.json
│   │   ├── c1/
│   │   ├── c2/
│   │   ├── c3/
│   │   └── c4/
│   ├── ecommerce/
│   │   └── c0..c4/
│   └── dashboard/
│       └── c0..c4/
├── src/app/
│   ├── v1/                   # Next.js wrapper pages
│   │   ├── page.tsx          # Benchmark homepage
│   │   └── arena/            # Environment wrapper pages
│   └── layout.tsx            # Root layout with metadata
└── next.config.ts            # Static export configuration
```

### Metadata Schema

Each environment includes a `metadata.json` file:

```json
{
  "name": "Search Page",
  "variant": "c0",
  "variantName": "baseline",
  "difficulty": "easy",
  "dimensions": {
    "visual": "styled",
    "dom": "clean",
    "accessibility": "full"
  },
  "description": "Baseline search interface with full styling, clean semantic HTML, and complete ARIA accessibility.",
  "tasks": [
    "Locate the main search input field",
    "Locate the primary search button",
    "Locate the settings icon button"
  ]
}
```

---

## Contributing

Contributions are welcome! Whether you want to:

- Add new environments or page types
- Improve existing variants
- Add evaluation scripts or metrics
- Report issues or suggest enhancements

Please open an issue or submit a pull request.

---

## Keywords

`ai-agents` · `benchmark` · `ui-grounding` · `web-automation` · `llm-evaluation` · `computer-use` · `vision-language-models` · `web-agents` · `accessibility-testing` · `multimodal-ai`
