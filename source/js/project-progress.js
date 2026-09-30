document.addEventListener("DOMContentLoaded", () => {
    const progressBlocks = document.querySelectorAll(".project-progress");

    progressBlocks.forEach((progress) => {
        const value = Math.min(
            100,
            Math.max(0, Number(progress.dataset.progress) || 0)
        );

        const bar = progress.querySelector(".project-progress-bar");
        const text = progress.nextElementSibling;

        if (bar) {
            bar.style.width = `${value}%`;
        }

        if (
            text &&
            text.classList.contains("project-progress-text")
        ) {
            text.textContent = `目前進度：${value}%`;
        }
    });
});