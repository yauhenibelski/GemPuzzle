import { createElement, if_result } from "../../helpers";


export function addResultsButton(){
    let buttons = document.querySelector('.buttons_container',);

    const results = createElement('div','results','Results');
         buttons.append(results);

}
export function bestResults() {

    const counter = document.querySelector('.counter');
    const timer = document.querySelector('.time');
    let sum = (+counter.innerHTML) +
                                     (+timer.innerHTML.split(':')[1]) +
                                     (+timer.innerHTML.split(':')[0] * 60);
    let result = {};
       result[`${sum}`] = `${timer.innerHTML} ${counter.innerHTML}`;

    if(localStorage.getItem('Result') != undefined){

       let val = JSON.parse(localStorage.getItem('Result'));
       val[`${sum}`] = `${timer.innerHTML} ${counter.innerHTML}`;

       localStorage.Result = JSON.stringify(val);

    }else{
       localStorage.setItem('Result',JSON.stringify(result));
    };


    let numberOfResults = Object.keys(JSON.parse(localStorage.getItem('Result')));
    if(numberOfResults.length > 10){
       let arrResult = Object.entries(JSON.parse(localStorage.getItem('Result')))
                     .filter(( a, b) => a[0] != b[0])
                     .sort((a,b)=>{a[0] > b[0]});
         arrResult.length = 10;

       localStorage.setItem('Result',JSON.stringify(Object.fromEntries(arrResult)));
    }
}

export function openResults() {

   if(!if_result.Open){
      let results = JSON.parse(localStorage.getItem('Result'))

      let fieldPlayContainer = document.querySelector('.field_of_play_container');
         fieldPlayContainer.prepend(createElement('div','results_container'));

      let results_container = document.querySelector('.results_container');

      let count = 1;

      if(localStorage.getItem('Result') != undefined){

         for(let key in results){
            let timeMoves = results[key].split(' ');
            results_container.append(createElement('div','result',`${count}.
                                             --- Time: ${timeMoves[0]} --- Moves: ${timeMoves[1]}`));
            count++;
         }
      }else{
         results_container.append(createElement('h1','-','No finished games <br> =('))
      }

      count = 1;

      setTimeout(()=>results_container.classList.add('results_container_open'),40);
      if_result.Open = true;
   }
}

export function closeResults(){
   if(if_result.Open){
      let results_container = document.querySelector('.results_container');

      results_container.classList.remove('results_container_open');

      setTimeout(()=>results_container.remove(),350);

      if_result.Open = false;
   }
}


