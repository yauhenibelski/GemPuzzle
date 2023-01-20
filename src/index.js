import "./styles/main.scss";
import { addContainers } from "./layout/containers";
import { startRestartClick } from "./layout/buttons/start";
import { stopContinueClick } from "./layout/buttons/stop";
import { openMenu, closeMenu } from "./layout/buttons/menu";
import { addTiles, rememberTilesPosition } from "./layout/tiles";
import { menuWindowBoolean, resultWindowBoolean } from "./helpers";
import { saveGame } from "./layout/buttons/save";
import { popup } from "./layout/buttons/popup";
import { openResults, closeResults } from "./layout/buttons/results";

addContainers();
rememberTilesPosition();

if (localStorage.getItem('GemPuzzlePosition') !== null) {
  popup('startSaveGame');
}
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('start')) {
    startRestartClick();
  }

  if (e.target.classList.contains('stop')) {
    stopContinueClick();
  }

  if (menuWindowBoolean.Open || e.target.classList.contains('menu')) {
    if (menuWindowBoolean.Open) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (e.target.innerHTML === 'Save') {
    saveGame();
  }

  if (e.target.getAttribute('name') === 'size') {
    const size = document.forms.size.elements.size.value;
    addTiles(size);
    rememberTilesPosition();
    startRestartClick();
  }

  if (resultWindowBoolean.Open || e.target.classList.contains('results')) {
    if (resultWindowBoolean.Open) {
      closeResults();
    } else {
      openResults();
    }
  }
});
