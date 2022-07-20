const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Event } = require("../models");
const withAuth = require("../utils/auth");

// get all User's events for dashboard
// http://localhost:3001/eliDash
router.get("/", withAuth, (req, res) => {
	// console.log(req.session);
	Event.findAll({
		include: [
			{
				model: User,
				attributes: ["username", "email"],
			},
		],
	}).then((dbEventData) => {
		const Events = dbEventData.map((Event) => Event.get({ plain: true }));
		const numEvents = Events.length;
		res.render("my-events", {
			Events,
			loggedIn: true,
			isEli: true,
			numEvents,
		});
	});
});

module.exports = router;
