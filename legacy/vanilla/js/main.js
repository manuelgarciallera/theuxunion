(function init() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Load saved theme if exists
    const saved = localStorage.getItem("tuxu-theme");
    if (saved === "light" || saved === "dark") {
        document.documentElement.setAttribute("data-theme", saved);
    }
})();

function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("tuxu-theme", next);
}

// Merit gate (simple simulated verification)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("meritForm");
    const out = document.getElementById("gateResult");
    if (!form || !out) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const years = Number(form.years.value || 0);
        const degree = form.degree.value; // yes/no
        const portfolio = (form.portfolio.value || "").trim();

        // Simple scoring (placeholder logic)
        let score = 0;
        if (years >= 2) score += 40;
        if (degree === "yes") score += 30;
        if (portfolio.startsWith("http")) score += 30;

        const pass = score >= 70;

        out.innerHTML = pass
            ? `<strong style="color: var(--aqua)">Acceso aprobado</strong><br>
         Score: ${score}/100. Siguiente paso: completar perfil y subir evidencias.`
            : `<strong style="color: var(--pink)">Acceso pendiente</strong><br>
         Score: ${score}/100. Te falta reforzar requisitos (experiencia, título o portfolio verificable).`;
    });
});
