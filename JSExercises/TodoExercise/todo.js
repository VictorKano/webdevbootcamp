var lista = [];
var flag = 0;

do{
    var acao = prompt("What do you want to do?");
    
    if(acao === "quit"){
        flag = 1;
        console.log("You quitter");
    }
    
    if(acao === "new"){
        addTodo();
    }
    
    if(acao === "list"){
        listTodos();
    }
    
    if(acao === "delete"){
        deleteTodo();
    }
    
}while(flag != 1);

function addTodo(novo){
    var novo = prompt("Add new Todo");
    lista.unshift(novo);
    console.log("Todo added");
}

function listTodos(){
    console.log("**********************");
        lista.forEach(function(item, i){
            console.log(i + ": " + item);
        });
        console.log("**********************");
}

function deleteTodo(posicao){
    var posicao = prompt("Input the index");
    lista.splice(posicao, 1);
    console.log("Todo deleted");
}