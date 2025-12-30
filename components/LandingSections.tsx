"use client";

import { useEffect } from "react";

const BASE = process.env.NODE_ENV === "production" ? "/theuxunion" : "";

function asset(path: string) {
    const clean = path.startsWith("/") ? path : `/${path}`;
    return `${BASE}${clean}`;
}

type AppSection = {
    key: "discover" | "resources" | "nodes" | "portfolio" | "coworking" | "events";
    title: string;
    desc: string;
    image: string;
};

const appSections: AppSection[] = [
    { key: "discover", title: "Descubrir", desc: "Explora perfiles, proyectos y señales reales.", image: "/hero/nodo9.jpg" },
    { key: "nodes", title: "Nodos", desc: "Conecta por afinidad y valor.", image: "/hero/nodo10.jpg" },
    { key: "portfolio", title: "Portfolio", desc: "Un portfolio vivo con contexto, proceso y feedback.", image: "/hero/nodo11.jpg" },
    { key: "resources", title: "Recursos", desc: "Plantillas, guías y herramientas.", image: "/hero/nodo12.jpg" },
    { key: "coworking", title: "Coworking", desc: "Espacios para crear y colaborar.", image: "/hero/nodo13.jpg" },
    { key: "events", title: "Eventos", desc: "Encuentros, charlas y workshops.", image: "/hero/nodo14.jpg" },
];

function SectionIcon({ k }: { k: AppSection["key"] }) {
    if (k === "discover") {
        return (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
            </svg>
        );
    }

    if (k === "resources") {
        return (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                    d="M5.5 6.5c0-1.1.9-2 2-2H18.5v15H7.5c-1.1 0-2-.9-2-2v-11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M7.5 4.5v13c0 1.1.9 2 2 2h9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    if (k === "nodes") {
        return (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="6.5" cy="12" r="2.2" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="7" r="2.2" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="17" r="2.2" stroke="currentColor" strokeWidth="2" />
                <path
                    d="M8.7 11l6.4-3.2M8.7 13l6.4 3.2M15.3 8.4v7.2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    if (k === "portfolio") {
        return (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                    d="M4.5 8.5c0-1.1.9-2 2-2h3l1.2 1.4c.4.4.9.6 1.4.6H17.5c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2h-11c-1.1 0-2-.9-2-2v-9Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    if (k === "coworking") {
        return (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 11.2a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" stroke="currentColor" strokeWidth="2" />
                <path
                    d="M15.5 10.5a2.6 2.6 0 1 0-2.6-2.6 2.6 2.6 0 0 0 2.6 2.6Z"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M4.8 19.2c.6-3.1 2.6-4.6 4.9-4.6s4.3 1.5 4.9 4.6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M14.2 14.9c1.8.2 3.2 1.3 3.7 3.4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6.5 5.5v2M17.5 5.5v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M5 9.2h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path
                d="M6.5 7.5h11c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2h-11c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function LandingSections() {
    useEffect(() => {
        let raf = 0;

        const onScroll = () => {
            if (raf) return;
            raf = window.requestAnimationFrame(() => {
                document.documentElement.style.setProperty("--tux-scroll", String(window.scrollY || 0));
                raf = 0;
            });
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (raf) window.cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            {/* ✅ MANIFIESTO (sin imagen de fondo) */}
            <section className="tux-manifest" id="manifest">
                <div className="tux-manifest-overlay" />
                <div className="tux-manifest-inner tux-container">
                    <div className="tux-manifest-content">
                        <h2>
                            Menos links. <span className="tux-accent-electric">Más nodos.</span>
                        </h2>

                        <p>
                            TheuxUnion no va de acumular contactos. Va de construir un perfil con proyectos reales, feedback honesto y
                            reconocimiento que se gana, no que se pide.
                        </p>

                        <p className="tux-accent-electric">
                            Crecer, colaborar, aprender y encontrar oportunidades dentro de un mismo ecosistema diseñado para profesionales del diseño.
                        </p>
                    </div>
                </div>
            </section>

            {/* ✅ SECCIONES (6 módulos) */}
            <section className="tux-app-sections" id="sections">
                <div className="tux-container">
                    <div className="tux-app-sections-head">
                        <h2>
                            Nuevas formas de <span className="tux-accent-electric">crecer</span>
                        </h2>
                        <p>Accede a tu menú, encontrarás tus herramientas para evolucionar profesionalmente como diseñador.</p>
                    </div>

                    <div className="tux-app-grid">
                        {appSections.map((s) => (
                            <button key={s.key} type="button" className="tux-app-card" aria-label={s.title} onClick={() => { }}>
                                <span className="tux-app-icon" aria-hidden="true">
                                    <SectionIcon k={s.key} />
                                </span>

                                <div className="tux-app-copy">
                                    <h4>{s.title}</h4>
                                    <p>{s.desc}</p>
                                </div>

                                <div className="tux-app-media" aria-hidden="true">
                                    <img src={asset(s.image)} alt="" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <hr className="tux-divider" />

            {/* ✅ título como nueva sección */}
            <section className="tux-section-title" id="prestige">
                <div className="tux-container">
                    <h2>
                        Donde el <span className="tux-accent-electric">prestigio</span> se construye
                    </h2>
                </div>
            </section>

            {/* ✅ SPLIT 1 (mobile: imagen → texto) */}
            <section className="tux-split" id="connect">
                <div className="tux-container">
                    <div className="tux-split-grid">
                        <div className="tux-split-media">
                            <img src={asset("/hero/hero4.jpg")} alt="TheuxUnion nodes" />
                        </div>

                        <div className="tux-split-copy">
                            <span className="tux-kicker">Portfolio vivo + reputación</span>
                            <h3>Tu perfil no se rellena. Se construye.</h3>
                            <p>
                                Sube proyectos reales, documenta tu proceso y deja que tu trabajo hable. Aquí el prestigio llega por esfuerzo,
                                criterio y constancia, no por coleccionar contactos.
                            </p>
                            <p>Un punto de encuentro para crecer, colaborar y aprender sin saltar de plataforma en plataforma.</p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="tux-divider" />

            {/* ✅ SPLIT 2 (AHORA: desktop texto izq + imagen dcha | mobile: imagen → texto) */}
            <section className="tux-split" id="about">
                <div className="tux-container">
                    <div className="tux-split-grid is-reversed">
                        {/* ✅ TEXTO PRIMERO (izquierda en desktop) */}
                        <div className="tux-split-copy">
                            <span className="tux-kicker">Comunidad, pero profesional</span>
                            <h3>Buen rollo sí. Postureo no.</h3>
                            <p>
                                TheuxUnion se siente como una red, pero funciona como un ecosistema: proyectos valorados, aprendizaje,
                                colaboración y conexiones con sentido.
                            </p>
                            <p>Menos “mírame” y más “mira esto”. Menos links y más nodos.</p>
                        </div>

                        {/* ✅ IMAGEN DESPUÉS (derecha en desktop) */}
                        <div className="tux-split-media">
                            <img src={asset("/hero/hero5.jpg")} alt="TheuxUnion community" />
                        </div>
                    </div>
                </div>
            </section>

            <hr className="tux-divider" />

            {/* ✅ SPLIT 3 (mobile: imagen → texto) */}
            <section className="tux-split" id="opportunities">
                <div className="tux-container">
                    <div className="tux-split-grid">
                        <div className="tux-split-media">
                            <img src={asset("/hero/hero6.jpg")} alt="TheuxUnion opportunities" />
                        </div>

                        <div className="tux-split-copy">
                            <span className="tux-kicker">Oportunidades dentro del sistema</span>
                            <h3>Crecer, conectar y encontrar curro, sin abrir 5 pestañas.</h3>
                            <p>
                                Ofertas laborales, colaboraciones y proyectos, todo conectado a tu perfil y a tu reputación real para que las
                                oportunidades sean consecuencia de tu recorrido.
                            </p>
                            <p>Un único lugar para evolucionar como diseñador. Sin ruido. Con señal.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
