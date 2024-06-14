const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");

router.get("/", appController.listApp);
router.post("/add", appController.addApp);
router.patch("/edit/:id", appController.updateApp);
router.delete("/:id", appController.deleteApp);

module.exports = router;
