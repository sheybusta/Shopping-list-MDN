import { addButton } from "./addButton.js";
import { cleanAll } from "./cleanAll.js";
import { copyUrl } from "./copyUrl.js";
import { userInput } from "./userInput.js";
import { buttonControl } from "../handlers/handleButtonControl.js";

const controlPanel = () => {
    const section = document.getElementById("control-panel");
    const div = document.createElement("div");
    section.appendChild(div);
    // section.className = "section-control";
    console.log(section);
    //append all buttons and input field 
    section.appendChild(userInput());
    section.appendChild(addButton());
    section.appendChild(copyUrl());
    section.appendChild(cleanAll());
    // // listener for buttons control 
    section.addEventListener("click", buttonControl);
    return div;
};

export { controlPanel };