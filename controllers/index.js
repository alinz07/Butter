const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const createNewPostRoutes = require('./create-new-post.js');
const bookCoverRoutes = require('./book-cover-route.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/createNewPost', createNewPostRoutes);
router.use('/getBookCover', bookCoverRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;