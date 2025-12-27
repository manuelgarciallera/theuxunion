"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden relative">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                aria-label="Open menu"
            >
                {open ? <X className="h-5 w-5 text-white/85" /> : <Menu className="h-5 w-5 text-white/85" />}
            </button>

            {open && (
                <div className="absolute right-0 top-14 z-50 w-[min(92vw,360px)] rounded-2xl border border-white/10 bg-[#0A1026]/95 p-4 backdrop-blur-xl">
                    <nav className="flex flex-col gap-2">
                        <a className="rounded-xl px-4 py-3 text-white/85 hover:bg-white/10 transition" href="#home">Home</a>
                        <a className="rounded-xl px-4 py-3 text-white/85 hover:bg-white/10 transition" href="#connect">Conectar</a>
                        <a className="rounded-xl px-4 py-3 text-white/85 hover:bg-white/10 transition" href="#about">Quiénes somos</a>
                    </nav>

                    <div className="mt-3 flex gap-2">
                        <a
                            href="#login"
                            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-white/85 hover:bg-white/10 transition"
                        >
                            Login
                        </a>
                        <a
                            href="#register"
                            className="flex-1 rounded-xl bg-gradient-to-r from-[#23E6D7] to-[#FF3BC8] px-4 py-3 text-center text-sm font-semibold text-black hover:opacity-95 transition"
                        >
                            Registro
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
