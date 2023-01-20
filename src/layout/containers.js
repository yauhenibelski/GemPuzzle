import { createElement } from "../helpers";
import { addStartButton } from "./buttons/start";
import { addStopButton } from "./buttons/stop";
import { addMenuButton, addMenu} from "./buttons/menu";
import { addSaveButton } from "./buttons/save";
import { addResultsButton } from "./buttons/results";
import { addTiles } from "./tiles";
import { addMuteButton } from "./buttons/mute";

export function addContainers(){
/**************** Container ****************/
    const root =  createElement('div', 'container');
        document.body.prepend( root );


/**************** Time | Name | Counter Container ****************/
    const timeAndCounter = createElement('div', 'time_and_counter_container');
        root.append(timeAndCounter);

        const counter = createElement('div', 'counter', '0');
            timeAndCounter.append(counter);

        const nameGame = createElement('h1','-','Gem Puzzle');
            timeAndCounter.append(nameGame);

        const time = createElement('div','time','00:00');
            timeAndCounter.append(time);


/**************** Buttons Container ****************/
    const buttons = createElement('div','buttons_container');
        root.append(buttons);
        addStartButton();
        addStopButton();

        if(window.innerWidth > 380){
            addMenuButton();
            addResultsButton();
        }else{
            addResultsButton();
            addMenuButton();
        }

/**************** Field of play Container' ****************/
    const fieldOfPlay= createElement('div', 'field_of_play_container');
        root.append(fieldOfPlay);
    addMenu();
    addTiles();

/**************** Menu  Buttons Container ****************/
const menuContainer = document.querySelector('.menu_container');
        menuContainer.append(createElement('div','menu_buttons_container'))
    addMuteButton();
    addSaveButton();
};