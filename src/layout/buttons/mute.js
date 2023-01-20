import { createElement } from "../../helpers";
export function addMuteButton(){
   const menuButtonsContainer = document.querySelector('.menu_buttons_container');
        menuButtonsContainer.append(createElement('div','mute', 'Mute : ON'));
}

