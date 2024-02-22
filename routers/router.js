const router = require("express").Router();

const appRouter = require("./appRouter");

router.use("/app", appRouter);
module.exports = router;
