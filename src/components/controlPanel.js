import { addButton } from "./addButton.js";
import { cleanAll } from "./cleanAll.js";
import { copyUrl } from "./copyUrl.js";
import { userInput } from "./userInput.js";
import { buttonControl } from "../handlers/handleButtonControl.js";

const controlPanel = () => {
    const section = document.getElementById("control-panel");
    const divControlPanel = document.createElement("div");
    divControlPanel.id = "buttons-control"
    section.appendChild(divControlPanel);

    // append buttons and input field 

    divControlPanel.appendChild(userInput());
    divControlPanel.appendChild(addButton());
    divControlPanel.appendChild(copyUrl());
    divControlPanel.appendChild(cleanAll());

    // listener for buttons control 

    divControlPanel.addEventListener("click", buttonControl);
    return divControlPanel;
};

export { controlPanel };