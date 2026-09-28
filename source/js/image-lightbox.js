document.addEventListener("DOMContentLoaded", () => {
    const articleImages = document.querySelectorAll(
        ".article-content img"
    );

    if (articleImages.length === 0) return;

    const overlay = document.createElement("div");
    overlay.className = "image-lightbox";

    const image = document.createElement("img");
    image.className = "image-lightbox-img";

    const closeButton = document.createElement("button");
    closeButton.className = "image-lightbox-close";
    closeButton.innerHTML = "&times;";

    overlay.appendChild(image);
    overlay.appendChild(closeButton);
    document.body.appendChild(overlay);

    articleImages.forEach((img) => {
        img.classList.add("zoomable-image");

        img.addEventListener("click", () => {
            image.src = img.src;
            image.alt = img.alt || "";

            overlay.classList.add("show");
            document.body.style.overflow = "hidden";
        });
    });

    function closeLightbox() {
        overlay.classList.remove("show");
        document.body.style.overflow = "";
    }

    overlay.addEventListener("click", (event) => {
        if (
            event.target === overlay ||
            event.target === closeButton
        ) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });
});