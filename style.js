document.addEventListener("mouseover", (event) => {
    const item = event.target.closest(".has-tooltip");
    if (!item) return;

    const tooltip = item.querySelector(".tooltip");
    if (!tooltip) return;

    tooltip.style.opacity = "1";
});

document.addEventListener("mouseout", (event) => {
    const item = event.target.closest(".has-tooltip");
    if (!item) return;

    const tooltip = item.querySelector(".tooltip");
    if (!tooltip) return;

    tooltip.style.opacity = "0";
});