import { state } from "../data.js"
export const deleteItem = (e) =>  {

    console.log('i work');

    const targetToDelete = e.target.parentElement;

    if ( targetToDelete.nodeName === "BUTTON") {
        targetToDelete.getAttribute(data-index).remove();

    }
    
    console.log(targetToDelete);
// delete in state

// render result 
// console.log()
}