"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Metadata {
    name: string;
    variant: string;
    difficulty: string;
    description: string;
    pages: Array<{
        path: string;
        name: string;
        description: string;
    }>;
    tasks: Array<{
        id: string;
        description: string;
        startPage: string;
        expectedResult: string;
    }>;
}

export default function WebArenaC0Page() {
    const [metadata, setMetadata] = useState<Metadata | null>(null);
    const [showTasks, setShowTasks] = useState(false);
    const basePath = `/webarena/c0`;

    useEffect(() => {
        fetch(`${basePath}/metadata.json`)
            .then((res) => res.json())
            .then((data) => setMetadata(data))
            .catch((err) => console.error("Failed to load metadata:", err));
    }, [basePath]);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Header */}
            <header className="border-b border-border bg-surface px-6 py-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-4">
                            <Link
                                href="/webarena/"
                                className="text-muted hover:text-foreground transition-colors text-sm font-medium"
                            >
                                ← Back to WebArena
                            </Link>
                            <span className="text-border">|</span>
                            <h1 className="text-xl font-semibold text-foreground">
                                {metadata?.name || "Loading..."}
                            </h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full text-xs font-medium border bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                                C0
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium border bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                                EASY
                            </span>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                            </svg>
                            metadata.json
                        </a>
                    </div>
                    <a
                        href={`${basePath}/index.html`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-accent hover:bg-accent-dim text-background text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Open Site
                    </a>
                </div>
            </div>

            {/* Tasks Panel */}
            {metadata && metadata.tasks && metadata.tasks.length > 0 && (
                <div className="bg-surface/50 border-b border-border px-6 py-3">
                    <div className="max-w-7xl mx-auto">
                        <button
                            onClick={() => setShowTasks(!showTasks)}
                            className="cursor-pointer text-sm font-medium text-foreground flex items-center gap-2 w-full text-left"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className={`transition-transform ${showTasks ? "rotate-90" : ""}`}
                            >
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                            Agent Tasks ({metadata.tasks.length})
                        </button>
                        {showTasks && (
                            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                                {metadata.tasks.map((task, index) => (
                                    <div
                                        key={task.id}
                                        className="bg-surface border border-border rounded-lg p-3"
                                    >
                                        <div className="flex items-start gap-2">
                                            <span className="text-accent font-mono text-xs mt-0.5 bg-accent/10 px-1.5 py-0.5 rounded">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <div>
                                                <p className="text-sm text-foreground">{task.description}</p>
                                                <p className="text-xs text-muted mt-1">
                                                    Page: <code className="bg-surface-hover px-1 rounded">{task.startPage}</code>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Pages Quick Links */}
            {metadata && metadata.pages && (
                <div className="bg-surface/30 border-b border-border px-6 py-3">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs text-muted mr-2">Pages:</span>
                            {metadata.pages.map((page) => (
                                <a
                                    key={page.path}
                                    href={`${basePath}/${page.path}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1 text-xs bg-surface border border-border rounded-full hover:bg-surface-hover hover:border-accent transition-colors"
                                >
                                    {page.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Iframe Container */}
            <div className="flex-1 bg-white">
                <iframe
                    src={`${basePath}/index.html`}
                    className="w-full h-full min-h-[700px] border-0"
                    title={metadata?.name || "DemoHub"}
                />
            </div>
        </div>
    );
}

