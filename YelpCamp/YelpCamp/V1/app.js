var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f1c278a0e4b4b8_340.jpg"},
        {name: "Granite Hill", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104496f1c278a0e4b4b8_340.jpg"},
        {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144294f3c07eaeecb5_340.jpg"},
        {name: "Alberta Campground", image: "https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b0144294f3c07eaeecb5_340.jpg"},
        {name: "Wind River Campground", image: "https://farm1.staticflickr.com/82/225912054_690e32830d.jpg"},
        {name: "Occoneechee Park", image: "https://farm4.staticflickr.com/3924/14422533026_9be7d49684.jpg"},
        {name: "Death Valley Park", image: "https://farm3.staticflickr.com/2931/14128269785_f27fb630f3.jpg"}
    ];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCamp = {name: name, image: image};
    campgrounds.push(newCamp);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp App Has Started");
});