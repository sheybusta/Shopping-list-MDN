const deleteButton = () => {

const button =  document.createElement('button');
button.innerHTML = '<i class = "fas fa-trash"></i>';
button.classList.add('delete-button');
// button.addEventListener('click', deleteItem);
return button; 
};

export { deleteButton };