const inputField = () => {
const userInput = document.createElement('input');
userInput.setAttribute('type', 'text');
userInput.setAttribute('name', 'text');
userInput.setAttribute('id', 'input-field')
// divInput.appendChild(inputField);
return userInput; 
};

export { inputField };