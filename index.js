const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./config/database");

db.authenticate()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const port = 5000;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", require("./routes/user"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("/user");
});

app.get("/add-user", (req, res) => {
  res.render("add-user", { title: "Add User", h1: "Add New User" });
});

app.post("/submit-user-form", (req, res) => {
  const { name, age, gender } = req.body;
  console.log(name, age, gender);
});

app.get("/edit", (req, res) => {
  const user = req.app.get("user");
  res.render("edit-user", { user });
});

app.listen(port, () => {
  console.log(`Application is listening at port ${port}`);
});
