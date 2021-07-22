// import { shoppingList } from "../components/shoppingList.js";
import {  handleCopyUrl } from "../handlers/handleCopyUrl.js";
import { handleAddItem } from "./handleAddItem.js";
import { reRenderList } from "./handlereRender.js";
import { handleSortBox } from "./handleSortBox.js";
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
    handleCopyUrl();
    console.log("copy url");
};

if (action === "clean") {
console.log("clean");
};

if (action === "sort") {
    handleSortBox();
console.log("sort works");

}

};

