import { createElement, interval, tilesStartPosition } from "../../helpers";
import { clickTiles, addTiles } from "../tiles";
import { timeStart } from "../time";
import { popup } from "./popup";

export function addSaveButton() {
  if (window.innerWidth > 380) {
    const buttons = document.querySelector('.buttons_container');
    buttons.append(createElement('div', 'save', 'Save'));
  } else {
    const menuButtonsContainer = document.querySelector('.menu_buttons_container');
    menuButtonsContainer.append(createElement('div', 'save_menu', 'Save'));
  }
}
export function saveGame() {
  const tiles = document.querySelectorAll('.tiles');
  const counter = document.querySelector('.counter');
  const timer = document.querySelector('.time');

  if (timer.innerHTML === '00:00') return;

  popup('save');

  const positionTiles = {};
  tiles.forEach((value) => {
    const getStyle = getComputedStyle(value);
    positionTiles[value.innerHTML] = `${getStyle.top}:${getStyle.left}`;
  });

  localStorage.setItem('GemPuzzlePosition', JSON.stringify(positionTiles));
  localStorage.setItem('GemPuzzleCount', counter.innerHTML);
  localStorage.setItem('GemPuzzleTimer', timer.innerHTML);
  localStorage.setItem('WinPosition', JSON.stringify(tilesStartPosition));
}

export function continueSaveGame() {
  const fieldOfPlay = document.querySelector('.field_of_play_container');
  const start = document.querySelector('.start');
  const time = document.querySelector('.time');
  const counter = document.querySelector('.counter');
  let frameSize = Object.values(JSON.parse(localStorage.getItem('GemPuzzlePosition')));

  addTiles(Math.sqrt(frameSize.length));

  const tiles = document.querySelectorAll('.tiles');

  frameSize = frameSize.map((a) => a.split(':'));

  for (let i = 0; i < tiles.length; i++) {
    tiles[i].style.cssText = `
                            left: ${frameSize[i][1]};
                             top: ${frameSize[i][0]};`;
  }

  time.innerHTML = localStorage.getItem('GemPuzzleTimer');
  counter.innerHTML = localStorage.getItem('GemPuzzleCount');
  start.innerHTML = "Restart";

  const winPositionTiles = JSON.parse(localStorage.getItem('WinPosition'));
  // eslint-disable-next-line guard-for-in
  for (const key in winPositionTiles) {
    tilesStartPosition[key] = winPositionTiles[key];
  }

  fieldOfPlay.addEventListener('click', clickTiles);
  interval.id = setInterval(timeStart, 1000);
}
