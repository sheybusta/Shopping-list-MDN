
import { addButton, sendButton, saveButton, cleanButton } from '../init/index.js'
import { buttonControl } from '../handlers/handlers.js'
// import { saveLocalItem } from '../data.js'


// Button control listeners

addButton.addEventListener('click', buttonControl);

sendButton.addEventListener('click', buttonControl);

saveButton.addEventListener('click', buttonControl);

cleanButton.addEventListener('click', buttonControl);

// Local storage 

// addButton.addEventListener('DOMContentLoaded', saveLocalItem);

// 