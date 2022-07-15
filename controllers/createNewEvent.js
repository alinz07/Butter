const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Event } = require("../models");
const withAuth = require("../utils/auth");

// gets from /createNewEvent
router.get("/", withAuth, (req, res) => {
	Event.findAll({
		order: ["event_id"],
		where: {
			user_id: req.session.user_id,
		},
	})
		.then((dbEventData) => {
			const events = dbEventData.map((event) =>
				event.get({ plain: true })
			);
			res.render("new-event", {
				events,
				loggedIn: true,
				user_id: req.session.user_id,
			});
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;
