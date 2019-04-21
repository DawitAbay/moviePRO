$(document).ready(function () {
    var id= window.location.href.split("?").pop().split("=").pop();
    $.ajax({
        url: 'http://localhost:8080/api/searchById?id=' + id,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $('#result').empty();
            console.log('search returned', data);
            $(".title").text(data.title);
            $(".year").text(data.year);
            $("#trailerIframe").attr("src",data.trailerUrl);
        }
    });
});

// Can also be used with $(document).ready()
$(window).load(function(){
    // Wistia handler.
    wistiaEmbed = document.getElementById( 'player_1' ).wistiaApi;

    // Call fitVid before FlexSlider initializes, so the proper initial height can be retrieved.
    $( '.flexslider' )
        .fitVids()
        .flexslider({
            animation: 'slide',
            useCSS: false,
            animationLoop: false,
            smoothHeight: true,
            start: function( slider ) {
                $('body').removeClass( 'loading' );
            },
            before: function ( slider ) {
                wistiaEmbed.pause();
            }
        });

    wistiaEmbed.bind( 'play', function() {
        jQuery( '.flexslider' ).flexslider( 'pause' );
    });

    wistiaEmbed.bind( 'end', function() {
        jQuery( '.flexslider' ).flexslider( 'play' );
    });
});