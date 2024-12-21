const {
  createRequest,
  getSingleRequest,
  getMenteeRequests,
  deleteConnectionRequest,
} = require("../controllers/requestController");

const router = require("express").Router();

router.post("/", createRequest);
router.get("/", getSingleRequest);
router.get("/mentee", getMenteeRequests);
router.delete("/", deleteConnectionRequest);

module.exports = router;
