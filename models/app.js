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
    publisher: {
      type: DataTypes.STRING,
    },
    exeDir: {
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
    imgDir: {
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
    desc: {
      type: DataTypes.STRING,
    },
    lang: {
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
    relDate: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "app",
  }
);

module.exports = App;
