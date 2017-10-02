const router = require("express").Router();
const articleRoutes = require("./articles");
const newsRoutes = require("./news");

//  routes
router.use("/articles", articleRoutes);
router.use("/news", newsRoutes);

module.exports = router;
