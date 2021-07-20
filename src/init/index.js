import {controlPanel} from "../components/controlPanel.js"
// import { shoppingList } from "../components/shoppingList.js";
// import { state } from "../data.js"

const body = document.querySelector("body");
const controlPanelEl = document.createElement("section");
controlPanelEl.id = "control-panel";
body.appendChild(controlPanelEl);
controlPanelEl.appendChild(controlPanel());
document.getElementById("input-field").select(); 

const shoppingListEl = document.createElement("section");
shoppingListEl.id = "shopping-list";
body.appendChild(shoppingListEl);
// shoppingListEl.appendChild(shoppingList(state.items));



