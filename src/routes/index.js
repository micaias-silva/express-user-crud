import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import getUsersController from "../controllers/getUsersController";
import loginController from "../controllers/login.controller";
import verifyAdmAuthMiddleware from "../middlewares/verifyAdmAuth.middleware";
import verifyEmailAvailability from "../middlewares/verifyEmailAlreadyExists.middleware";
import verifyUserAuthMiddleware from "../middlewares/verifyUserAuth.middleware";

const routes = Router();

routes.get("/users", verifyAdmAuthMiddleware, getUsersController);
routes.post("/users", verifyEmailAvailability, createUserController);
routes.post("/login", loginController);

export default routes;
