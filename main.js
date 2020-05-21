$(document).ready(function() {

// Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
// https://flynn.boolean.careers/exercises/api/array/music
$.ajax({
    'url' : "https://flynn.boolean.careers/exercises/api/array/music",
    'method' : 'GET',
    'success' : function(data) {
        //dichiaro le variabili che mi serviranno con Handlebars
        var source = $('#entry-template').html();
        var template = Handlebars.compile(source);

        //leggo il contenuto dell'api (un array di dischi con determinate proprietà)
        var dischi = data.response;

        // Ciclare quindi i dischi e ottenuti...
        for (var i = 0; i < dischi.length; i++) {
            var disco = dischi[i];

            // imposto le proprietà dell'oggetto context e le compilo con le proprietà recuperate da ogni disco
            var context = {
                "copertina" : disco.poster,
                "titolo" : disco.title,
                "autore" : disco.author,
                "anno" : disco.year
            };

            //compilo il template con le proprietà inserite dentro context
            var disco_cover = template(context);

            //...e per ognuno di essi disegnare in pagina una card utilizzando handlebars.
            $('.cds-container.container').append(disco_cover);
        }//fine ciclo for

    }, //fine function(data) di success
    'error' : function() {
        alert('qualcosa è andato storto...');

    }//fine function di error
});//fine ajax


});//fine document ready
