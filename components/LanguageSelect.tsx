"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type LangCode = "ES" | "EN" | "CA" | "FR" | "IT" | "DE" | "JA" | "ZH" | "RU" | "AR";

type Lang = {
    code: LangCode;
    label: string;
};

const LANGS: Lang[] = [
    { code: "ES", label: "Español" },
    { code: "EN", label: "English" },
    { code: "CA", label: "Català" },
    { code: "FR", label: "Français" },
    { code: "IT", label: "Italiano" },
    { code: "DE", label: "Deutsch" },
    { code: "JA", label: "日本語" },
    { code: "ZH", label: "中文" },
    { code: "RU", label: "Русский" },
    { code: "AR", label: "العربية" },
];

export default function LanguageSelect() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<LangCode>("ES");
    const wrapRef = useRef<HTMLDivElement | null>(null);

    const activeLabel = useMemo(
        () => LANGS.find((l) => l.code === active)?.label ?? "Español",
        [active]
    );

    // cerrar al click fuera
    useEffect(() => {
        function onDocClick(e: MouseEvent) {
            if (!wrapRef.current) return;
            const target = e.target as Node;
            if (!wrapRef.current.contains(target)) setOpen(false);
        }
        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, []);

    // cerrar con ESC
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    function selectLang(code: LangCode) {
        setActive(code);
        setOpen(false);

        // Si tienes i18n real: aquí disparas el cambio de locale
        // ejemplo:
        // router.push(pathname, { locale: mapCodeToLocale(code) })
    }

    return (
        <div ref={wrapRef} className="tux-lang">
            <button
                type="button"
                className="tux-lang-btn"
                aria-haspopup="menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
            >
                <span className="tux-lang-code">{active}</span>
                <span aria-hidden style={{ fontSize: 12, opacity: 0.85, transform: "translateY(-1px)" }}>
                    ▼
                </span>
            </button>

            {open && (
                <div className="tux-lang-menu" role="menu" aria-label="Language">
                    {LANGS.map((l) => {
                        const isActive = l.code === active;
                        return (
                            <button
                                key={l.code}
                                type="button"
                                role="menuitemradio"
                                aria-checked={isActive}
                                className={`tux-lang-item ${isActive ? "is-active" : ""}`}
                                onClick={() => selectLang(l.code)}
                            >
                                <span>{l.label}</span>
                                <span className="tux-lang-check">{isActive ? "✓" : "✓"}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
