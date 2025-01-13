const express = require("express");
const app = express();
const port = process.env.PORT || 16850;
const sequelize = require("./config/db");

sequelize.sync().then(() => console.log("ready"));
const router = require("./routers/router"); // router
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");

app.use(express.urlencoded({ extended: true })); // body parser
app.use(express.json());

app.use(cors());
app.use(router);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`App running at port ${port}.`);
});

module.exports = app;
