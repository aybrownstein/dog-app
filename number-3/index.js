'use strict';

function getDogImage(txt) {
    fetch(`https://dog.ceo/api/breed/${txt}/images/random`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('sorry, we are experiencing heavy volume. please try again later'));
}

function displayResults(responseJson) {
    $('.results').empty();
    $('.results').removeClass('hidden');
    responseJson.message.forEach((url) => {
        console.log(url)
        $('.results').append(`<img src="${url}" class="selectedImg">`)
    });
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let txt = $('#input-txt').val();
        getDogImage(txt);
    });
}

$(function() {
    console.log('app loaded!waiting for submit');
    watchForm();
});