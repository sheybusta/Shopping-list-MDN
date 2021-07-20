// import { shoppingList } from "../components/shoppingList.js";
import { handleAddItem } from "./handleAddItem.js";
import { reRenderList } from "./handlereRender.js";
import { deleteItem } from "./handleDeleteItem.js";
// import { state } from "../data.js"

export const buttonControl = (event) => {

const action = event.target.value;
event.preventDefault();

if (action === "add") {
    handleAddItem();
    reRenderList();
    }
    
if (action === "copy-url") {
console.log("copy url");
};

if (action === 'clean') {
console.log("clean")

};

// if (action === 'delete') {
//     deleteItem();
//     // reRenderList();
// }
};

// //function to delete item from shopping list

// const deleteItem = (event) => {
//     const item = event.target;
//     if(item.classList[0] === 'delete-button') {
//     const delItem = item.parentElement;
//     delItem.remove();
//     // console.log(event);
//     } 
     
// }

// // function to checked item from shopping list 

// const checkedItem =(event) => {
//     const checked = event.target;    
//     if (checked.classList[0] === 'checked-button') {
//       const checkItem = checked.parentElement;
//       checkItem.classList.toggle('completed');
//       // console.log(event);
//     }
// }



// // 


// export {buttonControl, deleteItem, checkedItem};