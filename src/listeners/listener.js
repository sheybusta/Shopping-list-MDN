
import { addButton, sendButton, saveButton, cleanButton } from '../init/index.js'
import { buttonControl } from '../handlers/handlers.js'
// import { deleteItem } from '../handlers/handlers.js'

addButton.addEventListener('click', buttonControl);


// const buttonAdd = document.createElement('button');

sendButton.addEventListener('click', buttonControl);

saveButton.addEventListener('click', buttonControl);

cleanButton.addEventListener('click', buttonControl);
