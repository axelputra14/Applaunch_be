const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class App extends Model {}

App.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Title cannot be empty",
        },
        notEmpty: {
          msg: "Title cannot be empty",
        },
      },
    },
    developer: {
      type: DataTypes.STRING,
    },
    exeDir: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Exe directory cannot be empty",
        },
        notEmpty: {
          msg: "Exe directory cannot be empty",
        },
      },
    },
    imgDir: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Image dir cannot be empty",
        },
        notEmpty: {
          msg: "Image dir cannot be empty",
        },
      },
    },
  },
  {
    sequelize,
    modelName: "app",
  }
);

module.exports = App;
