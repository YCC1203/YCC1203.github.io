document.addEventListener("DOMContentLoaded", () => {
    const article = document.querySelector(".article .content");
    const tocContent = document.querySelector("#toc .toc-content");
    const toc = document.getElementById("toc");

    if (!article || !tocContent || !toc) return;

    const headings = article.querySelectorAll("h2, h3");

    if (headings.length === 0) {
        toc.style.display = "none";
        return;
    }

    const tocLinks = [];

    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = `heading-${index}`;
        }

        const link = document.createElement("a");

        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;

        if (heading.tagName === "H3") {
            link.classList.add("toc-h3");
        }

        link.addEventListener("click", (e) => {
            e.preventDefault();

            const y =
                heading.getBoundingClientRect().top +
                window.scrollY -
                80;

            window.scrollTo({
                top: y,
                behavior: "smooth"
            });
        });

        tocContent.appendChild(link);
        tocLinks.push(link);
    });

    const updateActiveToc = () => {
        let currentIndex = 0;

        headings.forEach((heading, index) => {
            const top = heading.getBoundingClientRect().top;

            if (top <= 120) {
                currentIndex = index;
            }
        });

        tocLinks.forEach((link, index) => {
            link.classList.toggle("active", index === currentIndex);
        });
    };

    window.addEventListener("scroll", updateActiveToc);

    updateActiveToc();
});