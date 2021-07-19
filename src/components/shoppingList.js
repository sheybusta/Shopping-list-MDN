export const shoppingList = ( data ) => {
    const section = document.getElementById("shopping-list");
    const listOfItems = document.createElement("ul");
    listOfItems.setAttribute("class", "list-items");
    section.appendChild(listOfItems);
      
    data.forEach (item => {
        const itemEl = document.createElement("li");
        itemEl.setAttribute("class", "item");
        itemEl.dataset.index = data.indexOf(item); 
        const itemDiv = document.createElement("div");
        itemEl.innerText = data[data.indexOf(item)].item;
        itemEl.appendChild(itemDiv);
        listOfItems.appendChild(itemEl);
    });

    // for (const item of data) {
    //  const itemEl = document.createElement("li");
    //     itemEl.setAttribute("class", "item");
    //     itemEl.dataset.index = data.indexOf(item); 
    //     itemEl.innerText = data[data.indexOf(item)].item;
    //     listOfItems.appendChild(itemEl);
    //     // console.log(state);
    // }
    

    return listOfItems;
};

