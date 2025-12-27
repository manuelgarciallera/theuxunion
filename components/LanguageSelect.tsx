"use client";

import { useEffect, useRef, useState } from "react";

type Lang = "ES" | "EN";

export default function LanguageSelect() {
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState<Lang>("ES");
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const onDoc = (e: MouseEvent) => {
            if (!ref.current) return;
            if (!ref.current.contains(e.target as Node)) setOpen(false);
        };

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };

        document.addEventListener("mousedown", onDoc);
        document.addEventListener("keydown", onKey);

        return () => {
            document.removeEventListener("mousedown", onDoc);
            document.removeEventListener("keydown", onKey);
        };
    }, []);

    const options: Lang[] = ["ES", "EN"];

    return (
        <div className="tux-lang" ref={ref}>
            <button
                type="button"
                className="tux-lang-btn tux-hover"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <span style={{ fontSize: 12, fontWeight: 700 }}>{lang}</span>
                <span style={{ color: "var(--text-secondary)", fontSize: 12 }}>▾</span>
            </button>

            {open && (
                <div className="tux-lang-menu" role="listbox" aria-label="Idioma">
                    {options.map((o) => (
                        <button
                            key={o}
                            type="button"
                            className={`tux-lang-item ${o === lang ? "is-active" : ""}`}
                            onClick={() => {
                                setLang(o);
                                setOpen(false);
                            }}
                        >
                            <span>{o}</span>
                            {o === lang ? <span className="tux-lang-check">✓</span> : null}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
