const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Event } = require("../models");
const withAuth = require("../utils/auth");

// gets from /createNewEvent
router.get("/", withAuth, (req, res) => {
	Event.findAll({
		include: [
			{
				model: User,
				attributes: ["username", "email"],
				as: "user",
			},
		],
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

router.post("/", (req, res) => {
	Event.create({
		date: req.body.date,
		address: req.body.address,
		time: req.body.time,
		user_id: req.session.user_id,
		min_price: req.body.min_price,
		guests: req.body.guests,
	})
		.then((dbEventData) => {
			res.json(dbEventData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
