const  express = require('express');
const  router = express.Router();

const sideControllers = require('../app/controllers/siteControllers');
// newControllers.index()
router.use("/search", sideControllers.search);
router.use("/", sideControllers.index);

module.exports = router;
