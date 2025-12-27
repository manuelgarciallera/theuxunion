"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        const current = document.documentElement.getAttribute("data-theme");
        if (current === "light") setTheme("light");
        else setTheme("dark");
    }, []);

    const toggle = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.setAttribute("data-theme", next);
    };

    return (
        <button
            type="button"
            onClick={toggle}
            className="tux-hover inline-flex h-9 w-9 items-center justify-center rounded-xl border transition"
            style={{
                borderColor: "var(--border-soft)",
                background: "var(--glass-2)",
                color: "var(--text-primary)",
            }}
            aria-label="Cambiar tema"
            title="Cambiar tema"
        >
            <span style={{ fontSize: 14, fontWeight: 800, lineHeight: 1 }}>
                {theme === "dark" ? "☾" : "☀"}
            </span>
        </button>
    );
}
