const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes.js");
const reviewRoutes = require("./review-routes.js");
const eventRoutes = require("./event-routes.js");
const serviceRoutes = require("./service-routes.js");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/reviews", reviewRoutes);
router.use("/events", eventRoutes);
router.use("/services", serviceRoutes);

module.exports = router;
