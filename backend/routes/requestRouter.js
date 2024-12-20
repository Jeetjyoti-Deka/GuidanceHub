const {
  createRequest,
  getSingleRequest,
} = require("../controllers/requestController");

const router = require("express").Router();

router.post("/", createRequest);
router.get("/", getSingleRequest);

module.exports = router;
