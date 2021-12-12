$(document).ready(function(){

    $(window).scroll(function(){
        var barra = $(window).scrollTop(); // target scroll //
        var posicion = barra * 0.05; // efecto //

        $('body').css({
            'background-position': '0 -' + posicion + 'px'


        })
    });
    
});