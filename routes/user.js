const { response } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../config/database");
const User = require("../models/User");

router.get("/", (req, res) => {
  User.findAll()
    .then((users) => res.render("index", { datas: users }))
    .catch((err) => console.log(err));
});

router.post("/add-user", (req, res) => {
  const { name, age, gender } = req.body;
  User.create({
    name,
    age,
    gender,
  })
    .then((user) => res.redirect("/"))
    .catch((err) => console.log(err));
});

router.get("/:id/delete", (req, res) => {
  const { id } = req.params;
  User.destroy({
    where: {
      id,
    },
  })
    .then((user) => res.redirect("/"))
    .catch((err) => console.log(err));
});

router.get("/:id/edit", (req, res) => {
  const { id } = req.params;
  User.findByPk(id).then((user) => {
    req.app.set("user", user);
    return res.redirect("/edit");
  });
});

router.post("/:id/update", (req, res) => {
  const { id } = req.params;
  const { name, age, gender } = req.body;
  User.update(
    {
      name,
      age,
      gender,
    },
    {
      where: { id },
    }
  )
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
});

module.exports = router;
