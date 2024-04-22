$(document).ready(function() {
    $("#ul li:nth-of-type(2)").css('color', 'red');
})

$("#id1").on("click", function() {
    $("h1").hide();
    $("p").css('color', 'red'); //appliquer 1 style
    $("p").css({'color': 'red','color': 'blue','color': 'green'}); //appliquer plusieur styles
})

$("#id1").click("click", function() {
    $("h1").hide();
    $("p").css('color', 'red'); //appliquer 1 style
    $("p").css({'color': 'red','color': 'blue','color': 'green'}); //appliquer plusieur styles
})

$("input").focus(function() {
    $("input").css('borderColor', 'red');
})

document.getElementById("id2").addEventListener("click", function() {
    $("h1").show();
})