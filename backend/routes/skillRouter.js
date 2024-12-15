const {
  getSkillsByUserId,
  createSkill,
  deleteSkillById,
} = require("../controllers/skillController");

const router = require("express").Router();

router.get("/user", getSkillsByUserId);
router.post("/", createSkill);
router.delete("/:skillId", deleteSkillById);

module.exports = router;
