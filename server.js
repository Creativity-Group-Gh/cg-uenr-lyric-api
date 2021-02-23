const ejs = require("ejs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = new express();


/**@Body_parsing */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**@Template_Engine_rendering */
app.use(express.static("public"));
app.set("view engine", "ejs");



app.get("/", (req, res) => {
    res.render("index");
});



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
