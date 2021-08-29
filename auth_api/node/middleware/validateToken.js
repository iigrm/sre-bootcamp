import { verifyToken } from "../utils/verifyToken";
const validateTokenMW = (req, res, next) => {
  const token = req.header("Authorization").split(" ")[1];
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    verifyToken(token);
    next();
  } catch (error) {
    res.status(403).json({ error: "Ivalid token" });
  }
};

module.exports = validateTokenMW;
