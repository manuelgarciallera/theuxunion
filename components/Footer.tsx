export default function Footer() {
    return (
        <footer className="mx-auto max-w-6xl px-4 pb-10">
            <div className="rounded-3xl tux-panel p-8 md:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                            TheuxUnion
                        </div>
                        <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                            Acceso por méritos. Cero humo.
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <a className="transition hover:opacity-90" href="#home">Home</a>
                        <a className="transition hover:opacity-90" href="#connect">Conectar</a>
                        <a className="transition hover:opacity-90" href="#about">Quiénes somos</a>
                        <a className="transition hover:opacity-90" href="#legal">Legal</a>
                    </div>
                </div>

                <div className="mt-6 text-xs" style={{ color: "var(--text-muted)" }}>
                    © {new Date().getFullYear()} TheuxUnion. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
