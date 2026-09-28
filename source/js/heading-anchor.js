document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll(
        ".article .content h2[id], .article .content h3[id]"
    );

    headings.forEach((heading) => {
        if (heading.querySelector(".heading-anchor")) return;

        const anchor = document.createElement("button");
        anchor.className = "heading-anchor";
        anchor.setAttribute("aria-label", "複製章節連結");

        anchor.innerHTML = `
            <i class="fa-solid fa-link"></i>
        `;

        anchor.addEventListener("click", async () => {
            const url =
                window.location.origin +
                window.location.pathname +
                "#" +
                heading.id;

            history.replaceState(null, "", "#" + heading.id);

            try {
                await navigator.clipboard.writeText(url);

                anchor.innerHTML = `
                    <i class="fa-solid fa-check"></i>
                `;

                anchor.classList.add("copied");

                setTimeout(() => {
                    anchor.innerHTML = `
                        <i class="fa-solid fa-link"></i>
                    `;

                    anchor.classList.remove("copied");
                }, 1500);
            } catch (error) {
                console.error("複製章節連結失敗", error);
            }
        });

        heading.appendChild(anchor);
    });
});