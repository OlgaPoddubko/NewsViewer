import getData from './getData';

const resourceIDs = {
	'BBC': 'bbc-news',
	'CNN': 'cnn',
	'Fox': 'fox-news',
	'Reuters': 'reuters',
	'Time': 'time',
};

function changeAppearance(elem) {
    let formerSelected = document.querySelector('.selected');
    if (formerSelected) {
        formerSelected.classList.remove('selected');
        document.querySelector('.content').innerHTML = ``;
    }
    document.querySelector('.current-resource').innerHTML = `${elem.innerHTML} news:`;
    elem.classList.add('selected');
}

export default function changeNews(e) {
  changeAppearance(e.target);
  getData(resourceIDs[e.target.innerHTML]);
}
