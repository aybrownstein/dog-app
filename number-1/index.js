'use strict';

function getDogImage(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
}



function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let num = $('#input-num').val();
        getDogImage();
    });
}

$(function() {
    console.log('app loaded!waiting for submit');
    watchForm();
});