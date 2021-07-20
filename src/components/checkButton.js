// import { handleCheckItem } from "../handlers/handleCheckItem.js"

export const checkButton = () => {
const button = document.createElement("button");
button.innerHTML = '<i class = "fas fa-check"></i>';
button.classList.add("checked-button");
// button.addEventListener("click", handleCheckItem);
return button;
};


