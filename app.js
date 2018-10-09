$(document).ready(function(){
    $(".toggle").on("click", function(){
        $(".toggle").toggleClass("active");
        $("body").toggleClass("night");
    })
});