import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-4xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">AgentArena</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              AI Agent Evaluation Benchmarks — UI Grounding, Web Navigation and Task Automation
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* UIArena Card */}
            <Link
              href="/v1/"
              className="block bg-surface border border-border rounded-xl p-6 hover:bg-surface-hover hover:border-accent transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
                <span className="px-2 py-0.5 text-xs font-medium bg-accent/15 text-accent border border-accent/30 rounded">
                  v1
                </span>
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">UIArena</h2>
              <p className="text-sm text-muted mb-4">
                Static UI grounding benchmark — Evaluates agents' ability to locate interface elements.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted">
                <span><strong className="text-foreground">15</strong> environments</span>
                <span>•</span>
                <span><strong className="text-foreground">5</strong> variants</span>
                <span>•</span>
                <span><strong className="text-foreground">3</strong> dimensions</span>
              </div>
              <div className="mt-4 flex items-center text-sm text-accent group-hover:gap-2 transition-all">
                <span>Explore benchmarks</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </Link>

            {/* WebArena Card */}
            <Link
              href="/webarena/"
              className="block bg-surface border border-border rounded-xl p-6 hover:bg-surface-hover hover:border-green transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <span className="px-2 py-0.5 text-xs font-medium bg-green/15 text-green border border-green/30 rounded">
                  Beta
                </span>
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">WebArena</h2>
              <p className="text-sm text-muted mb-4">
                Complete websites for testing navigation — Evaluates multi-page user journeys.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted">
                <span><strong className="text-foreground">1</strong> site</span>
                <span>•</span>
                <span><strong className="text-foreground">6</strong> pages</span>
                <span>•</span>
                <span><strong className="text-foreground">8</strong> tasks</span>
              </div>
              <div className="mt-4 flex items-center text-sm text-green group-hover:gap-2 transition-all">
                <span>Discover sites</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-2 text-xs text-muted">
            <span>AgentArena</span>
            <span>·</span>
            <span>Benchmarks for evaluating AI agents</span>
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

