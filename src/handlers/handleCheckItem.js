import { state } from "../data.js"
import { reRenderList } from "./handlereRender.js";

export const checkItem = (e) => {
    //current target
    debugger;
    const targetCheck = e.currentTarget.parentElement;
    const checkData = targetCheck.dataset.index;
    state.items[checkData].done = true;
    reRenderList();
    // console.log(state);
};


