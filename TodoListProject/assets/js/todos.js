//Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("checked");
});

//mudando as cores das lis
lisColor();

//click on x to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
        lisColor();
    })
    event.stopPropagation();
});

//Add a new todo
$("input[type='text']").keypress(function(e){
    if(e.which == 13){
        //grabbing new todo text from input
        var newItem = $(this).val();
        //Setting text input to empty
        $(this).val("");
        //adding the new todo to the list
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newItem + "</li>");
    }
    lisColor();
});

//hiding/showing the text input
$("#btnAddTodo").on("click", function(){
    $("input[type='text']").slideToggle();
});

//funçao para alterar a cor dos lis pares para cinza claro
function lisColor(){
    $("li").each(function(index){
        if(index % 2 == 0){
            $(this).css("background", "#f7f7f7");
        }else{
            $(this).css("background", "white");
        }
    });
}