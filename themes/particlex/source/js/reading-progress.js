document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("reading-progress");

    if (!progressBar) return;

    const updateProgress = () => {
        const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

        progressBar.style.width = `${progress}%`;
    };

    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);

    updateProgress();
});