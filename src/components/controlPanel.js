import { addButton } from "./addButton.js";
import { cleanAll } from "./cleanAll.js";
import { copyUrl } from "./copyUrl.js";
import { userInput } from "./userInput.js";

const controlPanel = () => {
    const section = document.createElement("section");
    section.className = "control-panel";
    //append all buttons and input field 
    section.appendChild(userInput());
    section.appendChild(addButton());
    section.appendChild(copyUrl());
    section.appendChild(cleanAll());
    
    return section;
//     export const home = () => {
//   const container = document.createElement('div');
//   container.className = 'body';

//   container.appendChild(instructions());

//   container.appendChild(numberOfQu());

//   container.appendChild(startQuizButton());

//   return container;
// };
};

export { controlPanel };