const router = require("express").Router();
const { User, Review } = require("../../models");
const withAuth = require("../../utils/auth");

//get /api/reviews
router.get("/", (req, res) => {
	Review.findAll({})
		.then((dbReviewData) => res.json(dbReviewData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

//post (or create Review) /api/Reviews
router.post("/", withAuth, (req, res) => {
	Review.create({
		review_text: req.body.review_text,
		user_id: req.session.user_id,
	})
		.then((dbReviewData) => res.json(dbReviewData))
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
});

//delete a Review /api/Reviews/1
// router.delete("/:id", (req, res) => {
// 	// add withAuth() function later?
// 	Review.destroy({
// 		where: {
// 			id: req.params.id,
// 		},
// 	})
// 		.then((dbReviewData) => {
// 			if (!dbReviewData) {
// 				res.status(404).json({ message: "No post found with this id" });
// 				return;
// 			}
// 			res.json(dbReviewData);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			res.status(500).json(err);
// 		});
// });

module.exports = router;
