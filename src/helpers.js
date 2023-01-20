export function createElement (element, className, value, attribute){
            let elem = document.createElement(`${element}`);

            if(className != '-' && className != undefined){
                elem.classList.add(`${className}`)
            }

            if(value != '-' && value != undefined){
                elem.innerHTML += `${value}`;
            }

            if(attribute != undefined){
                elem.setAttribute(`${attribute[0]}`,`${attribute[1]}`)
            }
            return elem;
    };

export function addMatrix (n){
            let arr = [], m = [];

            for(let i = 0, j = 0; i <= n.length; i++){
                m.push(n[i]);
                j++;
                if(j >= Math.sqrt(n.length)){
                    arr.push(m);
                    m = [];
                    j = 0;
                }
            }
            return arr;
        };

export function validTile(){
            let lastTile = document.querySelector('.field_of_play_container').lastElementChild;
            let tileWidth = lastTile.offsetWidth;
            let validTile =[];
            let tiles = document.querySelectorAll('.tiles');

            for(let i of tiles){
                if((i.offsetLeft === lastTile.offsetLeft || i.offsetTop === lastTile.offsetTop)&&
                    ((Math.abs(i.offsetLeft - lastTile.offsetLeft) === tileWidth &&
                    Math.abs(i.offsetTop - lastTile.offsetTop) != tileWidth) ||
                        (Math.abs(i.offsetLeft - lastTile.offsetLeft) != tileWidth &&
                        Math.abs(i.offsetTop - lastTile.offsetTop) === tileWidth))){

                    validTile.push(i)
                }
            }
        return validTile.sort(() => Math.random() - 0.5);
        };

export const interval = {
    get id(){return this._id},
    set id(value){ this._id = value}
};

export const if_menu = {
    get Open(){return this._id},
    set Open(value){ this._id = value}
};

export const tilesStartPosition = {};

export const if_result = {
        id: false,
    get Open(){return this._id},
    set Open(value){ this._id = value}
};
