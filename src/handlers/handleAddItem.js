import { state } from "../data.js"
export const handleAddItem = () => {
    const input = document.getElementById("input-field");
    const item = input.value; 
    const nextItem = { item: item, done : false}
    state.items.push(nextItem);
    console.log(state);

}

