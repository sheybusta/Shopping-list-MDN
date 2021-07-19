const copyUrl = () => {
const button = document.createElement('button');
button.setAttribute('id', 'copy-button');
button.setAttribute('class', 'copy-btn');
button.setAttribute('value', 'copy-url');
button.textContent = 'COPY-URL';
// divInput.appendChild(saveButton);
return button; 
};

export { copyUrl }; 