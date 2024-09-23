const App = require("../models/app");

class appController {
  static async listApp(req, res, next) {
    try {
      const { count, rows } = await App.findAndCountAll({
        order: [["title", "ASC"]],
      });

      res.status(200).json({
        message: "Success get app list",
        rows,
        count,
      });
    } catch (err) {
      next(err);
    }
  }

  static async listOneApp(req, res, next) {
    try {
      const { id } = req.params;
      const result = await App.findByPk(id);

      if (!result) {
        throw new Error("APP_NOT_FOUND");
      }

      res.status(200).json({
        message: `Success get app with id ${id}`,
        result,
      });
    } catch (err) {
      next(err);
    }
  }

  static async addApp(req, res, next) {
    try {
      let exeAbsDir = "";

      const { title, developer, exeDir, imgDir } = req.body;

      exeAbsDir = exeDir.replace(/\\/g, "/");

      await App.create({
        title: title,
        developer: developer,
        exeDir: exeAbsDir,
        imgDir,
      });

      res.status(201).json({
        message: "New app added successfully",
      });
    } catch (err) {
      next(err);
    }
  }

  static async updateApp(req, res, next) {
    try {
      const { id } = req.params;

      let exeAbsDir = "";
      const { title, developer, exeDir, imgDir } = req.body;

      const searchResult = await App.findByPk(id);

      if (!searchResult) {
        throw new Error("APP_NOT_FOUND");
      }

      exeAbsDir = exeDir.replace(/\\/g, "/");

      await App.update(
        {
          title: title,
          developer: developer,

          exeDir: exeAbsDir,
          imgDir,
        },
        {
          where: {
            id: id,
          },
        }
      );

      res.status(200).json({
        message: `App with id ${id} has been updated.`,
      });
    } catch (err) {
      next(err);
    }
  }

  static async deleteApp(req, res, next) {
    try {
      const { id } = req.params;

      const searchRes = await App.findByPk(id);

      if (!searchRes) {
        throw new Error("APP_NOT_FOUND");
      }
      await App.destroy({
        where: { id },
      });

      res.status(200).json({
        message: `${searchRes.title} has been deleted.`,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = appController;
