$(document).ready(function () {
    $('#toggle-link').click(function (e) {
        e.preventDefault();
        $('dd').toggleClass('invisible');
    });
});

$(document).ready(function () {
    $('dt').click(function () {
        if ($(this).hasClass('highlighted')) {
            $(this).removeClass('highlighted').css('background-color', '');
        } else {
            $('dt').removeClass('highlighted');
            $(this).addClass('highlighted').css('background-color', 'rebeccapurple');
        }
    });
});

$("h3").click(function() {
    $(this).next().toggleClass("bold");
});

$("#highlight-btn").click(function() {
    $("ul li:last-child").toggleClass("yellow-bg");
});

$("li").click(function() {
    $(this).parent().find("li:first-child").toggleClass("blue-font");
});

$(document).ready(function() {
    // Set initial frame positions
    let leftFrame = $("#frame-left");
    let centerFrame = $("#frame-center");
    let rightFrame = $("#frame-right");

    // Event listener for left frame button
    $("#btn-left").on("click", function() {
        // Swap left frame image with center frame image
        let centerImg = centerFrame.find("img").attr("src");
        leftFrame.find("img").fadeOut(500, function() {
            $(this).attr("src", centerImg).fadeIn(500);
        });

        // Swap center frame image with a random frame image
        let randFrame = Math.random() < 0.5 ? leftFrame : rightFrame;
        let randImg = randFrame.find("img").attr("src");
        centerFrame.find("img").fadeOut(500, function() {
            $(this).attr("src", randImg).fadeIn(500);
        });
    });

    // Event listener for center frame button
    $("#btn-center").on("click", function() {
        // Swap center frame image with a random frame image (excluding current frame)
        let randFrame = Math.random() < 0.5 ? leftFrame : rightFrame;
        if (randFrame.attr("id") == "frame-left") {
            randFrame = rightFrame;
        } else if (randFrame.attr("id") == "frame-right") {
            randFrame = leftFrame;
        }
        let randImg = randFrame.find("img").attr("src");
        centerFrame.find("img").fadeOut(500, function() {
            $(this).attr("src", randImg).fadeIn(500);
        });
    });

    // Event listener for right frame button
    $("#btn-right").on("click", function() {
        // Swap right frame image with center frame image
        let centerImg = centerFrame.find("img").attr("src");
        rightFrame.find("img").fadeOut(500, function() {
            $(this).attr("src", centerImg).fadeIn(500);
        });

        // Swap center frame image with a random frame image
        let randFrame = Math.random() < 0.5 ? leftFrame : rightFrame;
        let randImg = randFrame.find("img").attr("src");
        centerFrame.find("img").fadeOut(500, function() {
            $(this).attr("src", randImg).fadeIn(500);
        });
    });
});