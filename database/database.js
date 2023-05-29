const Sequelize = require("sequelize");
const connection = new Sequelize("blogapp", "root", "lira0509", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = connection;
