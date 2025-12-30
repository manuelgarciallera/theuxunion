"use client";

const companies = [
    "Adobe",
    "Figma",
    "Google",
    "Microsoft",
    "Spotify",
    "Airbnb",
    "Meta",
    "Netflix",
];

export default function Trusted() {
    return (
        <section className="tux-trusted-section" id="trusted">
            <div className="tux-container">
                <div className="tux-trusted-head">
                    <h3>
                        Empresas que confían en <span className="tux-accent-electric">TheuxUnion</span>
                    </h3>
                    <p>Menos ruido. Más señal. Un acceso basado en mérito que filtra perfiles y acelera el match.</p>
                </div>

                <div className="tux-trusted-grid">
                    {companies.map((name, i) => (
                        <div key={i} className="tux-trusted-card" tabIndex={0} aria-label={name}>
                            <span className="tux-trusted-mark">{name}</span>
                        </div>
                    ))}
                </div>

                <div className="tux-trusted-foot">
                    <span className="tux-trusted-pill">Empresas reales. Acceso real. Señal verificada.</span>
                </div>
            </div>
        </section>
    );
}
