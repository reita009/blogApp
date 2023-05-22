const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const categoriesController = require("./categories/CategoriesController");
//View ewngine
app.set("view engine", "ejs");
//Static
app.use(express.static("public"));
//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Database
connection
  .authenticate()
  .then(() => {
    console.log("conectado com o banco!");
  })
  .catch((e) => {
    console.log("falha na conexão" + e);
  });

app.use("/", categoriesController);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8081, () => {
  console.log("conectado ao servidor");
});
