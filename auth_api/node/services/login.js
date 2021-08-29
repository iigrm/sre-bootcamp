import { User } from "../models/users";
const jwt = require("jsonwebtoken");

export const loginFunction = async (username, password, result) => {
  const user = await User.loginUser(username, password);
  if (user.length === 0) {
    throw new Error("not_found");
  }
  const token = jwt.sign(
    {
      role: user[0].role,
    },
    process.env.TOKEN_SECRET
  );

  return token;
};
