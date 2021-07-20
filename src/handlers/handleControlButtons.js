// import { shoppingList } from "../components/shoppingList.js";
import {  handleCopyUrl } from "../handlers/handleCopyUrl.js";
import { handleAddItem } from "./handleAddItem.js";
import { reRenderList } from "./handlereRender.js";
// import { state } from "../data.js"

export const buttonControl = (event) => {

const action = event.target.value;
event.preventDefault();

// const itemButtons = event.target.value;
// if ( itemButtons === "delete" && itemButtons === "check") {
// reRenderList();
// }

if (action === "add") {
    handleAddItem();
    reRenderList();
    }
    
if (action === "copy-url") {
    debugger;
    handleCopyUrl();
    console.log("copy url");
};

if (action === 'clean') {
console.log("clean")
};

};

