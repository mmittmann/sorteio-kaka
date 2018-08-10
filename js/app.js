$(document).foundation()


$(document).ready(function(){
    $('#form').submit(function(e){

        e.preventDefault();

        var v1 = $('#valor1').val();
        var v2 = $('#valor2').val();

        $('#resultado').text(getRandomInt(v1, v2));
        $('#texto-resultado').show();
    })
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }