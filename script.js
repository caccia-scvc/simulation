document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.addEventListener("click", () => {
            alert(`You clicked on ${item.textContent}`);
        });
    });
});
