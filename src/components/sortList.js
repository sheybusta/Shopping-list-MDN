import { handleModalHide } from "../handlers/handleModalHide.js";

const sort = [ 
'Unmark items', 'a-z', 'z-a'
]

export const  sortList = () => {
    const div = document.createElement("div");
    div.classList = "modal-content";
    const button = document.createElement("button");
    button.addEventListener("click", handleModalHide);
    button.classList = "close";
    button.innerText = "close";
    div.appendChild(button);
    // create ul 
    // loop to get li from sort 
    const ul = document.createElement("ul");
    div.appendChild(ul);


    for (let i = 0; i<sort.length; i++) {
        const li = document.createElement("li");    
        li.setAttribute("value", sort[i]);
        li.innerText = sort[i];

        ul.appendChild(li);
    }

    return div;
}; 

    // data.forEach (item => { //data is parameter => state.items
    //     const itemEl = document.createElement("li");
    //     itemEl.setAttribute("class", "item");
    //     itemEl.id = "item-li";
    //     const itemDiv = document.createElement("div");
    //     itemDiv.dataset.index = data.indexOf(item);
    //     itemDiv.innerText = data[data.indexOf(item)].item;
    //     itemEl.appendChild(itemDiv);
    //     itemDiv.appendChild(deleteButton());
    //     itemDiv.appendChild(checkButton());
    //     listOfItems.appendChild(itemEl);

    //     if(item.done === true) {
    //         itemEl.classList.add('completed');
    //     } else {
    //         itemEl.classList.remove('completed')
    //     }
    // });

    