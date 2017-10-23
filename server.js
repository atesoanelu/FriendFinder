// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var pages = ("./routing/htmlRoutes.js");
var apis = ("./routing/apiRoutes.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
//==============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("A true friend is waiting on PORT " + PORT);
});