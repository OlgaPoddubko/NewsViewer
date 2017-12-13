export default function changeNews(e) {
    let formerSelected = document.querySelector('.selected');
    if (formerSelected) {
        formerSelected.classList.remove('selected');
        document.querySelector('.content').innerHTML = ``;
    }
    document.querySelector('.current-resource').innerHTML = `${e.target.innerHTML} news:`;
    e.target.classList.add('selected');
}
