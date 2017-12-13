import renderNews from './renderNews';

const apiKey = 'b33018277b5a4dc298a613609d54a1ea';

const resourceIDs = {
	'BBC': 'bbc-news',
	'CNN': 'cnn',
	'Fox': 'fox-news',
	'Reuters': 'reuters',
	'Time': 'time',
};

export default function getData(/*resourceID = 'bbc-news'*/) {
let resourceID = resourceIDs[document.querySelector('.selected').innerHTML];

	let url = `https://newsapi.org/v2/everything?sources=${resourceID}&apiKey=${apiKey}`;
	let req = new Request(url);

	fetch(req, {mode: 'cors'})
	    .then( response => {
	        response.json()
	        	.then( itemsData => {
              renderNews(itemsData);
          });
	    })
	  	.catch((error) => {
    		console.warn(error);
		});
};
