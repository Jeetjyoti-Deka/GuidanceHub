const {
  createRequest,
  getSingleRequest,
  getMenteeRequests,
  deleteConnectionRequest,
  getMentorRequests,
  acceptRequest,
  rejectRequest,
} = require("../controllers/requestController");

const router = require("express").Router();

router.post("/", createRequest);
router.get("/", getSingleRequest);
router.get("/mentee", getMenteeRequests);
router.get("/mentor", getMentorRequests);
router.delete("/", deleteConnectionRequest);
router.put("/accept", acceptRequest);
router.put("/reject", rejectRequest);

module.exports = router;
