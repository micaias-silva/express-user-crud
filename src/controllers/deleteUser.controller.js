import users from "../database/index.js";
import deleteUserService from "../services/deleteUser.service.js";
import findUserByTokenUtil from "../utilities/findUserByToken.util.js";

const deleteUserController = (req, res) => {
  try {
    const { uuid } = req.params;
    const result = deleteUserService(uuid);
    return res.status(200).json({ message: result });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default deleteUserController;
