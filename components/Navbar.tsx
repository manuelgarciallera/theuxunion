"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageSelect from "./LanguageSelect";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [compact, setCompact] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setCompact(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    function handleHomeClick(e: React.MouseEvent) {
        const isHome = pathname === "/" || pathname === "" || pathname === "/theuxunion";
        if (isHome) {
            e.preventDefault();
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }

    return (
        <header className={`navbar ${compact ? "is-compact" : ""}`}>
            <div className="navbar-surface">
                <div className="navbar-inner mx-auto flex w-full max-w-6xl items-center justify-between px-5">
                    {/* Brand: orbe + texto */}
                    <div className="navbar-brand" aria-label="TheuxUnion · Inicio">
                        <Link
                            href="/"
                            onClick={handleHomeClick}
                            className="tux-brand tux-brand-orb"
                            aria-label="TheuxUnion · Inicio"
                        >
                            <div className="navbar-logo" />
                        </Link>

                        <Link
                            href="/"
                            onClick={handleHomeClick}
                            className={`tux-brand tux-brand-text navbar-brand-text hidden md:block ${compact ? "is-hidden" : ""
                                }`}
                            aria-label="TheuxUnion · Inicio"
                        >
                            <div className="navbar-title text-sm font-semibold text-[color:var(--text-primary)]">
                                TheuxUnion
                            </div>
                            <div className="navbar-tagline text-[12px] text-[color:var(--text-secondary)]">
                                Empowering design connections
                            </div>
                        </Link>
                    </div>

                    {/* Middle nav */}
                    <nav className="hidden items-center gap-2 md:flex">
                        <Link href="/" onClick={handleHomeClick} className="tux-navlink">
                            Home
                        </Link>
                        <a href="#connect" className="tux-navlink">
                            Conectar
                        </a>
                        <a href="#about" className="tux-navlink">
                            Quiénes somos
                        </a>
                    </nav>

                    {/* Right controls */}
                    <div className="navbar-controls flex items-center gap-2">
                        <LanguageSelect />

                        <div className="shrink-0">
                            <ThemeToggle />
                        </div>

                        <a
                            href="#login"
                            className="tux-hover hidden h-9 items-center justify-center rounded-xl border px-4 text-sm transition md:inline-flex"
                            style={{
                                borderColor: "var(--border-soft)",
                                background: "var(--glass-2)",
                                color: "var(--text-primary)",
                            }}
                        >
                            Login
                        </a>

                        <Link
                            href="/register"
                            className="tux-hover-border tux-register hidden h-9 items-center justify-center rounded-xl border px-4 text-sm font-semibold transition md:inline-flex"
                            style={{
                                borderColor: "var(--border-soft)",
                                background:
                                    "linear-gradient(90deg, var(--brand-electric), var(--brand-neon))",
                                color: "#050b1a",
                                boxShadow: "0 0 0 1px rgba(255,255,255,0.10)",
                            }}
                        >
                            Registro
                        </Link>

                        <div className="shrink-0 md:hidden">
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
