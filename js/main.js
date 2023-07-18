$(document).ready(function(){
    $('#banner-slider').owlCarousel({
        loop:true,
        nav:true,
        smartSpeed:1000,
        dots:false,
        items:1,
        autoplay:true,
        autoplayTimeout:6000,
        responsive:{
            0:{
            },
        }
    })
})
$(document).ready(function() {        
    $('#message_form').html5form({
        allBrowsers : true,
        responseDiv : '#response',
        messages: 'en',
        messages: 'es',
        method : 'GET',
        colorOn :'#d2d2d2',
        colorOff :'#000'
    }
);
});
$(document).ready(function(){
    $('.play').click(function () {
        if($(this).parent().prev().get(0).paused){
            $(this).parent().prev().get(0).play();
            $(this).parent().prev().removeClass('blurEffect');
            $('.content').hide();
        }
    });

    $('.video').on('ended',function(){
        $(this).addClass('blurEffect');
      $('.content').show();
    });
})