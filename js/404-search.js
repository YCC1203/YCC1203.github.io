document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("error-search-form");
    const input = document.getElementById("error-search-input");

    if (!form || !input) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const keyword = input.value.trim();

        if (!keyword) {
            input.focus();
            return;
        }

        window.location.href =
            `/archives/?focus=search&keyword=${encodeURIComponent(keyword)}`;
    });
});