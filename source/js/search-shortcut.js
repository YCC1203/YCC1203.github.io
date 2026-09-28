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

    if (params.get("focus") !== "search") return;

    const focusSearch = () => {
        const searchBar = document.getElementById("search-bar");

        if (searchBar) {
            searchBar.focus();
            searchBar.select();
        }
    };

    setTimeout(focusSearch, 200);
});