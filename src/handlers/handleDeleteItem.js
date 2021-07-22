import { state } from "../data.js"
import { reRenderList } from "./handlereRender.js";
export const deleteItem = (e) =>  {
   const targetToDelete = e.currentTarget.parentElement;
   const indexData = targetToDelete.dataset.index; 
   state.items.splice(indexData,1);
   reRenderList();
};
