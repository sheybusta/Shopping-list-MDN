const checkButton = () => {
const button = document.createElement('button');
button.innerHTML = '<i class = "fas fa-check"></i>';
button.classList.add('checked-button');
// checkedButton.addEventListener('click', checkedItem);
return button;
};

export { checkButton };
