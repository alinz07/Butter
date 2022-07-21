const router = require("express").Router();
const { User, Event } = require("../../models");
//maybe keep this file for Eli, but otherwise, we use my-events-routes for individ users
//get /api/events
router.get("/", (req, res) => {
	Event.findAll({
		// include: [
		// 	{
		// 		model: User,
		// 		attributes: ["username", "email"],
		// 		as: "user",
		// 	},
		// ],
	})
		.then((dbEventData) => res.json(dbEventData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

//get/api/books/:title
//this route is specifically for add-post to call and get book_id
//of newly created book
// router.get("/:title", (req, res) => {
// 	Book.findOne({
// 		where: {
// 			book_title: req.params.title,
// 		},
// 		attributes: ["id"],
// 	}).then((dbBookData) => {
// 		res.json(dbBookData);
// 	});
// });

//get /api/books/1
// router.get("/:id", (req, res) => {
// 	Book.findOne({
// 		where: {
// 			id: req.params.id,
// 		},
// 		include: [
// 			{
// 				model: User,
// 				attributes: ["id", "username"],
// 				through: BookUser,
// 				as: "users",
// 			},
// 		],
// 	})
// 		.then((dbBookData) => {
// 			if (!dbBookData) {
// 				res.status(404).json({ message: "No book found with this id" });
// 				return;
// 			}
// 			res.json(dbBookData);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			res.status(500).json(err);
// 		});
// });

//post (create new event) /api/events
router.post("/", (req, res) => {
	console.log(req.body);
	Event.create(req.body)
		.then((dbEventData) => res.json(dbEventData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

//put (update a book) /api/books/1
// router.put("/:id", (req, res) => {
// 	Book.update(
// 		{
// 			book_title: req.body.book_title,
// 			book_author: req.body.book_author,
// 		},
// 		{
// 			where: {
// 				id: req.params.id,
// 			},
// 		}
// 	)
// 		.then((dbBookData) => {
// 			if (!dbBookData) {
// 				res.status(404).json({ message: "No book found with this id" });
// 				return;
// 			}
// 			res.json(dbBookData);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			res.status(500).json(err);
// 		});
// });

// delete /api/events
router.delete("/", (req, res) => {
	Event.destroy({
		where: {
			id: req.body.event_id,
		},
	})
		.then((dbEventData) => {
			if (!dbEventData) {
				res.status(404).json({
					message: "No Event found with this id",
				});
				return;
			}
			res.json(dbEventData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
