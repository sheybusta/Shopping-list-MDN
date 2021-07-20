    import { shoppingList  } from "../components/shoppingList.js";
    import { state } from "../data.js"
    
    export const reRenderList = () => {
    const list = document.getElementById("shopping-list");
    list.innerHTML = "";
    shoppingList(state.items);
    // console.log(state);
};
    
