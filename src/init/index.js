import {controlPanel} from "../components/controlPanel.js"
import { sortList } from "../components/sortList.js"
// take body and append control panel section 
const body = document.querySelector("body");
const controlPanelEl = document.createElement("section");
controlPanelEl.id = "control-panel";
body.appendChild(controlPanelEl);
controlPanelEl.appendChild(controlPanel());


// take body and append shopping list section

const shoppingListEl = document.createElement("section");
shoppingListEl.id = "shopping-list";
body.appendChild(shoppingListEl);

document.getElementById("input-field").select(); 
// shoppingListEl.appendChild(shoppingList(state.items));

// create a container for modal box

const modalBox = document.createElement("div"); 
modalBox.id = "modal-box";
body.appendChild(modalBox);
modalBox.appendChild(sortList());



