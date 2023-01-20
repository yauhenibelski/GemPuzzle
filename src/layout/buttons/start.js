/* eslint-disable padded-blocks */
/* eslint-disable no-unused-expressions */
import { createElement, validTile, interval } from "../../helpers";
import { clickTiles } from "../tiles";
import { timeStart } from "../time";

export function addStartButton() {
  const buttons = document.querySelector('.buttons_container');

  const start = createElement('div', 'start', 'Start');
  buttons.append(start);
}

export function shuffle(hard = 100) {
  const tiles = document.querySelectorAll('.tiles');
  tiles.forEach((a) => a.classList.remove('transition'));
  const lastTile = tiles[tiles.length - 1];

  let lastStep = tiles[tiles.length - 2].innerHTML;

  for (let i = 0, j = 0; i < hard; i++) {
    const v = validTile();

    v[j].innerHTML === lastStep ? j = 1 : j = 0;

    const l = v[j].offsetLeft;
    const t = v[j].offsetTop;

    v[j].style.cssText = `
                            left: ${lastTile.offsetLeft}px;
                            top: ${lastTile.offsetTop}px;
        `;
    lastTile.style.cssText = `
                                left: ${l}px;
                                top: ${t}px;
        `;
    lastStep = v[j].innerHTML;
  }
}

export function startRestartClick() {
  const fieldOfPlay = document.querySelector('.field_of_play_container');
  const start = document.querySelector('.start');
  const stop = document.querySelector('.stop');
  const time = document.querySelector('.time');
  const counter = document.querySelector('.counter');

  if (start.innerHTML === "Start") {
    shuffle();
    start.innerHTML = "Restart";
    fieldOfPlay.addEventListener('click', clickTiles);
    interval.id = setInterval(timeStart, 1000);

  } else if (stop.innerHTML === 'Continue') {
    fieldOfPlay.addEventListener('click', clickTiles);
    interval.id = setInterval(timeStart, 1000);
    stop.innerHTML = 'Stop';
    start.innerHTML = "Restart";
    time.innerHTML = '00:00';
    counter.innerHTML = '0';
    shuffle();

  } else {
    time.innerHTML = '00:00';
    counter.innerHTML = '0';
    shuffle();
  }
}
