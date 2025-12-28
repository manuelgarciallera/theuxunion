"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type FormState = {
    fullName: string;
    email: string;
    password: string;
    university: string;
    educationLevel: string;
    experience: string;
    focus: string[];
    portfolio: string;
    terms: boolean;
};

const EDUCATION = ["Grado", "Máster", "Bootcamp", "Autodidacta", "Doctorado"] as const;
const EXPERIENCE = ["0–1", "2–3", "4–6", "7+"] as const;
const FOCUS = ["UX", "UI", "Producto", "Investigación", "Visual", "3D"] as const;

export default function RegisterPage() {
    const [form, setForm] = useState<FormState>({
        fullName: "",
        email: "",
        password: "",
        university: "",
        educationLevel: "Grado",
        experience: "0–1",
        focus: [],
        portfolio: "",
        terms: false,
    });

    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [submitted, setSubmitted] = useState(false);

    const errors = useMemo(() => {
        const e: Record<string, string> = {};

        if (!form.fullName.trim()) e.fullName = "Indica tu nombre.";
        if (!form.email.trim()) e.email = "El email es obligatorio.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Introduce un email válido.";

        if (!form.password) e.password = "La contraseña es obligatoria.";
        else if (form.password.length < 8) e.password = "Mínimo 8 caracteres.";

        if (!form.university.trim()) e.university = "Indica tu universidad o centro.";

        if (!form.portfolio.trim()) e.portfolio = "El enlace al portfolio es obligatorio.";
        else {
            try {
                const url = new URL(form.portfolio);
                if (!url.hostname.includes(".")) e.portfolio = "El enlace no parece válido.";
            } catch {
                e.portfolio = "Introduce una URL válida, incluyendo http:// o https:// (ej: https://tumarca.com).";
            }
        }

        if (!form.terms) e.terms = "Debes aceptar los términos para continuar.";

        return e;
    }, [form]);

    const isValid = Object.keys(errors).length === 0;

    function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    function toggleFocus(tag: string) {
        setForm((prev) => {
            const exists = prev.focus.includes(tag);
            return { ...prev, focus: exists ? prev.focus.filter((t) => t !== tag) : [...prev.focus, tag] };
        });
    }

    function onBlur(name: string) {
        setTouched((p) => ({ ...p, [name]: true }));
    }

    function showError(name: keyof FormState) {
        return (touched[name as string] || submitted) && errors[name as string];
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitted(true);
        if (!isValid) return;

        console.log("REGISTER_PAYLOAD", form);
        console.info("✅ Solicitud enviada (simulación).");
    }

    return (
        <main
            className="min-h-screen"
            style={{
                color: "var(--text-primary)",
                background: `
          radial-gradient(1200px 600px at 20% -10%, rgba(76,201,240,0.12), transparent 60%),
          radial-gradient(1000px 500px at 80% 10%, rgba(255,59,200,0.10), transparent 55%),
          linear-gradient(180deg, var(--bg-main), var(--bg-main-2))
        `,
            }}
        >
            <div className="mx-auto max-w-6xl px-4 py-10">
                {/* Top bar */}
                <div className="mb-8 flex items-center justify-between">
                    <Link
                        href="/"
                        className="rounded-xl border px-4 py-2 text-sm backdrop-blur"
                        style={{
                            borderColor: "var(--border-soft)",
                            background: "var(--glass-2)",
                            color: "var(--text-primary)",
                        }}
                    >
                        ← Volver
                    </Link>

                    <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                        TheuxUnion · Merit Gate
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    {/* Form card */}
                    <section
                        className="rounded-3xl border p-6 backdrop-blur lg:p-8"
                        style={{
                            borderColor: "var(--border-soft)",
                            background: "var(--card-bg)",
                        }}
                    >
                        <header className="mb-6">
                            <h1 className="text-2xl font-semibold tracking-tight lg:text-3xl">
                                Crea tu cuenta
                            </h1>
                            <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                                Formulario preparado para simulación: limpio ahora, escalable después.
                            </p>
                        </header>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Identidad */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                <Field
                                    label="Nombre completo"
                                    value={form.fullName}
                                    onChange={(v) => setField("fullName", v)}
                                    onBlur={() => onBlur("fullName")}
                                    placeholder="Manuel García"
                                    error={showError("fullName")}
                                />
                                <Field
                                    label="Email"
                                    value={form.email}
                                    onChange={(v) => setField("email", v)}
                                    onBlur={() => onBlur("email")}
                                    placeholder="tu@email.com"
                                    error={showError("email")}
                                    type="email"
                                />
                            </div>

                            <Field
                                label="Contraseña"
                                value={form.password}
                                onChange={(v) => setField("password", v)}
                                onBlur={() => onBlur("password")}
                                placeholder="Mínimo 8 caracteres"
                                error={showError("password")}
                                type="password"
                            />

                            {/* Mérito */}
                            <div className="pt-2">
                                <h2 className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                                    Señales de mérito
                                </h2>
                                <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                                    Estos datos nos ayudan a situarte en el nivel de nodo adecuado. Podrás editarlos más adelante.
                                </p>
                            </div>

                            <Field
                                label="Universidad / Centro"
                                value={form.university}
                                onChange={(v) => setField("university", v)}
                                onBlur={() => onBlur("university")}
                                placeholder="URJC, UPM, UNIR…"
                                error={showError("university")}
                            />

                            <div className="grid gap-4 sm:grid-cols-2">
                                <SelectField
                                    label="Nivel de estudios"
                                    value={form.educationLevel}
                                    onChange={(v) => setField("educationLevel", v)}
                                    options={[...EDUCATION]}
                                />
                                <SelectField
                                    label="Años de experiencia"
                                    value={form.experience}
                                    onChange={(v) => setField("experience", v)}
                                    options={[...EXPERIENCE]}
                                />
                            </div>

                            {/* Focus chips */}
                            <div>
                                <div className="mb-2 text-sm" style={{ color: "var(--text-primary)" }}>
                                    Especialidad principal
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {FOCUS.map((tag) => {
                                        const active = form.focus.includes(tag);
                                        return (
                                            <button
                                                key={tag}
                                                type="button"
                                                onClick={() => toggleFocus(tag)}
                                                className="rounded-full border px-3 py-1 text-sm transition"
                                                style={{
                                                    borderColor: active ? "color-mix(in srgb, var(--text-primary) 30%, transparent)" : "var(--border-soft)",
                                                    background: active ? "color-mix(in srgb, var(--glass-3) 65%, transparent)" : "var(--glass-1)",
                                                    color: active ? "var(--text-primary)" : "var(--text-secondary)",
                                                }}
                                                aria-pressed={active}
                                            >
                                                {tag}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <Field
                                label="URL del portfolio"
                                value={form.portfolio}
                                onChange={(v) => setField("portfolio", v)}
                                onBlur={() => onBlur("portfolio")}
                                placeholder="tuportfolio.com"
                                error={showError("portfolio")}
                                inputMode="url"
                            />

                            {/* Terms */}
                            <div
                                className="rounded-2xl border p-4"
                                style={{ borderColor: "var(--border-soft)", background: "var(--glass-1)" }}
                            >
                                <label className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-1 h-4 w-4"
                                        style={{ accentColor: "var(--brand-magenta)" }}
                                        checked={form.terms}
                                        onChange={(e) => setField("terms", e.target.checked)}
                                        onBlur={() => onBlur("terms")}
                                    />
                                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                                        Acepto los términos y entiendo que esta es una comunidad basada en méritos.
                                    </span>
                                </label>
                                {showError("terms") ? (
                                    <p className="mt-2 text-sm" style={{ color: "var(--brand-magenta)" }}>
                                        {errors.terms}
                                    </p>
                                ) : null}
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <button
                                    type="submit"
                                    className="rounded-2xl px-5 py-3 text-sm font-medium transition"
                                    style={{
                                        background: isValid ? "var(--text-primary)" : "color-mix(in srgb, var(--text-primary) 45%, transparent)",
                                        color: isValid ? "var(--bg-main)" : "color-mix(in srgb, var(--bg-main) 55%, transparent)",
                                        cursor: isValid ? "pointer" : "not-allowed",
                                    }}
                                >
                                    Crear cuenta
                                </button>

                                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                                    Consejo: mantenlo simple ahora. El multi-paso vendrá después.
                                </p>
                            </div>
                        </form>
                    </section>

                    {/* Side panel */}
                    <aside
                        className="rounded-3xl border p-6 backdrop-blur lg:p-8"
                        style={{ borderColor: "var(--border-soft)", background: "var(--card-bg)" }}
                    >
                        <h3 className="text-lg font-semibold">Por qué pedimos estos datos</h3>
                        <ul className="mt-4 space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                            <li className="rounded-2xl border p-4" style={{ borderColor: "var(--border-soft)", background: "var(--glass-1)" }}>
                                <div className="font-medium" style={{ color: "var(--text-primary)" }}>Ubicación por mérito</div>
                                <div className="mt-1">Tu perfil encaja en un nivel de nodo, no en una insignia vacía.</div>
                            </li>
                            <li className="rounded-2xl border p-4" style={{ borderColor: "var(--border-soft)", background: "var(--glass-1)" }}>
                                <div className="font-medium" style={{ color: "var(--text-primary)" }}>Preparado para verificación</div>
                                <div className="mt-1">El portfolio y la trayectoria podrán validarse más adelante.</div>
                            </li>
                            <li className="rounded-2xl border p-4" style={{ borderColor: "var(--border-soft)", background: "var(--glass-1)" }}>
                                <div className="font-medium" style={{ color: "var(--text-primary)" }}>Editable</div>
                                <div className="mt-1">Nada es definitivo. Esto solo te introduce en el sistema.</div>
                            </li>
                        </ul>

                        <div
                            className="mt-6 rounded-2xl border p-4"
                            style={{
                                borderColor: "var(--border-soft)",
                                background:
                                    "radial-gradient(600px 200px at 30% 0%, rgba(76,201,240,0.14), transparent 60%), radial-gradient(500px 200px at 90% 40%, rgba(255,59,200,0.10), transparent 55%)",
                            }}
                        >
                            <p className="text-sm" style={{ color: "var(--text-primary)" }}>
                                TheuxUnion construye una comunidad donde tu trabajo pesa más que tus publicaciones.
                            </p>
                            <p className="mt-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                                Merit Gate es el primer filtro.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}

function Field(props: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    onBlur?: () => void;
    placeholder?: string;
    error?: string | false;
    type?: string;
    inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
    return (
        <div>
            <label className="text-sm" style={{ color: "var(--text-primary)" }}>
                {props.label}
            </label>
            <input
                type={props.type ?? "text"}
                inputMode={props.inputMode}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                onBlur={props.onBlur}
                placeholder={props.placeholder}
                className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none"
                style={{
                    borderColor: "var(--input-border)",
                    background: "var(--input-bg)",
                    color: "var(--text-primary)",
                }}
            />
            {props.error ? (
                <p className="mt-2 text-sm" style={{ color: "var(--brand-magenta)" }}>
                    {props.error}
                </p>
            ) : null}
        </div>
    );
}

function SelectField(props: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    onBlur?: () => void;
    options: string[];
}) {
    return (
        <div>
            <label className="text-sm" style={{ color: "var(--text-primary)" }}>
                {props.label}
            </label>
            <select
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                onBlur={props.onBlur}
                className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none"
                style={{
                    borderColor: "var(--input-border)",
                    background: "var(--input-bg)",
                    color: "var(--text-primary)",
                }}
            >
                {props.options.map((opt) => (
                    <option key={opt} value={opt} style={{ background: "var(--bg-main)" }}>
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    );
}
