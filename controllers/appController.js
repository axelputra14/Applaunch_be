const App = require("../models/app");

class appController {
  static async listApp(req, res, next) {
    try {
      const { count, rows } = await App.findAndCountAll();

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
      let imgFinalDir = "";
      let bgFinalDir = "";
      const {
        title,
        developer,
        publisher,
        exeDir,
        imgDir,
        bgDir,
        desc,
        lang,
        relDate,
      } = req.body;

      exeAbsDir = exeDir.replace(/\\/g, "/");
      imgFinalDir =
        "http://localhost:25850/cover/" + imgDir.replace(/\\/g, "/");
      bgFinalDir = "http://localhost:25850/bg/" + imgDir.replace(/\\/g, "/");

      await App.create({
        title: title,
        developer: developer,
        publisher: publisher,
        exeDir: exeAbsDir,
        imgDir: imgFinalDir,
        bgDir: bgFinalDir,
        desc: desc,
        lang: lang,
        relDate: relDate,
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
      let imgAbsDir = "";
      const {
        title,
        developer,
        publisher,
        exeDir,
        imgDir,
        bgDir,
        desc,
        lang,
        relDate,
      } = req.body;

      const searchResult = await App.findByPk(id);

      if (!searchResult) {
        throw new Error("APP_NOT_FOUND");
      }

      exeAbsDir = exeDir.replace(/\\/g, "/");
      imgFinalDir =
        "http://localhost:25850/cover/" + imgDir.replace(/\\/g, "/");
      bgFinalDir = "http://localhost:25850/bg/" + imgDir.replace(/\\/g, "/");

      await App.update(
        {
          title: title,
          developer: developer,
          publisher: publisher,
          exeDir: exeAbsDir,
          imgDir: imgFinalDir,
          bgDir: bgFinalDir,
          desc: desc,
          lang: lang,
          relDate: relDate,
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
