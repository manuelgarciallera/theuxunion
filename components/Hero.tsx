"use client";

import { useMemo, useState } from "react";

type PillKey = "merit" | "nodes" | "portfolios";

type Pill = {
    key: PillKey;
    label: string;
    title: string;
    desc: string;
    accent: string;
    image: string;
};

const pills: Pill[] = [
    {
        key: "merit",
        label: "Merit Gate",
        title: "Acceso por méritos, no por postureo.",
        desc: "Validamos formación, experiencia y portfolio verificable.",
        accent: "rgba(255, 59, 200, 0.20)",
        image: "/hero/merit.png.jpg",
    },
    {
        key: "nodes",
        label: "Nodos",
        title: "Conexiones con señal real.",
        desc: "Empresas y talento se encuentran por encaje, no por ruido.",
        accent: "rgba(61, 242, 255, 0.18)",
        image: "/hero/nodes.png.jpg",
    },
    {
        key: "portfolios",
        label: "Portfolios",
        title: "Tu trabajo habla por ti.",
        desc: "Ranking que se mueve por impacto y consistencia.",
        accent: "rgba(76, 201, 240, 0.18)",
        image: "/hero/portfolios.png.jpg",
    },
];

export default function Hero() {
    const [active, setActive] = useState<PillKey>("merit");
    const current = useMemo(
        () => pills.find((p) => p.key === active)!,
        [active]
    );

    return (
        <section id="home" className="relative hero-fade">
            <div className="hero-content mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 pb-10 pt-16 md:grid-cols-2 md:items-start">
                {/* LEFT */}
                <div className="pt-6">
                    <div
                        className="text-xs tracking-[0.22em]"
                        style={{ color: "var(--text-secondary)", fontWeight: 600 }}
                    >
                        ACCESO POR MÉRITOS. CERO HUMO.
                    </div>

                    <h1 className="h1-calm mt-5 max-w-[20ch] text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                        <span className="text-[var(--brand-electric)]">Cambiamos</span> la
                        forma{" "}
                        <span style={{ color: "var(--text-primary)" }}>en la que</span>{" "}
                        <span className="text-[var(--brand-electric)]">diseñadores</span> y{" "}
                        <span className="text-[var(--brand-electric)]">empresas</span>{" "}
                        <span style={{ color: "var(--text-primary)" }}>se conectan</span>
                    </h1>

                    <p
                        className="mt-6 max-w-xl text-lg leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Una red de nodos donde tu ranking se construye con experiencia,
                        formación y portfolio verificable. Entra por méritos, crece por
                        impacto.
                    </p>

                    <div className="mt-10 flex items-center gap-4">
                        <a
                            href="#register"
                            className="tux-hover-border-magenta inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-semibold text-white transition"
                            style={{
                                background: "#ff3bc8",
                                borderColor: "var(--border-soft)",
                                boxShadow:
                                    "0 0 0 1px rgba(255,255,255,0.12), 0 0 22px rgba(255,59,200,0.35)",
                            }}
                        >
                            Crear cuenta
                        </a>

                        <a
                            href="#demo"
                            className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-semibold"
                            style={{
                                borderColor: "var(--border-soft)",
                                background: "var(--glass-2)",
                                color: "var(--text-primary)",
                            }}
                        >
                            Live demo →
                        </a>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="md:justify-self-end">
                    <div
                        className="relative w-[440px] max-w-full h-[470px] rounded-[26px] border overflow-hidden"
                        style={{
                            borderColor: "var(--border-soft)",
                            boxShadow:
                                "0 0 0 1px rgba(255,255,255,0.06), 0 25px 70px rgba(0,0,0,0.20)",
                        }}
                    >
                        {/* IMAGEN */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url(${current.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                opacity: 0.97,
                                filter: "contrast(1.08) saturate(1.06)",
                                transform: "scale(1.03)",
                            }}
                        />

                        {/* OSCURECIDO SOLO INFERIOR */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(5,11,26,0.00) 0%, rgba(5,11,26,0.15) 60%, rgba(5,11,26,0.55) 85%, rgba(5,11,26,0.88) 100%)",
                            }}
                        />

                        {/* COLOR BLEND SUAVE */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(181,23,158,0.18) 0%, rgba(76,201,240,0.14) 45%, rgba(61,242,255,0.14) 100%)",
                                mixBlendMode: "soft-light",
                                opacity: 0.45,
                            }}
                        />

                        {/* TEXTO ABAJO DEL TODO */}
                        <div className="relative h-full flex flex-col justify-end p-6 pb-7">
                            <div className="max-w-[78%]">
                                <div
                                    className="text-xl font-semibold leading-snug"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {current.title}
                                </div>
                                <div
                                    className="mt-2 text-base leading-snug"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {current.desc}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PILLS */}
                    <div className="mt-5 flex flex-wrap gap-3">
                        {pills.map((p) => (
                            <button
                                key={p.key}
                                type="button"
                                onClick={() => setActive(p.key)}
                                className={`tux-pill rounded-full px-4 py-2 text-sm ${p.key === active ? "is-active" : ""
                                    }`}
                            >
                                {p.label}
                            </button>
                        ))}
                    </div>

                    {/* TIP */}
                    <div
                        className="mt-4 w-[440px] max-w-full rounded-2xl border p-4 text-sm backdrop-blur"
                        style={{
                            borderColor: "var(--border-soft)",
                            background: "var(--glass-2)",
                            color: "var(--text-secondary)",
                        }}
                    >
                        <strong style={{ color: "var(--text-primary)" }}>Tip:</strong>{" "}
                        sube tu portfolio y valida hitos. Tu ranking se mueve por calidad, no
                        por postureo.
                    </div>
                </div>
            </div>
        </section>
    );
}
