const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes.js");
const commentRoutes = require("./comment-routes.js");
const eventRoutes = require("./event-routes.js");
const bookuserRoutes = require("./bookuser-routes.js");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/events", eventRoutes);
router.use("/bookuser", bookuserRoutes);

module.exports = router;
