import { protectFunction } from "../services/protected";

export const protect = (req, res, next) => {
  let authorization = req.headers.authorization;
  let response = {
    data: "You're under protected data",
  };
  res.send(response);
  next();
};
