import {url} from '../resources/application.properties.js'

export function getBooks() {
    return fetch(url + '/books')
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
}

export function getBookDetailById(id, lat, lon) {
    return fetch(url + '/books/detail?id=' + id + "&lat=" + lat + "&lon=" + lon)
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
}

export function searchBooks(text) {
    return fetch(url + '/books/search?text=' + text)
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
}
