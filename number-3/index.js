'use strict';

function getDogImage() {
    fetch('https://dog.ceo/api/breed/hound/images/random')
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('sorry, we are experiencing heavy volume. please try again later'));
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