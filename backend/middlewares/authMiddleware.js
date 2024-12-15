const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const cookies = req.cookies;

  const token = cookies["jwt-token"];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = jwt.verify(token, process.env.JWT_SECRET);
  if (!user || !user.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.user = {
    id: user.id,
    email: user.email,
  };
  next();
};

module.exports = authMiddleware;
