"use strict"
/*Preferred Method
$('h1').on('click', (e) => {
        $(e.target).css('background', 'rebeccapurple');
}); */
$("h1").click(function (){
        $(this).css('background-color', 'rebeccapurple')
});

$("p").dblclick(function () {
        $(this).css('font-size', '18px');
});

$("li").hover(
    function (){
            $(this).css('color', 'red');
    },
    function (){
            $(this).css('color', 'black');
    }
    );