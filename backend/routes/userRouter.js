const {
  setUserRole,
  getUser,
  getMatchedMentors,
  getMentorsBySkill,
} = require("../controllers/userController");

const router = require("express").Router();

router.get("/", getUser);
router.get("/search", getMentorsBySkill);
router.put("/role", setUserRole);
router.get("/match", getMatchedMentors);

module.exports = router;
