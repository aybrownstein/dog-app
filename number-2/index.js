'use strict';

function getDogImage(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson));
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
        let num = $('#input-num').val();
        getDogImage(num);
    });
}

$(function() {
    console.log('app loaded! waiting for submit');
    watchForm();
});