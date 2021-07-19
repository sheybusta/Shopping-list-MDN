import { state } from "../data.js"
const shoppingList = (data) => {
    const shoppingSection= document.getElementById("shopping-list");
    shoppingSection.className = "shopping-section";
    // const data = state.items
    

    return shoppingSection;
}

export { shoppingList };