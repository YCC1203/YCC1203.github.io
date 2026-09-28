document.addEventListener("DOMContentLoaded", () => {
    const codeBlocks = document.querySelectorAll("pre");

    codeBlocks.forEach((pre) => {
        if (pre.querySelector(".copy-code-button")) return;

        const code = pre.querySelector("code") || pre;

        /* =========================
           複製按鈕
        ========================= */

        const copyButton = document.createElement("button");
        copyButton.className = "copy-code-button";

        copyButton.innerHTML = `
            <i class="fa-regular fa-copy"></i>
            <span>複製</span>
        `;

        copyButton.addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(code.innerText);

                copyButton.innerHTML = `
                    <i class="fa-solid fa-check"></i>
                    <span>已複製</span>
                `;

                copyButton.classList.add("copied");

                setTimeout(() => {
                    copyButton.innerHTML = `
                        <i class="fa-regular fa-copy"></i>
                        <span>複製</span>
                    `;

                    copyButton.classList.remove("copied");
                }, 1500);

            } catch (error) {
                copyButton.innerHTML = `
                    <i class="fa-solid fa-xmark"></i>
                    <span>失敗</span>
                `;

                setTimeout(() => {
                    copyButton.innerHTML = `
                        <i class="fa-regular fa-copy"></i>
                        <span>複製</span>
                    `;
                }, 1500);
            }
        });

        pre.appendChild(copyButton);


        /* =========================
           程式碼展開 / 收合
        ========================= */

        const lineCount = code.innerText
            .replace(/\n$/, "")
            .split("\n")
            .length;

        if (lineCount > 20) {
            pre.classList.add("code-collapsed");

            const expandButton = document.createElement("button");
            expandButton.className = "code-expand-button";

            expandButton.innerHTML = `
                <i class="fa-solid fa-chevron-down"></i>
                <span>展開完整程式碼</span>
            `;

            expandButton.addEventListener("click", () => {
                const isExpanded =
                    pre.classList.toggle("code-expanded");

                if (isExpanded) {
                    expandButton.innerHTML = `
                        <i class="fa-solid fa-chevron-up"></i>
                        <span>收合程式碼</span>
                    `;
                } else {
                    expandButton.innerHTML = `
                        <i class="fa-solid fa-chevron-down"></i>
                        <span>展開完整程式碼</span>
                    `;
                }
            });

            pre.insertAdjacentElement("afterend", expandButton);
        }
    });
});