const router = require("express").Router();
const { Service } = require("../../models");

// get all services /api/services
router.get("/", (req, res) => {
	Service.findAll()
		.then((dbServiceData) => res.json(dbServiceData))
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
		service_name: req.body.service_name,
		price: req.body.price,
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
