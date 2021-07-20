import { state } from "../data.js"
import { reRenderList } from "./handlereRender.js";
export const deleteItem = (e) =>  {
    const targetToDelete = e.currentTarget.parentElement;
    // console.log(targetToDelete);
   const indexData = targetToDelete.dataset.index; 
//    console.log(deleteData);
   state.items.splice(indexData,1);
   reRenderList();
   console.log(state);
   
};