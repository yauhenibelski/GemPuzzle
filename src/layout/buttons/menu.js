import { createElement,if_menu } from "../../helpers";



export function addMenuButton(){
    let buttons = document.querySelector('.buttons_container');
            buttons.append(createElement('div','menu'));
}

export function addMenu(){
    const fieldOfPlay = document.querySelector('.field_of_play_container');
        fieldOfPlay.prepend(createElement('div','menu_container'));

    const menu = document.querySelector('.menu_container');
        menu.append(createElement('form', 'form_size','-',['id', 'size']));

    const sizeContainer = document.querySelector('#size');

    //CreateElementsSize
    for(let i = 3; i <= 8; i++){
        let labelElement = createElement('label', 'size', `${i}x${i}`,['for',`s${i}`]);
            labelElement.setAttribute('name','size');

        let radioElement = createElement('input', 'radio_size', '-', ['type','radio']);
            radioElement.setAttribute('name','size');
            radioElement.setAttribute('id',`s${i}`);
            radioElement.value = ''+i;

        if(i === 4){
            radioElement.checked = true;
        }
        sizeContainer.append(radioElement);
        sizeContainer.append(labelElement);
    }
}
export function openMenu(){
    const menu = document.querySelector('.menu_container');
    menu.classList.add('menu_open');
    if_menu.Open = true;
}

export function closeMenu(){
    if_menu.Open = false;
    const menu = document.querySelector('.menu_container');
    if(menu.classList.contains('menu_open'));
    menu.classList.remove('menu_open');
}