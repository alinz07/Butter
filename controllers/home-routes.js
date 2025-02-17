const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Event } = require("../models");

// view home page with hero image and all the posts
router.get("/", (req, res) => {
	console.log(req.session.user_id === 4);
	res.render("homepage", {
		loggedIn: req.session.loggedIn, // only users logged in can see the posts?
		isEli: req.session.user_id === 4,
	});
});

router.get("/login", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}

	res.render("login");
});

// router.get('/post/:id', (req, res) => {
//     Post.findOne({
//         where: {
//             id: req.params.id
//         },
//         attributes: [
//             'id',
//             'post_url',
//             'title',
//             'created_at',
//             [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//         ],
//         include: [
//             {
//                 model: Comment,
//                 attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//                 include: {
//                     model: User,
//                     attributes: ['username']
//                 }
//             },
//             {
//                 model: User,
//                 attributes: ['username']
//             }
//         ]
//     })
//     .then(dbPostData => {
//         if (!dbPostData) {
//             res.status(404).json({message: 'No post found with this id'});
//             return;
//         }

//         //serialize the data
//         const post = dbPostData.get({plain: true});

//         //pass data to template
//         res.render('single-post', {
//             post,
//             loggedIn: req.session.loggedIn
//         });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

module.exports = router;
