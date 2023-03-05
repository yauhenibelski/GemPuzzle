import { createElement } from "../../helpers";

export function addMuteButton() {
  const muteButtonsContainer = document.querySelector('.menu_buttons_container');
  muteButtonsContainer.append(createElement('div', 'mute', 'Mute : ON'));

  const muteButton = document.querySelector('.mute');
  muteButton.onclick = () => {
    muteButton.innerHTML === 'Mute : ON' ?  muteButton.innerHTML = 'Mute : OFF'
      :  muteButton.innerHTML = 'Mute : ON';
  };

  document.body.append(createElement('audio'));

  const audio = document.querySelector('audio');
  audio.src = './audio/click.mp3';
}

export function mute() {
  const audio = document.querySelector('audio');
  const muteButton = document.querySelector('.mute');

  if (muteButton.innerHTML === 'Mute : ON' ) {
    audio.play();
  }
}
