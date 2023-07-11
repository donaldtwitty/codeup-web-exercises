$(document).ready(function() {
    $('#toggle-link').click(function(e) {
        e.preventDefault();
        $('dd').toggleClass('invisible');
    });
});


$(document).ready(function() {
    $('dt').click(function() {
        if ($(this).hasClass('highlighted')) {
            $(this).removeClass('highlighted').css('background-color', '');
        } else {
            $('dt').removeClass('highlighted');
            $(this).addClass('highlighted').css('background-color', 'rebeccapurple');
        }
    });
});