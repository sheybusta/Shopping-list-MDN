const shoppingList = () => {
    const container = document.createElement("div");
    container.className = "list-container";
    container.innerHTML = "";
    container.appendChild(controlPanel());

    return container;
}

export { shoppingList };