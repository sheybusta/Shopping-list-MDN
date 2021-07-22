import { state } from "../data.js"
import { reRenderList } from "./handlereRender.js";

export const checkItem = (e) => {
    // debugger;
    const targetCheck = e.currentTarget.parentElement; 
    // console.log(e.currentTarget.parentElement);
    const checkData = targetCheck.dataset.index; // add index to element
    state.items[checkData].done = !state.items[checkData].done;
    targetCheck.classList.add('completed');
    reRenderList(); 
    // console.log(state);
};
