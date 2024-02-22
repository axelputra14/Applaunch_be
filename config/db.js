const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("app", "user", "pass", {
  dialect: "sqlite",
  //host: ":memory:", // for testing, gone after test
  host: "./db/db.sqlite", // for prod, will persist
});

module.exports = sequelize;
