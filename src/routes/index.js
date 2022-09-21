import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import getUsersController from "../controllers/getUsersController";

const routes = Router();

routes.get("/users", getUsersController);
routes.post("/users", createUserController);

export default routes;
