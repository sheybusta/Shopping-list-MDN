const userInput = () => {
const inputField = document.createElement('input');
inputField.setAttribute('type', 'text');
inputField.setAttribute('name', 'text');
inputField.id = "input-field"; 
// divInput.appendChild(inputField);
return inputField; 
};

export { userInput };