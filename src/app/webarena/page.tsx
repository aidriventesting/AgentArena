import Link from "next/link";

export default function WebArenaHome() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-semibold text-foreground">WebArena</h1>
              <span className="px-2 py-0.5 text-xs font-medium bg-green/15 text-green border border-green/30 rounded">
                Beta
              </span>
            </div>
            <Link
              href="/v1/"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              ← Back to UIArena
            </Link>
          </div>
          <p className="text-sm text-muted mb-4">
            Complete websites for testing web navigation agents — Multi-page user journeys
          </p>
          <div className="flex items-center gap-4 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span><strong className="text-foreground">6</strong> pages per site</span>
            </span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span><strong className="text-foreground">8</strong> tasks to complete</span>
            </span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>Theme: <strong className="text-foreground">Social Network</strong></span>
            </span>
          </div>
        </div>
      </div>

      {/* Sites List */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Available Sites</h2>

        <div className="grid gap-4">
          {/* c0 - Baseline */}
          <Link
            href="/webarena/c0"
            className="block bg-surface border border-border rounded-lg p-6 hover:bg-surface-hover transition-colors group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">DemoHub</h3>
                  <span className="px-2 py-0.5 text-xs font-medium bg-green/15 text-green border border-green/30 rounded">
                    c0
                  </span>
                  <span className="px-2 py-0.5 text-xs font-medium bg-green/15 text-green border border-green/30 rounded">
                    Easy
                  </span>
                </div>
                <p className="text-sm text-muted mb-4">
                  Complete social network with news feed, profiles, messaging, notifications and settings.
                  Baseline version with semantic HTML, full accessibility and modern design.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 bg-surface-hover rounded">📱 Feed</span>
                  <span className="px-2 py-1 bg-surface-hover rounded">👤 Profile</span>
                  <span className="px-2 py-1 bg-surface-hover rounded">💬 Messages</span>
                  <span className="px-2 py-1 bg-surface-hover rounded">🔔 Notifications</span>
                  <span className="px-2 py-1 bg-surface-hover rounded">⚙️ Settings</span>
                  <span className="px-2 py-1 bg-surface-hover rounded">🔐 Login</span>
                </div>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-muted group-hover:text-accent transition-colors flex-shrink-0 mt-1"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </Link>

          {/* Placeholder for future complexity levels */}
          <div className="bg-surface/50 border border-border border-dashed rounded-lg p-6 opacity-60">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-muted">DemoHub</h3>
              <span className="px-2 py-0.5 text-xs font-medium bg-yellow/15 text-yellow border border-yellow/30 rounded">
                c1
              </span>
              <span className="px-2 py-0.5 text-xs font-medium bg-yellow/15 text-yellow border border-yellow/30 rounded">
                Medium
              </span>
              <span className="px-2 py-0.5 text-xs font-medium bg-muted/15 text-muted border border-muted/30 rounded">
                Coming Soon
              </span>
            </div>
            <p className="text-sm text-muted">
              Version with minimal CSS — tests navigation without visual cues.
            </p>
          </div>

          <div className="bg-surface/50 border border-border border-dashed rounded-lg p-6 opacity-60">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-muted">DemoHub</h3>
              <span className="px-2 py-0.5 text-xs font-medium bg-red/15 text-red border border-red/30 rounded">
                c4
              </span>
              <span className="px-2 py-0.5 text-xs font-medium bg-red/15 text-red border border-red/30 rounded">
                Hard
              </span>
              <span className="px-2 py-0.5 text-xs font-medium bg-muted/15 text-muted border border-muted/30 rounded">
                Coming Soon
              </span>
            </div>
            <p className="text-sm text-muted">
              Hard version with noisy DOM, no accessibility, and minimal CSS.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border mt-auto">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-2 text-xs text-muted">
            <span>WebArena</span>
            <span>·</span>
            <span>Websites for testing navigation agents</span>
            <span>·</span>
            <Link href="/v1/" className="hover:text-foreground transition-colors">
              UIArena v1
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

