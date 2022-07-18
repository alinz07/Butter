const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const myEventsRoutes = require("./my-events-routes.js");
const servicesListRoutes = require("./services-list-routes");
const createNewEventRoutes = require("./create-new-event.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/my-events", myEventsRoutes);
router.use("/services-list", servicesListRoutes);
router.use("/createNewEvent", createNewEventRoutes);

router.use((req, res) => {
	res.status(404).end();
});

module.exports = router;
