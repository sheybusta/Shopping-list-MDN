import { checkItem } from "../handlers/handleCheckItem.js"

export const checkButton = () => {
const button = document.createElement("button");
button.innerHTML = '<i class = "fas fa-check"></i>';
button.classList.add("checked-button");
button.setAttribute("value", "check");
button.addEventListener("click", checkItem);
return button;
};


