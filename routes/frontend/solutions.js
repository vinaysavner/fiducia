var express = require("express");
const solutionsController = require("../../controller/solutionsController");
var router = express.Router();

router.get("/security",solutionsController.security);
router.get("/management_system",solutionsController.management_system)
router.get("/bms",solutionsController.bms)
router.get("/surveillance",solutionsController.surveillance)
router.get("/communication",solutionsController.communication)
router.get("/fire_alarm",solutionsController.fire_alarm)
router.get("/defence_security",solutionsController.defence_security)
router.get("/renewable",solutionsController.renewable)

module.exports = router;
