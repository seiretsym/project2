var express = require("express");


var app = express();
var PORT = process.env.PORT || 9001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("app/public"));

// require("./app/routes/api-routes.js")(app);

var db = require("./models");

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT" + PORT)
    });
});