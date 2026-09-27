document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("theme-toggle");
    const icon = button?.querySelector("i");

    if (!button || !icon) return;

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }

    button.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        localStorage.setItem("theme", isDark ? "dark" : "light");

        icon.classList.toggle("fa-moon", !isDark);
        icon.classList.toggle("fa-sun", isDark);
    });
});