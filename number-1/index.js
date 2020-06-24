'use strict';

function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    });
}

$(function() {
    console.log('app loaded!waiting for submit');
    watchForm();
});