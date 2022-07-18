const router = require("express").Router();
const { Service } = require("../models");

// get all services /api/services-list
router.get("/", (req, res) => {
	Service.findAll()
		.then((dbServiceData) => {
			const Services = dbServiceData.map((service) =>
				service.get({ plain: true })
			);
			const loggedIn = req.session.loggedIn;
			res.render("services", {
				Services,
				loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// router.get('/:id', (req, res) => {
//     Service.findOne({
//         where: {
//             book_id: req.params.id
//         }
//     })
//     .then(dbServiceData => res.json(dbServiceData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// })

//post (create new Service combo) /api/Service
router.post("/", (req, res) => {
	Service.create({
		book_id: req.body.book_id,
		user_id: req.session.user_id,
	})
		.then((dbServiceData) => {
			res.json(dbServiceData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.delete("/", (req, res) => {
	Service.destroy({
		where: {
			book_id: req.body.book_id,
			user_id: req.session.user_id,
		},
	})
		.then((dbServiceData) => {
			if (!dbServiceData) {
				res.status(404).json({
					message: "No Service found with this info!",
				});
				return;
			}
			res.json(dbServiceData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
