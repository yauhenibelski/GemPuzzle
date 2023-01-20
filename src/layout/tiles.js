import {
  createElement, addMatrix, validTile, tilesStartPosition, interval,
} from "../helpers";
import { popup } from "./buttons/popup";
import { bestResults } from "./buttons/results";
import { stopContinueClick } from "./buttons/stop";

export function addTiles(n = 4) {
  const fieldPlay = document.querySelector('.field_of_play_container');
  const tiles = document.querySelectorAll('.tiles');

  if (tiles !== undefined) { // if not empty, then clear
    for (const i of tiles) {
      if (i.classList.contains('tiles')) {
        i.remove();
      }
    }
  }
  for (let i = 1; i <= (n * n); i++) {
    fieldPlay.append(createElement('div', 'tiles', `${i}`));
  }

  addTilesWidth(n);

  // hide last tile
  fieldPlay.lastElementChild.classList.add('hide_Last_tile');

  setTilesPosition();
}

export function setTilesPosition(tiles = addMatrix(document.querySelectorAll('.tiles'))) {
  const tileWidth = tiles[0][0].offsetWidth;

  for (let i = 0; i < tiles.length; i++) {
    for (let j = 0; j < tiles[i].length; j++) {
      tiles[i][j].style.cssText = `
                                        left: ${j * tileWidth}px;
                                        top: ${i * tileWidth}px;
                                        `;
    }
  }
}

export function clickTiles(e) {
  const tiles = document.querySelectorAll('.tiles');
  tiles.forEach((a) => a.classList.add('transition'));
  const lastTile = tiles[tiles.length - 1];
  const left = e.target.offsetLeft;
  const top = e.target.offsetTop;
  const counter = document.querySelector('.counter');

  if ((e.target.classList.contains('tiles') && e.target !== lastTile)
         && validTile().includes(e.target)) {
    e.target.style.cssText = `
                                    left: ${lastTile.offsetLeft}px;
                                    top: ${lastTile.offsetTop}px;
            `;
    lastTile.style.cssText = `
                                        left: ${left}px;
                                        top: ${top}px;
            `;

    counter.innerHTML = +counter.innerHTML + 1;
  }
  setTimeout(winGame, 250);
}

export function addTilesWidth(n) {
  const tiles = document.querySelectorAll('.tiles');
  tiles.forEach((v) => { v.classList.add(`tiles_x${n}`); });
}

export function rememberTilesPosition() {
  const props = Object.keys(tilesStartPosition);
  for (let i = 0; i < props.length; i++) {
    delete tilesStartPosition[props[i]];
  }

  const tiles = document.querySelectorAll('.tiles');
  tiles.forEach((value) => {
    const getStyle = getComputedStyle(value);
    tilesStartPosition[value.innerHTML] = `${getStyle.top}:${getStyle.left}`;
  });
}

export function winGame() {
  const tiles = document.querySelectorAll('.tiles');
  const positionTiles = {};
  let win = 0;

  tiles.forEach((value) => {
    const getStyle = getComputedStyle(value);
    positionTiles[value.innerHTML] = `${getStyle.top}:${getStyle.left}`;
  });

  for (let i = 0; i < tiles.length; i++) {
    if (Object.values(positionTiles)[i] === Object.values(tilesStartPosition)[i]) {
      win++;
    }
  }

  if (win === tiles.length) {
    const start = document.querySelector('.start');
    const stop = document.querySelector('.stop');
    const time = document.querySelector('.time');
    const counter = document.querySelector('.counter');

    bestResults();
    popup('win');
    stopContinueClick();
    clearInterval(interval.id);

    stop.innerHTML = 'Stop';
    start.innerHTML = "Start";
    time.innerHTML = '00:00';
    counter.innerHTML = '0';
  }
}
