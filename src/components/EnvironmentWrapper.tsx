"use client";

import { useState, useEffect } from "react";

interface Metadata {
  name: string;
  variant: string;
  difficulty: string;
  description: string;
  tasks: string[];
}

interface EnvironmentWrapperProps {
  page: string;
  variant: string;
}

export default function EnvironmentWrapper({ page, variant }: EnvironmentWrapperProps) {
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const basePath = `/snapshots/v1/arena/${page}/${variant}`;

  useEffect(() => {
    fetch(`${basePath}/metadata.json`)
      .then((res) => res.json())
      .then((data) => setMetadata(data))
      .catch((err) => console.error("Failed to load metadata:", err));
  }, [basePath]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "medium":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "hard":
        return "bg-rose-500/20 text-rose-400 border-rose-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getVariantColor = (v: string) => {
    switch (v) {
      case "c0":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "c1":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "c2":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "c3":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "c4":
        return "bg-rose-500/20 text-rose-400 border-rose-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-surface px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <a
                href="/v1/"
                className="text-muted hover:text-foreground transition-colors text-sm font-medium"
              >
                ← Back to Benchmark
              </a>
              <span className="text-border">|</span>
              <h1 className="text-xl font-semibold text-foreground">
                {metadata?.name || "Loading..."}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              {metadata && (
                <>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getVariantColor(
                      metadata.variant
                    )}`}
                  >
                    {metadata.variant.toUpperCase()}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(
                      metadata.difficulty
                    )}`}
                  >
                    {metadata.difficulty.toUpperCase()}
                  </span>
                </>
              )}
            </div>
          </div>
          {metadata && (
            <p className="text-sm text-muted max-w-3xl">{metadata.description}</p>
          )}
        </div>
      </header>

      {/* Action Bar */}
      <div className="bg-surface border-b border-border px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href={`${basePath}/metadata.json`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-accent-dim transition-colors flex items-center gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              metadata.json
            </a>
          </div>
          <a
            href={`${basePath}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-accent hover:bg-accent-dim text-background text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Open Raw Snapshot
          </a>
        </div>
      </div>

      {/* Tasks Panel (collapsible) */}
      {metadata && metadata.tasks.length > 0 && (
        <div className="bg-surface/50 border-b border-border px-6 py-3">
          <div className="max-w-7xl mx-auto">
            <details className="group">
              <summary className="cursor-pointer text-sm font-medium text-foreground flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform group-open:rotate-90"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                Grounding Tasks ({metadata.tasks.length})
              </summary>
              <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                {metadata.tasks.map((task, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted flex items-start gap-2"
                  >
                    <span className="text-accent font-mono text-xs mt-0.5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {task}
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      )}

      {/* Iframe Container */}
      <div className="flex-1 bg-white">
        <iframe
          src={`${basePath}/`}
          className="w-full h-full min-h-[600px] border-0"
          title={`${metadata?.name || page} - ${variant}`}
        />
      </div>
    </div>
  );
}

