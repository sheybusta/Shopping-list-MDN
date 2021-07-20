import { addButton } from "./addButton.js";
import { cleanAll } from "./cleanAll.js";
import { copyUrl } from "./copyUrl.js";
import { userInput } from "./userInput.js";
import { buttonControl } from "../handlers/handleControlButtons.js";

export const controlPanel = () => {
    const section = document.getElementById("control-panel");
    const formControlPanel = document.createElement("form");
    formControlPanel.id = "buttons-control"
    section.appendChild(formControlPanel);

    // append buttons and input field 

    formControlPanel.appendChild(userInput());
    formControlPanel.appendChild(addButton());
    formControlPanel.appendChild(copyUrl());
    formControlPanel.appendChild(cleanAll());

    // listener for buttons control 

    formControlPanel.addEventListener("click", buttonControl);
    return formControlPanel;
};
