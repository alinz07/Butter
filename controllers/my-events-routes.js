const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Event } = require("../models");
const withAuth = require("../utils/auth");

// get all User's events for dashboard
// http://localhost:3001/my-events
router.get("/", withAuth, (req, res) => {
	// console.log(req.session);
	Event.findAll({
		where: {
			user_id: req.session.user_id,
		},
		include: [
			{
				model: User,
				attributes: ["username"],
			},
		],
	}).then((dbEventData) => {
		const Events = dbEventData.map((Event) => Event.get({ plain: true }));
		if (req.session.user_id === 4) {
			var isEli = true;
		}
		res.render("my-events", {
			Events,
			loggedIn: true,
			isEli,
		});
	});
});

// router.get("/toReadList", (req, res) => {
// 	Book.findAll({
// 		attributes: ["book_title", "book_author", "id"],
// 		include: [
// 			{
// 				model: User,
// 				attributes: ["id"],
// 				through: BookUser,
// 			},
// 		],
// 	})
// 		.then((dbBookData) => {
// 			const books = dbBookData.map((book) => book.get({ plain: true }));
// 			const booksToRender = isNotOnList(books, req.session.user_id);
// 			res.render("books-to-read", { booksToRender, loggedIn: true });
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			res.status(500).json(err);
// 		});
// });

module.exports = router;
