const cleanAll = () => {

const cleanButton = document.createElement('button');
cleanButton.setAttribute('id', 'clean-button');
cleanButton.setAttribute('class', 'clean-btn');
cleanButton.setAttribute('value', 'clean');
cleanButton.textContent = 'CLEAN';
// divInput.appendChild(cleanButton);
return cleanButton; 
};

export { cleanAll }; 