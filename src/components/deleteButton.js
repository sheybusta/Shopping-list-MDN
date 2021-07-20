import { deleteItem } from "../handlers/handleDeleteItem.js";
export const deleteButton = () => {

const button =  document.createElement("button");
button.innerHTML = '<i class = "fas fa-trash"></i>';
button.classList.add("delete-button");
button.setAttribute("value","delete");
button.addEventListener('click', deleteItem);
return button; 
};
