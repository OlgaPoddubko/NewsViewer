export default function convertDate(str) {
	let date = new Date(str);
    let day = date.getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    let hour = date.getHours();
    let min = date.getMinutes();
    if (min < 10) {
      min = `0${min}`;
    }

    return `${day}.${month}.${date.getFullYear()} ${hour}:${min}`;
}
