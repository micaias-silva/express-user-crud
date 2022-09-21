import { response } from "express";
import getUsersService from "../services/getUsers.service";

const getUsersController = (req, res) => {
  const userList = getUsersService();
  return res.status(200).json(userList);
};

export default getUsersController;
