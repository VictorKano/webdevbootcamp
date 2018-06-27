var movies = [
    {name: "Your Name",
     rating: "4.5 stars",
     hasWatched: true},
    {name: "Black Swan",
     rating: "4.8 stars",
     hasWatched: false},
    {name: "Almost Famous",
     rating: "5 stars",
     hasWatched: true},
    {name: "Interstellar",
     rating: "5 stars",
     hasWatched: true}
];

for(var i=0; i<movies.length; i++){
    if(movies[i].hasWatched === true){
        console.log("You have watched " + "\"" + movies[i].name + "\"" + " - " + movies[i].rating);
    }else{
        console.log("You have not seen " + "\"" +  movies[i].name + "\"" + " - " + movies[i].rating);
    }
}