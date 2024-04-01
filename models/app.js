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
    bgDir: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Background dir cannot be empty",
        },
        notEmpty: {
          msg: "Background dir cannot be empty",
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
