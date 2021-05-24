const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define("User", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

module.exports = User;
