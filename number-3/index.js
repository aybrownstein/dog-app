'use strict';

function getDogImage(txt) {
    fetch(`https://dog.ceo/api/breed/${txt}/images/random `)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('sorry, due to high volume we are currently not available. Please try again later.'));
    s

}

function displayResults(responseJson) {
    $('.results').empty();
    $('.results').removeClass('hidden');
    $('.results').append(`<img src="${responseJson.message}" class="selectedImg">`)
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