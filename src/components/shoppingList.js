import { deleteButton } from "./deleteButton.js";
import { checkButton } from "./checkButton.js";

export const shoppingList = ( data ) => {
    const section = document.getElementById("shopping-list");
    const listOfItems = document.createElement("ul");
    listOfItems.setAttribute("class", "list-items");
    section.appendChild(listOfItems);
      
    data.forEach (item => { //data is parameter => state.items
        const itemEl = document.createElement("li");
        itemEl.setAttribute("class", "item");
        itemEl.id = "item-li";
        const itemDiv = document.createElement("div");
        itemDiv.dataset.index = data.indexOf(item);
        itemDiv.innerText = data[data.indexOf(item)].item;
        itemEl.appendChild(itemDiv);
        itemDiv.appendChild(deleteButton());
        itemDiv.appendChild(checkButton());
        listOfItems.appendChild(itemEl);

        if(item.done === true) {
            itemEl.classList.add('completed');
        } else {
            itemEl.classList.remove('completed')
        }
    });
    return listOfItems;
};

// LOOP FOR 

    // for (const item of data) {
    //  const itemEl = document.createElement("li");
    //     itemEl.setAttribute("class", "item");
    //     itemEl.dataset.index = data.indexOf(item); 
    //     itemEl.innerText = data[data.indexOf(item)].item;
    //     listOfItems.appendChild(itemEl);
    //     // console.log(state);
    // }
    
