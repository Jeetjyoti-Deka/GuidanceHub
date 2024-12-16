const {
  setUserRole,
  getUser,
  getMatchedMentors,
} = require("../controllers/userController");

const router = require("express").Router();

router.get("/", getUser);
router.put("/role", setUserRole);
router.get("/match", getMatchedMentors);

module.exports = router;