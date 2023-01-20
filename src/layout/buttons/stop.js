import { createElement, interval } from "../../helpers";
import { clickTiles } from "../tiles";
import { timeStart } from "../time";

export function addStopButton() {
  const buttons = document.querySelector('.buttons_container');
  buttons.append(createElement('div', 'stop', 'Stop'));
}

export function stopContinueClick() {
  const fieldOfPlay = document.querySelector('.field_of_play_container');
  const stop = document.querySelector('.stop');
  const start = document.querySelector('.start');

  if (stop.innerHTML === 'Continue') {
    stop.innerHTML = 'Stop';
    interval.id = setInterval(timeStart, 1000);
    fieldOfPlay.addEventListener('click', clickTiles);
    return;
  }

  if (stop.innerHTML === 'Stop' && start.innerHTML === "Restart") {
    stop.innerHTML = 'Continue';
    clearInterval(interval.id);
    fieldOfPlay.removeEventListener('click', clickTiles);
  }
}
