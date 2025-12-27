export default function Trusted() {
    const items = ["Transistor", "Reform", "Tuple", "Laravel", "SavvyCal", "Statamic"];

    return (
        <section id="connect" className="relative pb-16 tux-bridge">
            <div className="mx-auto max-w-6xl px-5">
                <div className="mt-10 rounded-3xl tux-panel p-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold" style={{ color: "var(--text-primary)" }}>
                            Empresas que confían en TheuxUnion para conectar con talento verificado
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-sm" style={{ color: "var(--text-secondary)" }}>
                            Menos ruido. Más señal. Un acceso basado en mérito que filtra perfiles y acelera el match.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((name) => (
                            <div
                                key={name}
                                className="flex h-20 items-center justify-center rounded-2xl border transition"
                                style={{
                                    borderColor: "color-mix(in srgb, var(--brand-electric) 28%, var(--border-soft))",
                                    background: "var(--glass-2)",
                                    color: "var(--text-primary)",
                                }}
                            >
                                <span className="text-sm font-semibold tracking-wide">{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
