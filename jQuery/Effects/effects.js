/**$("button").on("click", function(){
    $('div').fadeOut(1000, function(){
        console.log("fade completed");
        $(this).remove();
    });
});**/

/**$("button").on("click", function(){
    $("div").fadeToggle(1000, function(){
        console.log("fade complete");
    });
});**/

$("button").on("click", function(){
    $("div").slideToggle(1000, function(){
        console.log("slide complete");
    });
});