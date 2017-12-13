import getData from './getData'; /* redundant */
import changeNews from './changeNews';

document.querySelectorAll('.resource').forEach( (i) => i.addEventListener("click", changeNews) );

const button = document.querySelector('.show-news');

/* redundant */
button.addEventListener("click", getData);

/*
button.addEventListener("click", () => {
  import(*//* webpackChunkName: "getData" */ /* webpackMode: "lazy" */ /*'./getData').then(module => {
    const render = module.default;
    render();
  });
});
*/
