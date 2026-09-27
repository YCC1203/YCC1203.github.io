document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("back-to-top");

    if (!button) return;

    const toggleButton = () => {
        if (window.scrollY > 400) {
            button.classList.add("show");
        } else {
            button.classList.remove("show");
        }
    };

    button.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", toggleButton);

    toggleButton();
});