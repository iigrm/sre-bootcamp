import { loginFunction } from "../services/login";

export const login = async (req, res) => {
  if (req.body.username === undefined || req.body.password === undefined) {
    return res.status(400).send({ message: "Bad request" });
  }
  let username = req.body.username;
  let password = req.body.password;
  try {
    const token = await loginFunction(username, password);
    res.send({ token });
  } catch (ex) {
    if (ex.message === "not_found") {
      res.status(404).send({ message: "User not found" });
    } else {
      res.status(500).status({ message: "Server Error" });
    }
  }
};
