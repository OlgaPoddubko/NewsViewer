import renderNews from './renderNews';

const apiKey = 'b33018277b5a4dc298a613609d54a1ea';

const resourceIDs = {
    'BBC': 'bbc-news',
    'CNN': 'cnn',
    'Fox': 'fox-news',
    'Reuters': 'reuters',
    'Time': 'time',
};

let newsCache = {};

function cleanCacheItem(resID) {
    newsCache[resID] = '';
    console.log('deleted ' + '\'' + resID + '\'');
}

function getOriginalData(resourceID) {

    let url = `https://newsapi.org/v2/everything?sources=${resourceID}&apiKey=${apiKey}`;
    let req = new Request(url);
    fetch(req, {
            mode: 'cors'
        })
        .then(response => {
            response.json()
                .then(itemsData => {
                    newsCache[resourceID] = itemsData;
                    renderNews(itemsData);
                    console.log('primary rendering');
                });
        })
        .catch((error) => {
            console.warn(error);
        });
};

export default function getData() { /*Proxy*/
    let resourceID = resourceIDs[document.querySelector('.selected').innerHTML];

    if (newsCache[resourceID]) {
        renderNews(newsCache[resourceID]);
        console.log('cache rendering');
    } else {
        newsCache[resourceID] = getOriginalData(resourceID);
    }

    setTimeout(cleanCacheItem, 5000, resourceID);
}
