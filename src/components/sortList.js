export const  sortList = () => {
    const sortEl = document.createElement("div");
    sortEl.id  = "sort-list";
    sortEl.classList = "sort-content";
    const title = document.createElement("h1");
    title.classList = "hidden";
    title.innerText = "hello!";
    sortEl.appendChild(title);

    // sortEl.classList = "sort";
    return sortEl;
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
