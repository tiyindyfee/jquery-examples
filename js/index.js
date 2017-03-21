// Only run jQuery things after the ready event fires
$(document).ready(function() {

    // Painting with mouse events, and .append()
    // $('body').on('mousemove', function(e) {
    //     $('body').append(`<div style="background: red; width: 30px; height: 30px; position: absolute; top: ${e.clientY}px; left: ${e.clientX}px;"></div>`);
    // });

    // Toggle CSS classes
    $('#toggleRed').on('click', function() {
        $('h1').toggleClass('red');
    });

    // DOM manipulation
    $('h1').on('click', function() {
        // this refers to the e.target in jQuery
        $(this).remove();
    });

    // Set innerHTML
    $('#items').html('<img src="http://robohash.org/jquery" alt="Robots" />');

    // Put HTML before or after an element
    $('#items').before('<hr/>');
    $('#items').after(`<div class="well">
        I\'m after.
    </div>`);

    // Use AJAX to load HTML partials
    $('#navigation').load('navigation.html', function() {

        // Add event listeners after the partial loads
        $('#aboutButton').on('click', function() {
            alert('About Me');
        });

        $('#contactButton').on('click', function() {
            alert('Contact Me');
        });

    });

    // Use .ajax() to make a "fetch" call, combine with other libraries, like moment
    $.ajax({
        url: 'https://thinksaydo.com/api.php',
        method: 'get',
        success: function(data) {
            console.log(data.x);
            console.log(data.y);
            console.log(moment(data.meta.generated_at).format('MM/DD/YYYY'));
        }
    });

    // Create a modal dialog overlay
    $('#showModalButton').on('click', function() {
        $('#modal').removeClass('hidden');
    });

    // Close the modal dialog
    $('.overlay-close').on('click', function(e) {
        $('#modal').addClass('hidden');
    });

    // Use a jQuery plugin
    $('#colorPicker').minicolors({
        theme: 'bootstrap'
    });

});