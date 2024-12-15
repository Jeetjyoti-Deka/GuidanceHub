const { setUserRole, getUser } = require("../controllers/userController");

const router = require("express").Router();

router.get("/", getUser);
router.put("/role", setUserRole);

module.exports = router;
