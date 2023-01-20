export function createElement(element, className, value, attribute) {
  const elem = document.createElement(`${element}`);

  if (className !== '-' && className !== undefined) {
    elem.classList.add(`${className}`);
  }

  if (value !== '-' && value !== undefined) {
    elem.innerHTML += `${value}`;
  }

  if (attribute !== undefined) {
    elem.setAttribute(`${attribute[0]}`, `${attribute[1]}`);
  }
  return elem;
}

export function addMatrix(n) {
  const arr = []; let
    m = [];

  for (let i = 0, j = 0; i <= n.length; i++) {
    m.push(n[i]);
    j++;
    if (j >= Math.sqrt(n.length)) {
      arr.push(m);
      m = [];
      j = 0;
    }
  }
  return arr;
}

export function validTile() {
  const lastTile = document.querySelector('.field_of_play_container').lastElementChild;
  const tileWidth = lastTile.offsetWidth;
  const tile = [];
  const tiles = document.querySelectorAll('.tiles');

  for (const i of tiles) {
    if ((i.offsetLeft === lastTile.offsetLeft || i.offsetTop === lastTile.offsetTop)
                    && ((Math.abs(i.offsetLeft - lastTile.offsetLeft) === tileWidth
                    && Math.abs(i.offsetTop - lastTile.offsetTop) !== tileWidth)
                    || (Math.abs(i.offsetLeft - lastTile.offsetLeft) !== tileWidth
                    && Math.abs(i.offsetTop - lastTile.offsetTop) === tileWidth))) {
      tile.push(i);
    }
  }
  return tile.sort(() => Math.random() - 0.5);
}

export const interval = {
  get id() { return this.val; },
  set id(value) { this.val = value; },
};

export const menuWindowBoolean = {
  get Open() { return this.val; },
  set Open(value) { this.val = value; },
};

export const tilesStartPosition = {};

export const resultWindowBoolean = {
  get Open() { return this.val; },
  set Open(value) { this.val = value; },
};
