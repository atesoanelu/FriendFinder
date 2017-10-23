console.log("HTML routes loaded...")
require express
// HTML Routes
// =============================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res){
  res.sendFile(path.join(__dirname, "../public/survey.html"));
})

exports.app = htmlRoutes;