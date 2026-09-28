document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("theme-toggle");

    if (!button) return;

    const icon = button.querySelector("i");

    if (!icon) return;

    const savedTheme = localStorage.getItem("theme");

    // 進入頁面時同步 body 的深色模式
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark-mode");
        document.body.classList.add("dark-mode");

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }

    // 點擊切換深色 / 淺色
    button.addEventListener("click", () => {
        const isDark =
            document.documentElement.classList.toggle("dark-mode");

        document.body.classList.toggle("dark-mode", isDark);

        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );

        icon.classList.toggle("fa-moon", !isDark);
        icon.classList.toggle("fa-sun", isDark);
    });
});