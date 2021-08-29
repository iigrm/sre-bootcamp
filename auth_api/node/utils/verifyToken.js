const jwt = require("jsonwebtoken");
export const verifyToken = (token) => {
  return jwt.verify(token, process.env.TOKEN_SECRET);
};
