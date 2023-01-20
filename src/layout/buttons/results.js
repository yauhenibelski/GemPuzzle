import { createElement, resultWindowBoolean } from "../../helpers";

export function addResultsButton() {
  const buttons = document.querySelector('.buttons_container');

  const results = createElement('div', 'results', 'Results');
  buttons.append(results);
}
export function bestResults() {
  const counter = document.querySelector('.counter');
  const timer = document.querySelector('.time');
  const sum = (+counter.innerHTML)
                                     + (+timer.innerHTML.split(':')[1])
                                     + (+timer.innerHTML.split(':')[0] * 60);
  const result = {};
  result[`${sum}`] = `${timer.innerHTML} ${counter.innerHTML}`;

  if (localStorage.getItem('Result') !== null) {
    const val = JSON.parse(localStorage.getItem('Result'));
    val[`${sum}`] = `${timer.innerHTML} ${counter.innerHTML}`;

    localStorage.Result = JSON.stringify(val);
  } else {
    localStorage.setItem('Result', JSON.stringify(result));
  }

  const numberOfResults = Object.keys(JSON.parse(localStorage.getItem('Result')));
  if (numberOfResults.length > 10) {
    const arrResult = Object.entries(JSON.parse(localStorage.getItem('Result')))
      .filter((a, b) => a[0] !== b[0])
      .sort((a, b) => a[0] > b[0]);
    arrResult.length = 10;
    localStorage.setItem('Result', JSON.stringify(Object.fromEntries(arrResult)));
  }
}

export function openResults() {
  if (!resultWindowBoolean.Open) {
    const results = JSON.parse(localStorage.getItem('Result'));

    const fieldPlayContainer = document.querySelector('.field_of_play_container');
    fieldPlayContainer.prepend(createElement('div', 'results_container'));

    const resultsContainer = document.querySelector('.results_container');

    let count = 1;

    if (localStorage.getItem('Result') !== null) {
      // eslint-disable-next-line guard-for-in
      for (const key in results) {
        const timeMoves = results[key].split(' ');
        resultsContainer.append(createElement('div', 'result', `${count}.
                                             --- Time: ${timeMoves[0]} --- Moves: ${timeMoves[1]}`));
        count++;
      }
    } else {
      resultsContainer.append(createElement('h1', '-', 'No finished games <br> =('));
    }

    count = 1;

    setTimeout(() => resultsContainer.classList.add('results_container_open'), 40);
    resultWindowBoolean.Open = true;
  }
}

export function closeResults() {
  if (resultWindowBoolean.Open) {
    const resultsContainer = document.querySelector('.results_container');

    resultsContainer.classList.remove('results_container_open');

    setTimeout(() => resultsContainer.remove(), 350);

    resultWindowBoolean.Open = false;
  }
}
