document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if ((event.ctrlKey || event.metaKey) && key === "k") {
        event.preventDefault();

        const searchBar = document.getElementById("search-bar");

        if (searchBar) {
            searchBar.focus();
            searchBar.select();
            return;
        }

        window.location.href = "/archives/?focus=search";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    const focus = params.get("focus");
    const keyword = params.get("keyword");

    if (focus !== "search" && !keyword) return;

    setTimeout(() => {
        const searchBar = document.getElementById("search-bar");

        if (!searchBar) return;

        if (keyword) {
            searchBar.value = keyword;

            searchBar.dispatchEvent(
                new Event("input", {
                    bubbles: true
                })
            );
        }

        searchBar.focus();

        if (!keyword) {
            searchBar.select();
        }
    }, 200);
});