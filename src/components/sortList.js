import { handleModalHide } from "../handlers/handleModalHide.js";

export const  sortList = () => {
    const div = document.createElement("div");
    div.classList = "modal-content";
    const titlee = document.createElement("h1"); // delete in future
    titlee.innerText = "hello!"; // delete future
    div.appendChild(titlee); // delete future
    const button = document.createElement("button");
    button.addEventListener("click", handleModalHide);
    button.classList = "close";
    button.innerText = "close";
    div.appendChild(button);
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

    