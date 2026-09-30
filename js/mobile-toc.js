document.addEventListener("DOMContentLoaded", () => {
    const desktopToc = document.querySelector("#toc .toc-content");
    const mobileToc = document.querySelector(".mobile-toc-content");

    const button = document.getElementById("mobile-toc-button");
    const closeButton = document.getElementById("mobile-toc-close");
    const overlay = document.getElementById("mobile-toc-overlay");
    const panel = document.getElementById("mobile-toc");

    if (
        !desktopToc ||
        !mobileToc ||
        !button ||
        !closeButton ||
        !overlay ||
        !panel
    ) {
        return;
    }

    function syncToc() {
        mobileToc.innerHTML = desktopToc.innerHTML;

        const links = mobileToc.querySelectorAll("a");

        links.forEach((link) => {
            link.addEventListener("click", () => {
                closeToc();
            });
        });
    }

    function openToc() {
        panel.classList.add("show");
        overlay.classList.add("show");

        document.body.style.overflow = "hidden";
    }

    function closeToc() {
        panel.classList.remove("show");
        overlay.classList.remove("show");

        document.body.style.overflow = "";
    }

    button.addEventListener("click", openToc);
    closeButton.addEventListener("click", closeToc);
    overlay.addEventListener("click", closeToc);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeToc();
        }
    });

    setTimeout(syncToc, 100);
});