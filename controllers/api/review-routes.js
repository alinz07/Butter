const router = require("express").Router();
const { User, Review } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
	Review.findAll({})
		.then((dbReviewData) => res.json(dbReviewData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

//post (or create Review) /api/Reviews
router.post("/", (req, res) => {
	Review.create({
		review_text: req.body.review_text,
		customer_name: req.body.customer_name,
	})
		.then((dbReviewData) => res.json(dbReviewData))
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
});

//delete a Review /api/Reviews/:id
router.delete("/", (req, res) => {
	// add withAuth() function later?
	Review.destroy({
		where: {
			id: req.body.review_id,
		},
	})
		.then((dbReviewData) => {
			if (!dbReviewData) {
				res.status(404).json({
					message: "No review found with this id",
				});
				return;
			}
			res.json(dbReviewData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
