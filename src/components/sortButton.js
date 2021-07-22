export const sortButton = () => {
    const button = document.createElement("button");
    button.id = "sort-btn";
    button.setAttribute("value", "sort");
    button.textContent = "SORT";
    return button;
};
