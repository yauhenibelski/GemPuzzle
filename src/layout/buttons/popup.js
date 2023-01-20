import { createElement } from "../../helpers";
import { continueSaveGame } from "./save";

export function popup(value) {
  /* ----- startSaveGame, win, save, results -------- */
  const root = document.querySelector('.container');
  root.prepend(createElement('div', 'popup_container'));

  const popupContainer = document.querySelector('.popup_container');

  const popupOpen = () => {
    popupContainer.classList.add('popup_open');
    // stopContinueClick();
  };
  const popupClose = () => {
    popupContainer.classList.remove('popup_open');

    setTimeout(() => popupContainer.remove(), 350);
  };

  if (value === 'startSaveGame') {
    popupContainer.append(createElement('h2', '-', 'Continue saved game?'));
    popupContainer.append(createElement('div', 'yes_button', 'Yes'));
    popupContainer.append(createElement('div', 'no_button', 'No'));

    setTimeout(popupOpen, 40);

    popupContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('yes_button')) {
        continueSaveGame();
        popupClose();
        cleanLocalStorage();
      }
      if (e.target.classList.contains('no_button')) {
        popupClose();
        cleanLocalStorage();
      }
    });
  }

  if (value === 'win') {
    popupContainer.append(createElement('h2', 'win'));

    setTimeout(popupOpen, 40);

    const win = document.querySelector('.win');
    const timer = document.querySelector('.time').innerHTML;
    const counter = document.querySelector('.counter').innerHTML;

    win.innerHTML = `Hooray! <br> You solved the <br> puzzle in <br> ${timer} and ${counter} moves!`;
    setTimeout(() => win.classList.add('win_open'), 10);

    popupContainer.addEventListener('click', popupClose);
  }

  if (value === 'save') {
    popupContainer.append(createElement('h2', '_', 'Game saved'));
    setTimeout(popupOpen, 40);
    setTimeout(popupClose, 700);
  }
}
function cleanLocalStorage() {
  localStorage.removeItem('GemPuzzlePosition');
  localStorage.removeItem('GemPuzzleCount');
  localStorage.removeItem('GemPuzzleTimer');
  localStorage.removeItem('WinPosition');
}
