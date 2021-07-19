export const userInput = () => {
const divUserInput = document.createElement("div");
const inputField = document.createElement("input");
inputField.setAttribute("type", "text");
inputField.setAttribute("name", "text");
inputField.id = "input-field"; 
divUserInput.appendChild(inputField);

return divUserInput; 
};
