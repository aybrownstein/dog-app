'use strict';

function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson));
}

function displayResults(responseJson) {
    console.log(responseJson);
    $('.selectedImg').replaceWith(
        `<img src="${responseJson.message}" class="selectedImg">`
    )
    $(".results").removeClass('hidden');
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