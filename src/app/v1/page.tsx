import Link from "next/link";

const allEnvironments = [
  { page: "search", variant: "c0", name: "Search", difficulty: "easy", visual: "styled", dom: "clean", a11y: "full", description: "Baseline" },
  { page: "search", variant: "c1", name: "Search", difficulty: "medium", visual: "mincss", dom: "clean", a11y: "full", description: "No Visual" },
  { page: "search", variant: "c2", name: "Search", difficulty: "medium", visual: "styled", dom: "clean", a11y: "none", description: "No A11y" },
  { page: "search", variant: "c3", name: "Search", difficulty: "medium", visual: "styled", dom: "noisy", a11y: "full", description: "Noisy DOM" },
  { page: "search", variant: "c4", name: "Search", difficulty: "hard", visual: "mincss", dom: "noisy", a11y: "none", description: "Hard" },

  { page: "ecommerce", variant: "c0", name: "E-commerce", difficulty: "easy", visual: "styled", dom: "clean", a11y: "full", description: "Baseline" },
  { page: "ecommerce", variant: "c1", name: "E-commerce", difficulty: "medium", visual: "mincss", dom: "clean", a11y: "full", description: "No Visual" },
  { page: "ecommerce", variant: "c2", name: "E-commerce", difficulty: "medium", visual: "styled", dom: "clean", a11y: "none", description: "No A11y" },
  { page: "ecommerce", variant: "c3", name: "E-commerce", difficulty: "medium", visual: "styled", dom: "noisy", a11y: "full", description: "Noisy DOM" },
  { page: "ecommerce", variant: "c4", name: "E-commerce", difficulty: "hard", visual: "mincss", dom: "noisy", a11y: "none", description: "Hard" },

  { page: "dashboard", variant: "c0", name: "Dashboard", difficulty: "easy", visual: "styled", dom: "clean", a11y: "full", description: "Baseline" },
  { page: "dashboard", variant: "c1", name: "Dashboard", difficulty: "medium", visual: "mincss", dom: "clean", a11y: "full", description: "No Visual" },
  { page: "dashboard", variant: "c2", name: "Dashboard", difficulty: "medium", visual: "styled", dom: "clean", a11y: "none", description: "No A11y" },
  { page: "dashboard", variant: "c3", name: "Dashboard", difficulty: "medium", visual: "styled", dom: "noisy", a11y: "full", description: "Noisy DOM" },
  { page: "dashboard", variant: "c4", name: "Dashboard", difficulty: "hard", visual: "mincss", dom: "noisy", a11y: "none", description: "Hard" },
];

const variantStyles: Record<string, string> = {
  c0: "bg-green/15 text-green border-green/30",
  c1: "bg-yellow/15 text-yellow border-yellow/30",
  c2: "bg-orange/15 text-orange border-orange/30",
  c3: "bg-accent/15 text-accent border-accent/30",
  c4: "bg-red/15 text-red border-red/30",
};

const difficultyStyles: Record<string, string> = {
  easy: "text-green",
  medium: "text-yellow",
  hard: "text-red",
};

const dimensionStyles = {
  styled: "text-green",
  mincss: "text-yellow",
  clean: "text-green",
  noisy: "text-red",
  full: "text-green",
  none: "text-red",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Card */}
      <div className="border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-6">
          {/* Title Row */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-semibold text-foreground">UIArena</h1>
              <span className="px-2 py-0.5 text-xs font-medium bg-accent/15 text-accent border border-accent/30 rounded">
                v1
              </span>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted mb-4">
            Static UI Grounding Benchmark for AI Agents — Orthogonal testing across Visual, DOM, and Accessibility dimensions
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
              <span><strong className="text-foreground">15</strong> environments</span>
            </span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span><strong className="text-foreground">5</strong> variants per page</span>
            </span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20V10" />
                <path d="M18 20V4" />
                <path d="M6 20v-4" />
              </svg>
              <span><strong className="text-foreground">3</strong> dimensions (Visual, DOM, A11y)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Variant Legend */}
      <div className="max-w-5xl mx-auto px-4 py-4 border-b border-border">
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 font-medium border rounded ${variantStyles.c0}`}>c0</span>
            <span className="text-muted">Baseline (all optimal)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 font-medium border rounded ${variantStyles.c1}`}>c1</span>
            <span className="text-muted">No Visual (mincss)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 font-medium border rounded ${variantStyles.c2}`}>c2</span>
            <span className="text-muted">No A11y</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 font-medium border rounded ${variantStyles.c3}`}>c3</span>
            <span className="text-muted">Noisy DOM</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 font-medium border rounded ${variantStyles.c4}`}>c4</span>
            <span className="text-muted">Hard (all degraded)</span>
          </div>
        </div>
      </div>

      {/* Environments Table */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="bg-surface border border-border rounded-md overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-border text-xs font-medium text-muted uppercase tracking-wide">
            <div className="col-span-3">Environment</div>
            <div className="col-span-1">Variant</div>
            <div className="col-span-1">Visual</div>
            <div className="col-span-1">DOM</div>
            <div className="col-span-1">A11y</div>
            <div className="col-span-2">Difficulty</div>
            <div className="col-span-2">Description</div>
            <div className="col-span-1"></div>
          </div>

          {/* Table Rows */}
          {allEnvironments.map((env, index) => (
            <Link
              key={`${env.page}-${env.variant}`}
              href={`/v1/arena/${env.page}/${env.variant}/`}
              className={`grid grid-cols-12 gap-2 px-4 py-2.5 hover:bg-surface-hover transition-colors group ${
                index !== allEnvironments.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="col-span-3 font-mono text-sm text-foreground">
                {env.page}/{env.variant}
              </div>
              <div className="col-span-1">
                <span
                  className={`inline-flex px-1.5 py-0.5 text-xs font-medium border rounded ${variantStyles[env.variant]}`}
                >
                  {env.variant}
                </span>
              </div>
              <div className={`col-span-1 text-xs ${dimensionStyles[env.visual as keyof typeof dimensionStyles]}`}>
                {env.visual}
              </div>
              <div className={`col-span-1 text-xs ${dimensionStyles[env.dom as keyof typeof dimensionStyles]}`}>
                {env.dom}
              </div>
              <div className={`col-span-1 text-xs ${dimensionStyles[env.a11y as keyof typeof dimensionStyles]}`}>
                {env.a11y}
              </div>
              <div className={`col-span-2 text-xs capitalize ${difficultyStyles[env.difficulty]}`}>
                {env.difficulty}
              </div>
              <div className="col-span-2 text-xs text-muted">
                {env.description}
              </div>
              <div className="col-span-1 flex items-center justify-end">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-muted group-hover:text-accent transition-colors"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border mt-auto">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-2 text-xs text-muted">
            <span>UIArena v1</span>
            <span>·</span>
            <span>3 pages × 5 variants = 15 environments</span>
            <span>·</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
