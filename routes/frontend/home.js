var express = require("express");
const homeController = require("../../controller/homeController");
var router = express.Router();

router.get("/fhome",homeController.Image);
router.get("/fbrands",homeController.Brands)
router.get("/fclients",homeController.Clients)
router.get("/fproducts",homeController.Products)
router.get("/fcontact",homeController.Contact)
router.get("/about",homeController.About)
router.get("/solutions",homeController.Solutions)
router.get("/",homeController.Home)
// router.get("/active",homeController.Active)
// router.get("/mission",homeController.Mission)

// router.post("/upload",homeController.Upload)





module.exports = router;
