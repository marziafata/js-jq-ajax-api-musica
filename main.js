$(document).ready(function() {
// Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
// https://flynn.boolean.careers/exercises/api/array/music
// Ciclare quindi i dischi e ottenuti e per ognuno di essi disegnare in pagina una card utilizzando handlebars.
var source = $('#entry-template').html();
var template = Handlebars.compile(source);

var context = {
    //gli oggetti disco che sono dentro ajax
};

var disco_cover = template(context);

$('cds-container.container').append(disco_cover);

// var cover = [];
// console.log('cover: ' + cover);

$.ajax({
    'url' : "https://flynn.boolean.careers/exercises/api/array/music",
    'method' : 'GET',
    'success' : function(data) {

                    var dischi = data.response;
                    console.log(dischi);

                    for (var i = 0; i < dischi.length; i++) {
                        var dischi_singoli = dischi[i]
                        cover.push(dischi_singoli);
                    }
                }, //fine function(data) di success
    'error' : function() {
        alert('qualcosa è andato storto...');
    }//fine function di error
});//fine ajax



});//fine document ready
