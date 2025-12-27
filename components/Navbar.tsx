"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSelect from "./LanguageSelect";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [compact, setCompact] = useState(false);

    useEffect(() => {
        const onScroll = () => setCompact(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`navbar ${compact ? "is-compact" : ""}`}>
            <div className="navbar-surface">
                <div className="navbar-inner mx-auto flex w-full max-w-6xl items-center justify-between px-5">
                    {/* Brand */}
                    <div className="navbar-brand">
                        <div className="navbar-logo" />
                        <div
                            className={`navbar-brand-text leading-tight ${compact ? "is-hidden" : ""}`}
                        >
                            <div className="text-sm font-semibold text-[color:var(--text-primary)]">
                                TheuxUnion
                            </div>
                            <div className="text-[12px] text-[color:var(--text-secondary)]">
                                Empowering design connections
                            </div>
                        </div>
                    </div>

                    {/* Middle nav */}
                    <nav className="hidden md:flex items-center gap-2">
                        {["Home", "Conectar", "Quiénes somos"].map((label, i) => (
                            <a
                                key={label}
                                href={["#home", "#connect", "#about"][i]}
                                className="tux-navlink"
                            >
                                {label}
                            </a>
                        ))}
                    </nav>


                    {/* Right controls */}
                    <div className="flex items-center gap-3">
                        <LanguageSelect />
                        <ThemeToggle />

                        <a
                            href="#login"
                            className="tux-hover hidden md:inline-flex h-9 items-center justify-center rounded-xl border px-4 text-sm transition"
                            style={{
                                borderColor: "var(--border-soft)",
                                background: "var(--glass-2)",
                                color: "var(--text-primary)",
                            }}
                        >
                            Login
                        </a>

                        <a
                            href="#register"
                            className="tux-hover-border hidden md:inline-flex h-9 items-center justify-center rounded-xl border px-4 text-sm font-semibold transition"
                            style={{
                                borderColor: "var(--border-soft)",
                                background:
                                    "linear-gradient(90deg, var(--brand-electric), var(--brand-neon))",
                                color: "#050b1a",
                                boxShadow: "0 0 0 1px rgba(255,255,255,0.10)",
                            }}
                        >
                            Registro
                        </a>

                        <MobileMenu />
                    </div>
                </div>
            </div>
        </header>
    );
}
