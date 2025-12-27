// ========== THEUXUNION MVP JS ==========

// THEME
(function initTheme() {
    const saved = localStorage.getItem("theuxunion_theme");
    const theme = saved || "dark";
    document.documentElement.setAttribute("data-theme", theme);
})();

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theuxunion_theme", next);
}

// ACCESS FORM (fake submit)
function initAccessForm() {
    const form = document.querySelector("[data-access-form]");
    if (!form) return;

    const success = document.querySelector("[data-access-success]");
    const submitBtn = form.querySelector("button[type='submit']");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Minimal "validation"
        const name = form.querySelector("#name")?.value.trim();
        const email = form.querySelector("#email")?.value.trim();

        if (!name || !email) {
            alert("Por favor, completa nombre y email.");
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = "Enviando…";

        setTimeout(() => {
            form.classList.add("hidden");
            success.classList.remove("hidden");
        }, 700);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initAccessForm();
});
