import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import userProfileController from "../controllers/userProfile.controller";
import getUsersController from "../controllers/getUsersController";
import loginController from "../controllers/login.controller";
import verifyAdmAuthMiddleware from "../middlewares/verifyAdmAuth.middleware";
import verifyEmailAvailability from "../middlewares/verifyEmailAlreadyExists.middleware";
import verifyUserAuthMiddleware from "../middlewares/verifyUserAuth.middleware";
import deleteUserController from "../controllers/deleteUser.controller";
import verifyAuthFlowMiddleware from "../middlewares/verifyAuthFlow.middleware";
import updateUserDataController from "../controllers/updateUserData.controller";

const routes = Router();

routes.get("/users", verifyAdmAuthMiddleware, getUsersController);
routes.get("/users/profile", verifyUserAuthMiddleware, userProfileController);

routes.post("/users", verifyEmailAvailability, createUserController);
routes.post("/login", loginController);

routes.delete(
  "/users/:uuid",
  verifyUserAuthMiddleware,
  verifyAuthFlowMiddleware,
  deleteUserController
);

routes.patch(
  "/users/:uuid",
  verifyUserAuthMiddleware,
  verifyAuthFlowMiddleware,
  updateUserDataController
);

export default routes;
