const copyUrl = () => {
button = document.createElement('button');
button.setAttribute('id', 'copy-button');
button.setAttribute('class', 'copy-btn');
button.setAttribute('value', 'copy');
button.textContent = 'SAVE';
// divInput.appendChild(saveButton);
return button; 
};

export { copyUrl }; 