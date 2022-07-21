const router = require("express").Router();
const { User, Review } = require("../models");
const withAuth = require("../utils/auth");

//get /reviews
router.get("/", (req, res) => {
	Review.findAll({})
		.then((dbReviewData) => {
			const reviews = dbReviewData.map((review) =>
				review.get({ plain: true })
			);
			const loggedIn = req.session.loggedIn;
			const userId = req.session.user_id;
			const isEli = req.session.user_id === 1;
			res.render("reviews", {
				reviews,
				loggedIn,
				userId,
				isEli,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
