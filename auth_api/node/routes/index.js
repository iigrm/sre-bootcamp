import { login } from "./login";
import { protect } from "./protected";
import { health } from "../services/health";
import validateToken from "../middleware/validateToken";

export const init = (app) => {
  app.post("/login", login);
  app.get("/protected", validateToken, protect);
  app.get("/_health", health);
};
