import "./styles/main.scss";
import { addContainers } from "./layout/containers";
import { startRestartClick} from "./layout/buttons/start";
import { stopContinueClick } from "./layout/buttons/stop";
import { openMenu, closeMenu } from "./layout/buttons/menu";
import { addTiles, rememberTilesPosition } from "./layout/tiles";
import { if_menu, if_result} from "./helpers";
import { saveGame } from "./layout/buttons/save";
import { popup } from "./layout/buttons/popup";
import { openResults, closeResults } from "./layout/buttons/results";



addContainers();
rememberTilesPosition();

if(localStorage.getItem('GemPuzzlePosition') != undefined){
   popup('startSaveGame');
}

const container = document.querySelector('.container');
container.addEventListener('click',(e)=>{

   if(e.target.classList.contains('start')){
      startRestartClick();
   };

   if(e.target.classList.contains('stop')){
      stopContinueClick();
   }


   if(if_menu.Open || e.target.classList.contains('menu')){
      if(if_menu.Open){
         closeMenu();
      }else{
         openMenu();
      }
   };

   if(e.target.innerHTML == 'Save'){
      saveGame();
   }

   if(e.target.getAttribute('name') === 'size'){
      let size = document.forms.size.elements['size'].value;
       addTiles(size);
       rememberTilesPosition();
       startRestartClick();
   }

   if(if_result.Open || e.target.classList.contains('results')){
      if(if_result.Open){
         closeResults();
      }else{
         openResults();
      }
   }
});


