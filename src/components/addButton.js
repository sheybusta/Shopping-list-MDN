const addButton = () => {

const button = document.createElement("button");
button.setAttribute("id", "add-button");
button.setAttribute("class", "add-btn");
button.setAttribute("value", "add");
button.textContent = "ADD";

return button;
};

export { addButton };